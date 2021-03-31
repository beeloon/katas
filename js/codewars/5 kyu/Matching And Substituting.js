// First solution
function change(s, prog, version) {
  const arr = s.split("\n");

  const ver = arr[5].slice(9);
  const phone = arr[3].slice(7);

  const phoneMatch = /^\+1-[0-9]{3}-[0-9]{3}-[0-9]{4}$/g;
  const versionMatch = /^[0-9]+\.[0-9]+$/g;

  if (phone.match(phoneMatch) && ver.match(versionMatch)) {
    if (ver == "2.0") version = ver;

    return `Program: ${prog} Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: ${version}`;
  }

  return "ERROR: VERSION or PHONE";
}

// Better solution
function change(s, prog, version) {
  if (/Version: 2.0\n/.test(s)) version = "2.0";

  if (
    !/Phone: (\+1-\d{3}-\d{3}-\d{4})\n/.test(s) ||
    !/Version: \d+\.\d+\n/.test(s)
  )
    return "ERROR: VERSION or PHONE";

  return `Program: ${prog} Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: ${version}`;
}
