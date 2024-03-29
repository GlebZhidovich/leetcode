var WordDictionary = function () {
  this.dic = {};
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  const len = word.length;
  this.dic[len] ??= {};
  let cur = this.dic[len];

  for (let i = 0; i < word.length; i++) {
    const l = word[i];
    cur[l] ??= {};
    cur = cur[l];
  }
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const len = word.length;

  function search(word, i, dic) {
    if (!dic) {
      return false;
    }
    const l = word[i];
    if (word.length - 1 === i) {
      if (l === ".") {
        for (const key in dic) {
          return true;
        }
        return false;
      } else {
        return l in dic;
      }
    }
    if (l === ".") {
      for (const key in dic) {
        const res = search(word, i + 1, dic[key]);
        if (res) {
          return true;
        }
      }
      return false;
    } else {
      if (l in dic) {
        return search(word, i + 1, dic[l]);
      }
      return false;
    }
  }

  if (len in this.dic) {
    return search(word, 0, this.dic[len]);
  }

  return false;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True
console.log(
  wordDictionary.search("pad"), // return False
  wordDictionary.search("bad"), // return True
  wordDictionary.search(".ad"), // return True
  wordDictionary.search("b..") // return True
);
