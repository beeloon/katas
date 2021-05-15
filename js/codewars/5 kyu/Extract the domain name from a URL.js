// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

// First solution
const domainName = (url) =>
  url.replace(/(https?:\/\/)?(www\.)?/, "").split(".")[0];

// Better solution
const domainName = (url) => url.replace(/.+\/\/|www.|\..+/, "");
