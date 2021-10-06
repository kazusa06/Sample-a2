'use strict'

const textA = document.getElementById('textA');
const textB = document.getElementById('textB');
const textAnswer = document.getElementById('textAnswer');

textA.addEventListener('click', function() {
  if (textAnswer.textContent === '不正解×') {
    return;
  }
  textAnswer.textContent = '正解○';
});

textB.addEventListener('click', function() {
  if (textAnswer.textContent === '正解○') {
    return;
  }
  textAnswer.textContent = '不正解×';
});