const socket = io();

const myFace = document.getElementById("myFace");
const muteBtn = document.getElementById("mute");
const cameraBtn = document.getElementById("camera");
const camerasSelect = document.getElementById("cameras");

const welcome = document.getElementById("welcome");
const call = document.getElementById("call");

call.hidden = true;

let myStream;
let muted = false;
let cameraOff = false;
let roomName;
let myPeerConnection;

const getCameras = async () => {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const cameras = devices.filter(device => device.kind === "videoinput");
    const currentCamera = myStream.getVideoTracks()[0];
    cameras.forEach(camera => {
      const option = document.createElement("option");
      option.value = camera.deviceId;
      option.innerText = camera.label;
      if(currentCamera.label == camera.label) {
        option.selected = true;
      }
      camerasSelect.appendChild(option);
    });
  } catch (e){
    console.log(e);
  }
};
const getMedia = async (deviceId) => {
  const initialConstrains = {
    audio: true,
    video: {facingMode: "user"},
  };
  const cameraConstrains = {
    audio: true,
    video: { deviceId: { exact: deviceId } }
  }
  try {
    myStream = await navigator.mediaDevices.getUserMedia(
      deviceId? cameraConstrains : initialConstrains
    );
    myFace.srcObject = myStream;
    if(!deviceId) {
      await getCameras();
    }
  } catch(e) {
    console.log(e);
  }
};


const handleMuteClick = () => {
  myStream
    .getAudioTracks()
    .forEach((track) => (track.enabled = !track.enabled));
  if(!muted) {
    muteBtn.innerText = "Unmute";
    muted = true;
  } else {
    muteBtn.innerText = "Mute";
    muted = false;
  }
};

const handleCameraClick = () => {
  myStream
    .getVideoTracks()
    .forEach((track) => (track.enabled = !track.enabled));
  if(cameraOff) {
    cameraBtn.innerText = "Turn Camera Off";
    cameraOff = false;
  } else {
    cameraBtn.innerText = "Turn Camera On";
    cameraOff = true;
  }
};

const handleCameraChange = async () => {
  await getMedia(camerasSelect.value);
  if(myPeerConnection) {
    const videoTrack = myStream.getVideoTracks()[0];
    const videoSender = myPeerConnection
      .getSender()
      .find(sender => sender.track.kind === 'video');
    videoSender.replaceTrck(videoTrack);
  }
}

const handleWelcomSubmit = async (event) => {
  event.preventDefault();
  const input = welcomeForm.querySelector("input");
  await initCall();
  socket.emit("join_room", input.value, initCall);
  roomName = input.value;
  input.value = "";
};

const initCall = async () => {
  welcome.hidden= true;
  call.hidden = false;
  await getMedia();
  makeConnection();
}; 

const hanleIce = (data) => {
  console.log("sent candidate");
  socket.emit("ice", data.candidate, roomName);
};

const hanleAddStream = (data) => {
  console.log("got an event from my peer");
  console.log("Peer's Stream", data.streams[0]);
  console.log("My stream", myStream);
  const peerFace = document.getElementById("peerFace");
  peerFace.srcObject = data.streams[0];
}

const makeConnection = () => {
  myPeerConnection = new RTCPeerConnection({
    iceServers: [
      {
        urls: [
          "stun:stun.l.google.com:19302",
          "stun:stun1.google.com:19302",
          "stun:stun2.google.com:19302",
          "stun:stun3.google.com:19302",
          "stun:stun4.google.com:19302",
        ]
      }
    ]
  });
  myPeerConnection.addEventListener("icecandidate", hanleIce);
  myPeerConnection.addEventListener("track", hanleAddStream);
  myStream
    .getVideoTracks()
    .forEach(track => myPeerConnection.addTrack(track, myStream));
};

muteBtn.addEventListener("click", handleMuteClick);
cameraBtn.addEventListener("click", handleCameraClick);
camerasSelect.addEventListener("input", handleCameraChange);

welcomeForm = welcome.querySelector("form");
welcomeForm.addEventListener("submit", handleWelcomSubmit);

//Peer A
socket.on("welcome", async () => {
  const offer = await myPeerConnection.createOffer();
  myPeerConnection.setLocalDescription(offer);
  console.log("sent the offer");
  socket.emit("offer", offer, roomName);
});

//Peer B
socket.on("offer", async (offer) => {
  myPeerConnection.setRemoteDescription(offer);
  const answer = await myPeerConnection.createAnswer();
  myPeerConnection.setLocalDescription(answer);
  socket.emit("answer", answer, roomName);
  console.log("sent the answer");
});

socket.on("answer", answer => {
  console.log("received the answer");
  myPeerConnection.setRemoteDescription(answer);
});

socket.on("ice", ice => {
  console.log("received the candidate");
  myPeerConnection.addIceCandidate(ice);
});