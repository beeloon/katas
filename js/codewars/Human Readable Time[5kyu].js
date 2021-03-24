/**
 * Function recieve time in seconds and return formatted result in human readable format like hh:mm:ss.
 * @param {number} seconds
 * @returns {String}
 */
function humanReadable(seconds) {
  const pad = (u) => (u < 10 ? "0" + u : u);

  const hh = pad(Math.floor(seconds / 3600));
  const mm = pad(Math.floor((seconds / 60) % 60));
  const ss = pad(seconds % 60);

  return `${hh}:${mm}:${ss}`;
}

humanReadable(0) == "00:00:00";
humanReadable(45296) == "12:34:56";
humanReadable(359999) == "99:59:59";
