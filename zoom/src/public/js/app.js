const messageList  = document.querySelector("ul");
const nickForm = document.querySelector("#nick");
const messageForm = document.querySelector("#message");
const socket = new WebSocket(`ws://${window.location.host}`);


const openSocket = () => {
  console.log("Connected to Server ✅");
};

const messageSocket = (message) => {
  const li = document.createElement("li");
  li.innerHTML = message.data;
  messageList.append(li);
};

const closeSocket = () => {
  console.log("Disconnected from the Server ❌");
};

const makeMessage = (type, payload) => {
  const msg = {type, payload};
  return JSON.stringify(msg);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const input = messageForm.querySelector("input");
  socket.send(makeMessage("new_message", input.value));
  const li = document.createElement("li");
  li.innerHTML = `You : ${input.value}`;
  messageList.append(li);
  input.value = "";
};

const handleNickSubmit = (event) => {
  event.preventDefault();
  const input = nickForm.querySelector("input");
  socket.send(makeMessage("nickname",input.value));
};

socket.addEventListener("open", openSocket);
socket.addEventListener("message", messageSocket);
socket.addEventListener("close", closeSocket);

messageForm.addEventListener("submit", handleSubmit);
nickForm.addEventListener("submit", handleNickSubmit);