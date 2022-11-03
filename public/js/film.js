function minutesToHHMM(minutes) {
  const numberMinutes = parseInt(minutes, 10);
  const hours = Math.floor(numberMinutes / 60);
  let restMinutes = numberMinutes%60;
  if (restMinutes < 10) {
    restMinutes = `0${restMinutes}`;
  }
  if (hours <= 0) {
    return `${restMinutes} minutes`;
  } else {
    return `${hours}h${restMinutes}`;
  }
}

const duration = document.querySelector(".duration");
console.log(duration.textContent);
const newDuration = minutesToHHMM(duration.textContent);
duration.textContent = newDuration;
