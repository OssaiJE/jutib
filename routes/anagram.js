import express from "express";
const router = express.Router();


// Anagram controller
const groupAnagrams = (strs) => {
  let result = {};
  for (let word of strs) {
    let cleansed = word.split("").sort().join("");
    if (result[cleansed]) {
      result[cleansed].push(word);
    } else {
      result[cleansed] = [word];
    }
  }
  return Object.values(result);
};

// @desc Get anagrams
// @route Get /anagram
router.get("/", async (req, res) => {
  try {
    let output = groupAnagrams(["ate", "map", "eat", "pat", "tea", "tap"]);
    console.log(output);
    res.send(output);
  } catch (err) {
    console.error(err);
  }
});

export default router;
