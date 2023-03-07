export default function useShuffle(questionsArr) {
  let currentIndex = questionsArr.length,
    randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [questionsArr[currentIndex], questionsArr[randomIndex]] = [questionsArr[randomIndex], questionsArr[currentIndex]];
  }

  return questionsArr;
}
