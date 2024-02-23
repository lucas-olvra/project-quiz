import questions from "./questionsJS.js";
import questionsQA from "./questionsQA.js";
import questionsCypress from "./questionsCypress.js";

const correct = new Set();
const wrong = new Set();

const quiz = document.querySelector("#quiz");
const template = document.querySelector("#quiz-template");
const selectElement = document.querySelector("#select");
const showTotal = document.querySelector("#corrects span");
const showWrong = document.querySelector("dialog");

const quizDataMap = new Map([
  ["0", questions],
  ["1", questionsQA],
  ["2", questionsCypress],
]);

selectElement.addEventListener("change", () => {
  const selectedOption = selectElement.value;
  const quizData = quizDataMap.get(selectedOption);
  displayQuiz(quizData);
  showTotal.textContent = "0 of " + quizData.length;
});

selectElement.dispatchEvent(new Event("change"));

const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () => {
  showWrong.close();
});

function displayQuiz(questions) {
  const totalQuestions = questions.length;

  quiz.innerHTML = "";

  questions.forEach((item, index) => {
    const quizItem = template.content.cloneNode(true);
    const questionText = quizItem.querySelector("h3");
    const answersList = quizItem.querySelector(".answers");
    const groupName = "question-" + index;

    questionText.textContent = item.question;

    item.answer.forEach((answer, answerIndex) => {
      const li = document.createElement("li");
      const input = document.createElement("input");
      const label = document.createElement("label");
      const span = document.createElement("span");

      input.setAttribute("type", "radio");
      input.setAttribute("name", groupName);
      input.setAttribute("value", answerIndex);
      input.setAttribute("data-testid", "inputs");

      span.textContent = answer;
      label.appendChild(span);
      label.prepend(input);

      li.appendChild(label);
      answersList.appendChild(li);

      input.onclick = (event) => {
        const inputsInGroup = document.querySelectorAll(
          `input[name="${groupName}"]`
        );
        for (const inputInGroup of inputsInGroup) {
          inputInGroup.disabled = true;
        }
        event.target.disabled = false;

        const isCorrect = event.target.value == item.correct;
        const isWrong = item.wrong.includes(parseInt(event.target.value));

        if (isCorrect) {
          correct.add(index);
          let newA = document.createElement("a");
          newA.setAttribute("href", "#corrects");
          label.appendChild(newA);
          scrollToCorrect();
        }

        if (isWrong) {
          showWrong.showModal();
          wrong.add(item);
        }

        showTotal.textContent = correct.size + " of " + totalQuestions;
      };
    });

    quiz.appendChild(quizItem);
  });
}

function scrollToCorrect() {
  let targetElement = document.getElementById("corrects");
  if (targetElement) {
    let targetPosition = targetElement.getBoundingClientRect().top;
    window.scroll({
      top: window.scrollX + targetPosition,
      behavior: "smooth",
    });
  }
}
