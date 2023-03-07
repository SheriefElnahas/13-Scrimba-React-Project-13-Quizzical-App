export default function useShuffle(choicesArr) {
  let currentIndex = choicesArr.length,
    randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [choicesArr[currentIndex], choicesArr[randomIndex]] = [choicesArr[randomIndex], choicesArr[currentIndex]];
  }

  return choicesArr;
}
