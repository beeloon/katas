// https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript

function stockList(listOfBook, listOfCat) {
  if (!listOfBook.length || !listOfCat.length) return '';

  const booksAmount = {};

  listOfBook.forEach((el) => {
    const [category, amount] = el.split(' ');
    const catLetter = category[0];
    booksAmount[catLetter] = (booksAmount[catLetter] || 0) + Number(amount);
  });

  return listOfCat.map((el) => `(${el} : ${booksAmount[el] || 0})`).join(' - ');
}
