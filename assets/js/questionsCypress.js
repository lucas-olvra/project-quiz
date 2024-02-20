const questionsCypress = [
  {
    question:
      "What is the main advantage of Cypress compared to other front-end testing tools?",
    answer: [
      "Support for unit tests only.",
      "Ability to test applications quickly and efficiently in a real development environment.",
      "Complex and difficult to learn user interface.",
    ],
    correct: 1,
    wrong: [0, 2],
  },
  {
    question:
      "What type of selectors are most commonly used in Cypress to interact with page elements?",
    answer: ["CSS selectors.", "XPath selectors.", "ID selectors."],
    correct: 0,
    wrong: [1, 2],
  },
  {
    question: "Which Cypress command is used to visit a web page?",
    answer: ["cy.visit()", "cy.find()", "cy.click()"],
    correct: 0,
    wrong: [1, 2],
  },
  {
    question: "How do you expect an element to exist on a page using Cypress?",
    answer: [
      "Using the cy.get() command.",
      "Using the cy.wait() command.",
      "Using the cy.expect() command.",
    ],
    correct: 0,
    wrong: [1, 2],
  },
  {
    question:
      "Which Cypress command is used to interact with text input elements?",
    answer: ["cy.type()", "cy.click()", "cy.submit"],
    correct: 0,
    wrong: [1, 2],
  },
  {
    question: "What is the extension of Cypress test files by default?",
    answer: [".test", ".spec", ".cy"],
    correct: 1,
    wrong: [0, 2],
  },
  {
    question: "Which Cypress method is used to make assertions in tests?",
    answer: ["assert()", "expect()", "check()"],
    correct: 1,
    wrong: [0, 2],
  },
  {
    question:
      "Which Cypress command is used to check whether an element contains certain text?",
    answer: ["cy.contains()", "cy.verify()", "cy.check()"],
    correct: 0,
    wrong: [1, 2],
  },
  {
    question: "Which Cypress method is used to simulate mouse events?",
    answer: ["cy.hover()", "cy.rightClick()", "cy.trigger()"],
    correct: 2,
    wrong: [0, 1],
  },
  {
    question:
      "Which Cypress command is used to wait for a network request to complete?",
    answer: ["cy.waitForNetwork()", "cy.intercept()", "cy.wait()"],
    correct: 2,
    wrong: [0, 1],
  },
];

export default questionsCypress;
