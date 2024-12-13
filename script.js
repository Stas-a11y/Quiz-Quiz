
const topicButton = document.querySelector('.quiz-topic-btn');
const topicMenu = document.querySelector('.topic-menu');
const dropdownItems = document.querySelectorAll('.dropdown-item');
const startQuizButton = document.querySelector('.start-quiz-btn');


let selectedTopic = "";


topicButton.addEventListener('click', () => {
    topicMenu.classList.toggle('active');
});


document.addEventListener('click', (event) => {
    if (!event.target.closest('.topic')) {
        topicMenu.classList.remove('active');
    }
});


dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        selectedTopic = item.textContent;
        topicButton.textContent = `Тематика вікторини: ${selectedTopic}`;
        topicMenu.classList.remove('active');
    });
});


startQuizButton.addEventListener('click', () => {
    if (selectedTopic) {
        localStorage.setItem('quizTopic', selectedTopic);
        window.location.href = 'quiz.html';
    } else {
        alert('Будь ласка, оберіть тематику вікторини!');
    }
});

localStorage.setItem('quizTopic', selectedTopic);
