const isVow = (a) =>
  a.map((v) => ("aeiou".includes((c = String.fromCharCode(v))) ? c : v));
