export default function getHoursStr(timestamp) {
  const SEC = 1;
  const MIN = 60 * SEC;
  const HOUR = 60 * MIN;
  const DAY = 24 * HOUR;
  const now = new Date().getTime() / 1000;
  const diff = now - timestamp;
  let text = "";
  let count = 0;
  if (diff >= DAY) {
    count = Math.floor(diff / DAY);
    text = `${count} day${count === 1 ? "" : "s"} ago`;
  } else if (diff >= HOUR) {
    count = Math.floor(diff / HOUR);
    text = `${count} hour${count === 1 ? "" : "s"} ago`;
  } else if (diff >= MIN) {
    count = Math.floor(diff / MIN);
    text = `${count} min${count === 1 ? "" : "s"} ago`;
  } else {
    count = Math.floor(diff / SEC);
    text = `${count} sec${count === 1 ? "" : "s"} ago`;
  }
  return text;
}
