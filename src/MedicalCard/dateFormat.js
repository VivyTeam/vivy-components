const monthNames = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember"
];

export default function dateFormat(date) {
  const dateTime = new Date(date);
  const month = monthNames[dateTime.getMonth()];

  return `${dateTime.getDate()}. ${month} ${dateTime.getFullYear()}`;
}
