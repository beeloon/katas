function formatDuration(seconds) {
  if (seconds === 0) return "now";

  const years = Math.floor(seconds / 31536000) + " year";
  seconds %= 31536000;

  const days = Math.floor(seconds / 86400) + " day";
  seconds %= 86400;

  const hours = Math.floor(seconds / 3600) + " hour";
  seconds %= 3600;

  const mins = Math.floor(seconds / 60) + " minute";

  const secs = (seconds % 60) + " second";

  const result = [years, days, hours, mins, secs]
    .filter((unit) => +unit.split(" ")[0] > 0)
    .map((unit) => (+unit.split(" ")[0] > 1 ? unit + "s" : unit));

  if (result.length > 1) {
    return [
      ...result.slice(0, result.length - 2),
      result.slice(result.length - 2).join(" and "),
    ].join(", ");
  } else return result[0];
}
