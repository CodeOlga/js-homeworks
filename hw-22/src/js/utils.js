export function getCurrentDate() {
  const currentDate = new Date();
  const options = {
    month: "short",
    day: "numeric",
    year: "numeric",
    weekday: "short",
  };

  return currentDate.toLocaleDateString("en-US", options);
}

export function getCurrentTime() {
  const currentDate = new Date();
  const hours = currentDate.getHours().toString().padStart(2, "0");
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
}
