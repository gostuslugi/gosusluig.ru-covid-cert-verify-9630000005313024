function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

let randomNumbers = document.querySelectorAll('.banner__code-random');

randomNumbers.forEach(item => {
  item.innerText = getRandomInt(10, 100);
})