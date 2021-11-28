import express from "express";
const router = express.Router();

// Factorial controller
const myFactorial = (num) => {
  let baseValue = 1;
  for (let i = 2; i <= num; i++) {
      baseValue = baseValue * i;
  }
  return baseValue;
};

// @desc Get factorial
// @route Get /factorial
router.get("/", async (req, res) => {
  try {
    let output = myFactorial(13);
    // console.log(output);
    res.send(`The factorial of 13 is: ${output}`);
  } catch (err) {
    console.error(err);
  }
});

export default router;
