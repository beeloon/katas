const pairs = {
  A: "T",
  T: "A",
  G: "C",
  C: "G",
};

const DNAStrand = (dna) => dna.replace(/./g, (c) => pairs[c]);
