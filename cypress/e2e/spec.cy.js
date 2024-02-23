/// <reference types="Cypress" />

describe("Project Quiz - Select your language or tool and practice!", () => {
  beforeEach(() => {
    cy.visit("https://project-quiz-eight-mu.vercel.app/");
  });
  it("Check the application title", () => {
    cy.title().should("be.equal", "Quiz");
  });

  it("Selecting correct answers in JavaScript", () => {
    //Array contendo todas as respostas esperadas.
    const answers = [
      "let myVar = 10;",
      "console.log()",
      "+",
      "if-else",
      "&&",
      "===",
      "Boolean",
      "function myFunction() {}",
      "parseInt()",
      "string.length",
    ];

    // Encontra o formulário e procura por todos os elementos input dentro dele
    cy.get("form")
      .find("input")
      .each(($input) => {
        // Itera sobre cada input encontrado
        const span = $input.siblings("span"); // Encontra o elemento span irmão do input

        // Compara o texto do span com cada resposta esperada.
        answers.forEach((answers) => {
          if (span.text() === answers) {
            // Se o texto do span corresponder a resposta
            cy.wrap($input).check(); // Seleciona a opção associada ao span
          }
        });
      });
    cy.get("#corrects").children("span").should("contain.text", "10 of 10");
  });

  it("Selecting correct answers in QA", () => {
    const answers = [
      "Quality Assurance",
      "Prevent defects in the development process.",
      "QA focuses on preventing defects, while QC focuses on identifying defects.",
      "All of the above.",
      "Identify and report bugs during testing.",
      "Identify and report bugs during testing.",
      "Automating tests helps you run repetitive tests quickly and efficiently.",
      "Customer acceptance testing.",
      "A document that describes the general approach to testing the software.",
      "Write tests before writing production code.",
      "White box testing examines the source code, while black box testing does not require internal knowledge of the system.",
    ];

    cy.get("#select")
      .select("QA")
      .get("form")
      .find("input")
      .each(($input) => {
        const span = $input.siblings("span");

        answers.forEach((answers) => {
          if (span.text() === answers) {
            cy.wrap($input).check();
          }
        });
      });

    cy.get("#corrects").children("span").should("contain.text", "10 of 10");
  });

  it("Selecting correct answers in Cypress", () => {
    const answers = [
      "Ability to test applications quickly and efficiently in a real development environment.",
      "CSS selectors.",
      "cy.visit()",
      "Using the cy.get() command.",
      "cy.type()",
      ".spec",
      "expect()",
      "cy.contains()",
      "cy.trigger()",
      "cy.wait()",
    ];

    cy.get("#select")
      .select("Cypress")
      .get("form")
      .find("input")
      .each(($input) => {
        const span = $input.siblings("span");

        answers.forEach((answers) => {
          if (span.text() === answers) {
            cy.wrap($input).check();
          }
        });
      });

    cy.get("#corrects").children("span").should("contain.text", "10 of 10");
  });

  it("Validating a wrong answer in the application", () => {
    const answerWrong = ["variable myVar = 10"];

    cy.get("form")
      .find("input")
      .each(($input, index) => {
        const expectedAnswer = answerWrong[index];
        const span = $input.siblings("span");

        if (span.text() === expectedAnswer) {
          cy.wrap($input).check();
          cy.get(".error").should("be.visible");
        }
      });
  });
});
