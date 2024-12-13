const questions = {
  theme1: [
    // Математика
    {
      question: "Яка з чисел є простим числом?",
      answers: ["4", "7", "8", "9"],
      correct: 1,
    },
    {
      question: "Що таке Пі?",
      answers: ["Число", "Функція", "Відрізок", "Точка"],
      correct: 0,
    },
    {
      question: "Яка площа прямокутника зі сторонами 5 і 10?",
      answers: ["15", "50", "30", "100"],
      correct: 1,
    },
    {
      question: "Яка формула для обчислення периметра кола?",
      answers: ["P = 2πr", "P = 2r", "P = r²", "P = πr²"],
      correct: 0,
    },
    {
      question: "Як називається рівняння лінії, яка проходить через дві точки?",
      answers: [
        "Лінійне рівняння",
        "Рівняння прямої",
        "Квадратичне рівняння",
        "Рівняння круга",
      ],
      correct: 1,
    },
    {
      question: "Що таке похідна функції?",
      answers: [
        "Швидкість зміни функції",
        "Розмір функції",
        "Графік функції",
        "Мінімум функції",
      ],
      correct: 0,
    },
    {
      question: "Як обчислити площу трикутника?",
      answers: [
        "S = 1/2 * основа * висота",
        "S = основа * висота",
        "S = основа + висота",
        "S = 1/2 * сторони",
      ],
      correct: 0,
    },
    {
      question: "Яка сума внутрішніх кутів трикутника?",
      answers: ["180°", "360°", "90°", "270°"],
      correct: 0,
    },
    {
      question: "Що таке вектор?",
      answers: [
        "Число",
        "Надсистема",
        "Напрямлений відрізок",
        "Точка на площині",
      ],
      correct: 2,
    },
    {
      question: "Скільки сторін у правильному шестикутнику?",
      answers: ["4", "6", "8", "12"],
      correct: 1,
    },
    {
      question: "Яка формула для обчислення об'єму кулі?",
      answers: ["V = 4/3πr³", "V = πr²h", "V = 2πr", "V = r²h"],
      correct: 0,
    },
    {
      question: "Яка одиниця вимірювання кута?",
      answers: ["Градус", "Метр", "Секунда", "Грам"],
      correct: 0,
    },
    {
      question: "Який результат множення 3 * 4?",
      answers: ["7", "12", "10", "15"],
      correct: 1,
    },
  ],
  theme2: [
    // Фізика
    {
      question: "Яка одиниця вимірювання сили?",
      answers: ["Ньютон", "Джоуль", "Ват", "Ампер"],
      correct: 0,
    },
    {
      question: "Яка швидкість світла в вакуумі?",
      answers: ["300,000 км/с", "150,000 км/с", "500,000 км/с", "350,000 км/с"],
      correct: 0,
    },
    {
      question: "Як називається здатність тіла до руху?",
      answers: ["Маса", "Інерція", "Швидкість", "Сила"],
      correct: 1,
    },
    {
      question: "Як вимірюється температура?",
      answers: ["В градусах Кельвіна", "В метрах", "В Ньютонах", "В амперах"],
      correct: 0,
    },
    {
      question: "Що таке сила тяжіння?",
      answers: [
        "Сила, яка притягує об'єкти до центру Землі",
        "Сила, що діє на об'єкт у воді",
        "Сила, яка визначає масу",
        "Сила, що виникає при контакті двох тіл",
      ],
      correct: 0,
    },
    {
      question: "Як називається одиниця вимірювання енергії?",
      answers: ["Джоуль", "Ньютон", "Кулон", "Ампер"],
      correct: 0,
    },
    {
      question: "Що таке кінетична енергія?",
      answers: [
        "Енергія руху",
        "Енергія спокою",
        "Енергія тепла",
        "Енергія деформації",
      ],
      correct: 0,
    },
    {
      question: "Що таке сила електричного струму?",
      answers: [
        "Швидкість руху електронів",
        "Напруга",
        "Індукція",
        "Магнітне поле",
      ],
      correct: 0,
    },
    {
      question: "Як називається закон збереження енергії?",
      answers: [
        "Закон Ньютона",
        "Закон Ома",
        "Закон Архімеда",
        "Закон збереження енергії",
      ],
      correct: 3,
    },
    {
      question: "Яка найбільша швидкість в природі?",
      answers: [
        "Швидкість звуку",
        "Швидкість світла",
        "Швидкість обертання Землі",
        "Швидкість космічного корабля",
      ],
      correct: 1,
    },
    {
      question: "Як називається відношення сили до площі?",
      answers: ["Тиск", "Швидкість", "Момент сили", "Інерція"],
      correct: 0,
    },
  ],
  theme3: [
    // Хімія
    {
      question: "Який з елементів є металом?",
      answers: ["Кисень", "Азот", "Залізо", "Вуглець"],
      correct: 2,
    },
    {
      question: "Що таке хімічна реакція?",
      answers: [
        "Перетворення одного елемента в інший",
        "Змішування речовин",
        "Процес зміни речовини з утворенням нових",
        "Процес розчинення",
      ],
      correct: 2,
    },
    {
      question: "Яка з цих речовин є кислотною?",
      answers: ["Натрій гідроксид", "Сірчана кислота", "Вапняк", "Амоніак"],
      correct: 1,
    },
    {
      question: "Що таке атом?",
      answers: [
        "Частинка елемента",
        "Основна одиниця хімічної реакції",
        "Молекула",
        "Елементарна частинка з масою",
      ],
      correct: 0,
    },
    {
      question: "Який газ утворюється при згорянні вуглецю?",
      answers: ["Вуглекислий газ", "Водяна пара", "Метан", "Амміак"],
      correct: 0,
    },
    {
      question: "Який елемент має хімічний символ Na?",
      answers: ["Калій", "Натрій", "Нітроген", "Никель"],
      correct: 1,
    },
    {
      question: "Що таке молекула?",
      answers: [
        "Загальна кількість атомів",
        "Найменша частинка речовини",
        "Комбінація електронів і протонів",
        "Сукупність атомів, що утворюють сполуку",
      ],
      correct: 3,
    },
    {
      question: "Який газ є необхідним для дихання людини?",
      answers: ["Оксиген", "Азот", "Вуглекислий газ", "Гелій"],
      correct: 0,
    },
    {
      question: "Що таке розчин?",
      answers: [
        "Суміш двох або більше речовин",
        "Молекула",
        "Частина атома",
        "Іонна сполука",
      ],
      correct: 0,
    },
    {
      question: "Який з елементів не є благородним газом?",
      answers: ["Неон", "Аргон", "Кисень", "Гелій"],
      correct: 2,
    },
  ],
};

const topicsToTheme = {
  Математика: "theme1",
  Фізика: "theme2",
  Хімія: "theme3",
};

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

const quizTopicElement = document.querySelector(".quiz-topic");
const savedTopic = localStorage.getItem("quizTopic");

if (savedTopic) {
  quizTopicElement.textContent = `Тематика вікторини: ${savedTopic}`;
} else {
  quizTopicElement.textContent = "Тематика вікторини: Не обрано";
}

const selectedQuestions =
  savedTopic && questions[topicsToTheme[savedTopic]]
    ? questions[topicsToTheme[savedTopic]]
        .sort(() => Math.random() - 0.5)
        .slice(0, 12)
    : [];

console.log(selectedQuestions);

function showQuestion() {
  const questionElement = document.querySelector(".question");
  const answersContainer = document.querySelector(".answer-container");
  const answerQuestionBtn = document.querySelector(".answer-question-btn");
  const finishBtn = document.querySelector(".finish-btn");

  if (currentQuestionIndex >= selectedQuestions.length) {
    finishBtn.style.display = "block";
    answerQuestionBtn.style.display = "none";
    return;
  }

  const currentQuestion = selectedQuestions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer, index) => {
    const answerButton = document.createElement("button");
    answerButton.classList.add("answer-btn");
    answerButton.textContent = answer;
    answerButton.onclick = () => selectAnswer(index);
    answersContainer.appendChild(answerButton);
  });

  answerQuestionBtn.style.display = "block";
  finishBtn.style.display = "none";
}

function selectAnswer(index) {
  selectedAnswer = index;
  document.querySelectorAll(".answer-btn").forEach((button, i) => {
    if (i === index) {
      button.style.backgroundColor = "lightblue";
    } else {
      button.style.backgroundColor = "";
    }
  });
}

function answerQuestion() {
  const currentQuestion = selectedQuestions[currentQuestionIndex];
  if (selectedAnswer === currentQuestion.correct) {
    score++;
  }
  currentQuestionIndex++;
  selectedAnswer = null;
  showQuestion();
}

function finishQuiz() {
  localStorage.setItem("quizScore", score);
  localStorage.setItem("quizTotal", selectedQuestions.length);
  window.location.href = "results.html";
}

document
  .querySelector(".answer-question-btn")
  .addEventListener("click", answerQuestion);

document.querySelector(".finish-btn").addEventListener("click", finishQuiz);

showQuestion();

document.querySelector(".exit-btn").addEventListener("click", () => {
  window.location.href = "index.html";
})
