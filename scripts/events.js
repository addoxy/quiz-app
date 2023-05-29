import data from "./data.js";

data.forEach((object) => {
  const dataQuestion = object.question;
  const dataOptions = object.options;
  const dataAnswer = object.answer;

  const pageQuestion = document.querySelector(".question");
  pageQuestion.innerText = dataQuestion;

  const pageOption1 = document.querySelector(".option-1");
  pageOption1.innerText = dataOptions.a;

  const pageOption2 = document.querySelector(".option-2");
  pageOption2.innerText = dataOptions.b;

  const pageOption3 = document.querySelector(".option-3");
  pageOption3.innerText = dataOptions.c;

  const pageOption4 = document.querySelector(".option-4");
  pageOption4.innerText = dataOptions.d;
});

// use await to fair for user to check answer
