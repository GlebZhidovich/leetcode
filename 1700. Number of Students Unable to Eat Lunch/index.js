/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  const arr = [0, 0];
  students.forEach((n) => arr[n]++);

  for (let i = 0; i < sandwiches.length; i++) {
    const element = sandwiches[i];
    if (arr[element] === 0) {
      break;
    }
    arr[element]--;
  }

  return arr[0] + arr[1];
};
