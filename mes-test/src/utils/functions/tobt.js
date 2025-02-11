const colors = [
  {
    backgroundColor : "rgb(166, 166, 166)",
    color : "#000"
  },
  {
    backgroundColor : "rgb(0, 212, 6)",
    color : "#fff"
  },
  {
    backgroundColor : "rgb(255, 0, 0)",
    color : "#fff"
  },
]


export default function getFlightInfoCardColor(eobt, tobt, tsat, ttot) {
  const [hours, minutes] = eobt.split(":").map(Number);
  if(minutes < 10) return colors[2];
  else if(minutes < 31) return colors[0];
  else return colors[1];
}