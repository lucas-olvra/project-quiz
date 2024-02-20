const questions = [
  {
    question: "What is the correct way to declare a variable in JavaScript?",
    answer: ["let myVar = 10;", "variable myVar = 10;", "myVar := 10;"],
    correct: 0,
    wrong: [1, 2],
  },
  {
    question:
      "Which of these methods is used to print something to the console in JavaScript?",
    answer: ["print()", "console.log()", "echo()"],
    correct: 1,
    wrong: [0, 2],
  },
  {
    question: "What is the string concatenation symbol in JavaScript?",
    answer: ["+", "&", "|"],
    correct: 0,
    wrong: [1, 2],
  },
  {
    question:
      "What is the control flow framework used to make decisions in JavaScript?",
    answer: ["if-else", "loop", "switch-case"],
    correct: 0,
    wrong: [1, 2],
  },
  {
    question: "What is the logical operator 'AND' in JavaScript?",
    answer: ["&&", "||", "!"],
    correct: 0,
    wrong: [1, 2],
  },
  {
    question: "How do you refer to 'strict equality' in JavaScript?",
    answer: ["==", "===", "="],
    correct: 1,
    wrong: [0, 2],
  },
  {
    question:
      "What is the name of the data type that can represent 'true' or 'false' in JavaScript?",
    answer: ["Boolean", "Bool", "Bit"],
    correct: 0,
    wrong: [1, 2],
  },
  {
    question: "How do you declare a function in JavaScript?",
    answer: [
      "function myFunction() {}",
      "myFunction = function() {}",
      "def myFunction() {}",
    ],
    correct: 0,
    wrong: [1, 2],
  },
  {
    question:
      "What is the function used to convert a string to a number in JavaScript?",
    answer: ["toInt()", "parseFloat()", "parseInt()"],
    correct: 2,
    wrong: [0, 1],
  },
  {
    question:
      "What is the method used to find the length of a string in JavaScript?",
    answer: ["string.length()", "string.size()", "string.length"],
    correct: 2,
    wrong: [0, 1],
  },
];

export default questions;
