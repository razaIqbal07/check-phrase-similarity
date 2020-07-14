import { ignoredWords } from "./ignoredWords";

const checkSimilarity = (base, comparisonSentences) => {
  let result = [];
  let count = 0;
  let similarityPercentage = 0;
  let baseArray = base.split(" ");
  comparisonSentences.forEach(sentence => {
    let currentPhrase = sentence.split(" ");
    let phraseLength = currentPhrase.length;

    currentPhrase.forEach(word => {
      if (baseArray.includes(word) && !ignoredWords.includes(word)) {
        count++;
      }
    });
    similarityPercentage = ((count / phraseLength) * 100).toFixed(2);
    result.push({
      base: base,
      currentPhrase: sentence,
      similarity: similarityPercentage + "%"
    });
    count = 0;
    similarityPercentage = 0;
  });
  console.log(result);
  return result;
};

checkSimilarity("hey there", ["hey yo", "ok"]);
