import {questions} from './questions.js';

console.log(document.getElementById("q1"));
var points = 0;
document.getElementById("score").innerHTML = `SCORE:${points}`;

console.log(questions[0])

const Body = document.body


const question = document.getElementById("q1").addEventListener("click", function(){
    Body.innerHTML = "";
    Body.insertAdjacentHTML('beforeend', '<ul class = "question">' +questions[0].qprompt+ '</ul>');
    Body.insertAdjacentHTML('beforeend', '<ul class = "choice">' +questions[0].c1+ '</ul>');
    Body.insertAdjacentHTML('beforeend', '<ul class = "choice">' +questions[0].c2+ '</ul>');
    Body.insertAdjacentHTML('beforeend', '<ul class = "choice">' +questions[0].c3+ '</ul>');
    Body.insertAdjacentHTML('beforeend', '<ul class = "choice">' +questions[0].c4+ '</ul>');
})

