import "bootstrap/dist/css/bootstrap.css";

export default function Docs() {
  const hours = date.getHours();

  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  return <h1>Good {timeOfDay}!</h1>;
  // return <h1>hello world</h1>;
}
