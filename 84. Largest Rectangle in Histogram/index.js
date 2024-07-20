/**
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea(heights) {
  heights.push(-1);

  let max = heights[0];
  const stack = [[max, 0]];

  for (let i = 1; i < heights.length; i++) {
    const curN = heights[i];
    const prevN = heights[i - 1];

    // если предыдущий элемент больше текущиго, освобождаю стек
    if (prevN > curN) {
      let last = stack[stack.length - 1];
      for (let j = stack.length - 1; j >= 0; j--) {
        const curElem = stack[j];

        // если число в стеке меньше текущего, заканчиваю подсчет
        if (curElem[0] < curN) {
          break;
        }

        const nextElem = stack[j - 1] || [-1];
        let size;

        last = stack.pop();

        if (curElem[0] > nextElem[0]) {
          size = curElem[0] * (i - curElem[1]);
        } else {
          let lastElem;

          for (let t = j - 1; t >= 0; t--) {
            const elem = stack[t];

            if (elem[0] < curElem[0]) {
              break;
            }

            j--;
            lastElem = stack.pop();
          }

          size = curElem[0] * (i - lastElem[1]);
          last = lastElem;
        }

        max = Math.max(max, size);
      }

      stack.push(last);
    }

    stack.push([curN, i]);
  }

  return max;
}
const res = largestRectangleArea([2, 1, 2, 0, 3, 2, 2, 3]);
// const res = largestRectangleArea([2, 1, 2]);
console.log("🚀 ~ res:", res);
