const question = document.querySelectorAll(".question");

question.forEach(function (ques) {
  ques.addEventListener("click", function () {
    ques.parentNode.classList.toggle("active");
  });
});
