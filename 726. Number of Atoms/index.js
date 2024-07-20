/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
 
  const stack = [];

  let i = 0;
  while (i < formula.length) {
    const elem = formula[i];

    if (elem === "(") {
      for (let j = stack.length - 1; j >= 0; j--) {
        const s = stack[j];
      }
    }
  }
};
// K4(ON(SO3)2)2
// K4(NS2O7)2
// K4N2S4O14
"K4(ON(SO3)2)2".split(/A-Z/g)