
const quizTopicElement = document.querySelector('.quiz-topic');
const correctAnswersElement = document.querySelector('.correct-answers');
const incorrectAnswersElement = document.querySelector('.incorrect-answers');
const successRateElement = document.querySelector('.succsess-rate');


const topic = localStorage.getItem('quizTopic');
const score = localStorage.getItem('quizScore');
const total = localStorage.getItem('quizTotal');
const incorrect = total - score;

quizTopicElement.textContent = `Тематика вікторини: ${topic || "Не обрано"}`;
correctAnswersElement.textContent = `Кількість правильних відповідей: ${score || 0}`;
incorrectAnswersElement.textContent = `Кількість не правильних відповідей: ${incorrect || 0}`;
successRateElement.textContent = `Процент успішності: ${((score / total) * 100).toFixed(2)}%`;


document.querySelector('.try-again-btn').addEventListener('click', () => {
    window.location.href = 'quiz.html';
});

document.querySelector('.return-btn').addEventListener('click', () => {
    window.location.href = 'index.html';
});

document.querySelector('.leave-btn').addEventListener('click', () => {
    window.close();
})