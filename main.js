let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
let overusedWords = ["really", "very", "basically"];
let unnecessaryWords = ["extremely", "literally", "actually"];
let storyWords = story.split(" ");

console.log(`Original Story Word Count = ${storyWords.length}`);

const betterWords = (arr1, arr2) => {
  const filtered = arr1.filter((el) => {
    return arr2.indexOf(el) === -1;
  });
  return filtered.join(" ");
};
betterWords(storyWords, unnecessaryWords);

console.log(`Checking for overused words "${overusedWords.join(", ")}"`);
for (let i = 0; i < overusedWords.length; i++) {
  let count = 0;
  let word = overusedWords[i];
  for (let j = 0; j < storyWords.length; j++) {
    if (word === storyWords[j]) {
      let total = 0;
      count++;
      total = total + count;
    }
  }

  console.log(
    `The word "${overusedWords[
      i
    ].toUpperCase()}" appears ${count} times in the document.`
  );
}

let storySentencePeriodCount = story.split(".").length;
let storySentenceExclaimCount = story.split("!").length;
let totalSentences = storySentencePeriodCount + storySentenceExclaimCount;
console.log(`Sentences = ${totalSentences}`);

const results = function (storyWords, filteredArray) {
  console.log(`Word Count = ${storyWords.length}`);
};

results(storyWords);

let mf = 1;
let m = 0;
let item;

for (let i = 0; i < storyWords.length; i++) {
  for (let j = 0; j < storyWords.length; j++) {
    if (storyWords[i] === storyWords[j]) m++;
    if (mf < m) {
      mf = m;
      item = storyWords[i];
    }
  }
  m = 0;
}

console.log(
  `"${item}" appears (${mf} times) and is the most frequent word in the story.`
);
