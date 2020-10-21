import { questions } from "./questions.js";
var points = 0;
var complete = false;
const category1 = "BASICS";
const category2 = "STATS";
const category3 = "COMPETITIVE";
const category4 = "VALUES";
const Body = document.body;
function checkforcompletion() {
  complete = true;
  let i;
  for (i = 0; i < 16; i++) {
    if (questions[i].answered) {
      console.log(`question ${i + 1} complete`);
    } else {
      complete = false;
    }
  }
}
function startquestion(questionnum) {
  questions[questionnum].answered = true;
  Body.innerHTML = "";
  Body.insertAdjacentHTML(
    "beforeend",
    '<ul id = "question">' + questions[questionnum].qprompt + "</ul>"
  );
  Body.insertAdjacentHTML(
    "beforeend",
    '<button class = "choice" id = "c1">' +
      questions[questionnum].c1 +
      "</button>"
  );
  Body.insertAdjacentHTML(
    "beforeend",
    '<button class = "choice" id = "c2">' +
      questions[questionnum].c2 +
      "</button>"
  );
  Body.insertAdjacentHTML(
    "beforeend",
    '<button class = "choice" id = "c3">' +
      questions[questionnum].c3 +
      "</button>"
  );
  Body.insertAdjacentHTML(
    "beforeend",
    '<button class = "choice" id = "c4">' +
      questions[questionnum].c4 +
      "</button>"
  );
  document.getElementById("c1").addEventListener("click", function () {
    if (questions[questionnum].c1 == questions[questionnum].answer) {
      points = points + (100 * (questionnum % 4) + 100);
      correct();
      setTimeout(loadCategories, 1500);
    } else {
      wrong();
      setTimeout(loadCategories, 1500);
    }
  });
  document.getElementById("c2").addEventListener("click", function () {
    if (questions[questionnum].c2 == questions[questionnum].answer) {
      points = points + (100 * (questionnum % 4) + 100);
      correct();
      setTimeout(loadCategories, 1500);
    } else {
      wrong();
      setTimeout(loadCategories, 1500);
    }
  });
  document.getElementById("c3").addEventListener("click", function () {
    if (questions[questionnum].c3 == questions[questionnum].answer) {
      points = points + (100 * (questionnum % 4) + 100);
      correct();
      setTimeout(loadCategories, 1500);
    } else {
      wrong();
      setTimeout(loadCategories, 1500);
    }
  });
  document.getElementById("c4").addEventListener("click", function () {
    if (questions[questionnum].c4 == questions[questionnum].answer) {
      points = points + (100 * (questionnum % 4) + 100);
      correct();
      setTimeout(loadCategories, 1500);
    } else {
      wrong();
      setTimeout(loadCategories, 1500);
    }
  });
}
function loadCategories() {
  checkforcompletion();
  if (complete) {
    document.body.innerHTML = `<div>YOU HAVE FINISHED THE QUIZ!!!</div>
    Your score is ${points} out of 4000.`;
  } else {
    document.body.innerHTML = `<div class="row" id="row1">
    <div class="category">${category1}</div>
    <div class="category">${category2}</div>
    <div class="category">${category3}</div>
    <div class="category">${category4}</div>        
    </div>
    <div class="row" id="row2">
    </div>
    <div class="row" id="row3">
    </div>
    <div class="row" id="row4">
    </div>
    <div class="row" id="row5">
    </div>
    <div class="row" id="score"></div>`;
    let i;
    for (i = 0; i < 4; i++) {
      document.getElementById(
        `row${i + 2}`
      ).innerHTML = `<button class="points-question" id="q${1 + i}">${
        1 + i
      }00</button> <button class="points-question" id="q${5 + i}">${
        1 + i
      }00</button> <button class="points-question" id="q${9 + i}">${
        i + 1
      }00</button> <button class="points-question" id="q${13 + i}">${
        1 + i
      }00</button>`;
    }
    const q1 = document.getElementById("q1");
    const q2 = document.getElementById("q2");
    const q3 = document.getElementById("q3");
    const q4 = document.getElementById("q4");
    const q5 = document.getElementById("q5");
    const q6 = document.getElementById("q6");
    const q7 = document.getElementById("q7");
    const q8 = document.getElementById("q8");
    const q9 = document.getElementById("q9");
    const q10 = document.getElementById("q10");
    const q11 = document.getElementById("q11");
    const q12 = document.getElementById("q12");
    const q13 = document.getElementById("q13");
    const q14 = document.getElementById("q14");
    const q15 = document.getElementById("q15");
    const q16 = document.getElementById("q16");

    q1.addEventListener("click", function () {
      if (questions[0].answered) {
        alert("You already did this question!");
      } else {
        startquestion(0);
      }
    });

    q2.addEventListener("click", function () {
      if (questions[1].answered) {
        alert("You already did this question!");
      } else {
        startquestion(1);
      }
    });
    q3.addEventListener("click", function () {
      if (questions[2].answered) {
        alert("You already did this question!");
      } else {
        startquestion(2);
      }
    });
    q4.addEventListener("click", function () {
      if (questions[3].answered) {
        alert("You already did this question!");
      } else {
        startquestion(3);
      }
    });
    q5.addEventListener("click", function () {
      if (questions[4].answered) {
        alert("You already did this question!");
      } else {
        startquestion(4);
      }
    });
    q6.addEventListener("click", function () {
      if (questions[5].answered) {
        alert("You already did this question!");
      } else {
        startquestion(5);
      }
    });
    q7.addEventListener("click", function () {
      if (questions[6].answered) {
        alert("You already did this question!");
      } else {
        startquestion(6);
      }
    });
    q8.addEventListener("click", function () {
      if (questions[7].answered) {
        alert("You already did this question!");
      } else {
        startquestion(7);
      }
    });
    q9.addEventListener("click", function () {
      if (questions[8].answered) {
        alert("You already did this question!");
      } else {
        startquestion(8);
      }
    });
    q10.addEventListener("click", function () {
      if (questions[9].answered) {
        alert("You already did this question!");
      } else {
        startquestion(9);
      }
    });
    q11.addEventListener("click", function () {
      if (questions[10].answered) {
        alert("You already did this question!");
      } else {
        startquestion(10);
      }
    });
    q12.addEventListener("click", function () {
      if (questions[11].answered) {
        alert("You already did this question!");
      } else {
        startquestion(11);
      }
    });
    q13.addEventListener("click", function () {
      if (questions[12].answered) {
        alert("You already did this question!");
      } else {
        startquestion(12);
      }
    });
    q14.addEventListener("click", function () {
      if (questions[13].answered) {
        alert("You already did this question!");
      } else {
        startquestion(13);
      }
    });
    q15.addEventListener("click", function () {
      if (questions[14].answered) {
        alert("You already did this question!");
      } else {
        startquestion(14);
      }
    });
    q16.addEventListener("click", function () {
      if (questions[15].answered) {
        alert("You already did this question!");
      } else {
        startquestion(15);
      }
    });
    document.getElementById("score").innerHTML = `SCORE:${points}`;
  }
}
loadCategories();

function correct() {
  Body.innerHTML = '<ul id = "correct">✓</ul>';
}

function wrong() {
  Body.innerHTML = '<ul id = "wrong">✘</ul>';
}
