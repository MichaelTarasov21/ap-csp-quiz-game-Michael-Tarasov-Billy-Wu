import { questions } from "./questions.js";
var points = 0;
const category1 = "BASICS";
const category2 = "STATS";
const category3 = "COMPETITIVE";
const category4 = "VALUES";
function loadquestionselectionpage() {
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
    ).innerHTML = `<button class="points question" id="q${1 + i}">${
      1 + i
    }00</button> <button class="points question" id="q${5 + i}">${
      1 + i
    }00</button> <button class="points question" id="q${9 + i}">${
      i + 1
    }00</button> <button class="points question" id="q${13 + i}">${
      1 + i
    }00</button>`;
  }
  document.getElementById("score").innerHTML = `SCORE:${points}`;
}
loadquestionselectionpage();

//console.log(questions[0])

//const Body = document.body

//const question = document.getElementById("q1").addEventListener("click", function(){
//    Body.innerHTML = "";
//    Body.insertAdjacentHTML('beforeend', '<ul class = "question">' +questions[0].qprompt+ '</ul>');
//    Body.insertAdjacentHTML('beforeend', '<ul class = "choice">' +questions[0].c1+ '</ul>');
//    Body.insertAdjacentHTML('beforeend', '<ul class = "choice">' +questions[0].c2+ '</ul>');
//    Body.insertAdjacentHTML('beforeend', '<ul class = "choice">' +questions[0].c3+ '</ul>');
//    Body.insertAdjacentHTML('beforeend', '<ul class = "choice">' +questions[0].c4+ '</ul>');
//})
