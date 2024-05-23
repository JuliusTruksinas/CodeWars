/*
TASK:
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
*/

/* ANSWER: */
function moveZeros(arr) {
  let results = [];

  for (let el of arr) {
    if (el !== 0) {
      results.push(el);
    }
  }

  const zeroCount = arr.length - results.length;

  for (let i = 0; i < zeroCount; i++) {
    results.push(0);
  }

  return results;
}
