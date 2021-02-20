function displayTime() {
  let dateTime = new Date();
  let hrs = dateTime.getHours();
  let min = dateTime.getMinutes();
  let sec = dateTime.getSeconds();
  let session= document.getElementById("session")

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDayOfWeek= daysOfWeek[dateTime.getDay()]

  if(hrs >= 12){
    session.innerHTML = "PM"
  }else{
    session.innerHTML = "AM"
  }

  if(hrs > 12){
    hrs= hrs - 12
  }

  if(hrs < 10){
    hrs= "0" + hrs
  }
  if(min < 10){
    min= "0" + min
  }
  if(sec < 10){
    sec= "0" + sec
  }

  document.getElementById("day").innerHTML= currentDayOfWeek;
  document.getElementById("hours").innerHTML= hrs;
  document.getElementById("minutes").innerHTML= min;
  document.getElementById("seconds").innerHTML= sec;
}

setInterval(() => {
    displayTime()
}, 10);