/* ==========================================================================
   BANCO DE PREGUNTAS ILUSTRADAS CON TEMAS COLORIDOS (GRADO DÉCIMO)
   ========================================================================== */

const gameData = [
    // NIVEL 1: Vulcanología y Geodinámica
    {
        level: 1,
        title: "Nivel 1: Vulcanología y Geodinámica",
        questions: [
            {
                category: "Vulcanología",
                themeClass: "theme-volcano",
                mediaBg: "linear-gradient(135deg, #f97316, #ea580c)",
                mediaIcon: "fa-solid fa-volcano",
                mediaTitle: "Actividad Fumarólica y Magmática",
                question: "El volcán Puracé forma parte de la Cadena Volcánica de los Coconucos. ¿Qué tipo de magma genera comúnmente su actividad explosiva y fumarólica?",
                options: [
                    "a) Magma andesítico rico en sílice y azufre",
                    "b) Magma basáltico ultralíquido sin gases",
                    "c) Lava submarina de alta densidad",
                    "d) Magma de manto profundo sin minerales"
                ],
                correct: 0,
                hint: "Pista: La presencia masiva de azufre y gases en Puracé caracteriza al magma andesítico continental."
            },
            {
                category: "Geología",
                themeClass: "theme-water",
                mediaBg: "linear-gradient(135deg, #0284c7, #06b6d4)",
                mediaIcon: "fa-solid fa-hot-tub-person",
                mediaTitle: "Fuentes Termales de San Juan",
                question: "Las fuentes termales de San Juan presentan temperaturas elevadas y coloraciones verdosas. ¿A qué fenómeno geoquímico se debe este color?",
                options: [
                    "a) Contaminación con plásticos orgánicos",
                    "b) Alta concentración de sulfatos, minerales y microalgas termófilas",
                    "c) Colorante sintético vertido por ríos",
                    "d) Reacción directa con la luz de la luna"
                ],
                correct: 1,
                hint: "Pista: Minerales volcánicos disueltos y microorganismos adaptados al calor extremo generan los tonos de las aguas termales."
            },
            {
                category: "Tectónica",
                themeClass: "theme-volcano",
                mediaBg: "linear-gradient(135deg, #e11d48, #be123c)",
                mediaIcon: "fa-solid fa-earth-americas",
                mediaTitle: "Geodinámica de Placas Tectónicas",
                question: "¿Qué interacción de placas tectónicas da origen a la Cordillera Central y a la actividad volcánica del Puracé?",
                options: [
                    "a) Separación de la Placa Africana y la Placa Caribe",
                    "b) Subducción de la Placa de Nazca debajo de la Placa Sudamericana",
                    "c) Rozamiento de la Placa Pacífica con la Placa Norteamericana",
                    "d) Choque entre la Placa Antártica y la Indoaustraliana"
                ],
                correct: 1,
                hint: "Pista: La corteza oceánica del Pacífico se hunde bajo el continente sudamericano."
            }
        ]
    },

    // NIVEL 2: Ecología de Páramo y Ciclo Hidrológico
    {
        level: 2,
        title: "Nivel 2: Ecología de Páramo",
        questions: [
            {
                category: "Ecología",
                themeClass: "theme-paramo",
                mediaBg: "linear-gradient(135deg, #16a34a, #15803d)",
                mediaIcon: "fa-solid fa-plant-wilt",
                mediaTitle: "Frailejones (Espeletia)",
                question: "¿Por qué los frailejones son considerados especies clave en la regulación del ciclo hídrico del Puracé?",
                options: [
                    "a) Porque absorben el agua subterránea y la evaporan de inmediato",
                    "b) Porque capturan la neblina con sus hojas afelpadas y la liberan lentamente al suelo",
                    "c) Porque consumen todo el oxígeno del aire circundante",
                    "d) Porque sus raíces destruyen las fuentes de agua"
                ],
                correct: 1,
                hint: "Pista: Sus hojas vellosas atrapan las microgotas de las nubes del páramo."
            },
            {
                category: "Conservación",
                themeClass: "theme-paramo",
                mediaBg: "linear-gradient(135deg, #059669, #047857)",
                mediaIcon: "fa-solid fa-paw",
                mediaTitle: "Fauna Silvestre (Oso de Anteojos)",
                question: "El Oso de Anteojos (Tremarctos ornatus) en el Parque Puracé cumple la función ecológica de:",
                options: [
                    "a) Depredador masivo de ganado de alta montaña",
                    "b) Dispersor de semillas y regulador de la vegetación en los bosques altoandinos",
                    "c) Especie invasora proveniente de Norteamérica",
                    "d) Animal doméstico de las comunidades locales"
                ],
                correct: 1,
                hint: "Pista: Al consumirse frutas y plantas silvestres, distribuye semillas a lo largo de su hábitat."
            },
            {
                category: "Hidrología",
                themeClass: "theme-water",
                mediaBg: "linear-gradient(135deg, #0284c7, #0369a1)",
                mediaIcon: "fa-solid fa-water",
                mediaTitle: "Estrella Fluvial Colombiana",
                question: "En el macizo donde se halla Puracé nacen cuatro de los ríos más importantes de Colombia. ¿Cuáles son dos de ellos?",
                options: [
                    "a) Río Magdalena y Río Cauca",
                    "b) Río Orinoco y Río Amazonas",
                    "c) Río Atrato y Río Sinú",
                    "d) Río Baudó y Río Catatumbo"
                ],
                correct: 0,
                hint: "Pista: Las arterias fluviales más grandes que atraviesan el interior del país de sur a norte."
            }
        ]
    },

    // NIVEL 3: Patrimonio Cultural y Comunidad Coconuco
    {
        level: 3,
        title: "Nivel 3: Patrimonio y Comunidad",
        questions: [
            {
                category: "Etnocultura",
                themeClass: "theme-culture",
                mediaBg: "linear-gradient(135deg, #9333ea, #7e22ce)",
                mediaIcon: "fa-solid fa-people-roof",
                mediaTitle: "Pueblo Indígena Coconuco",
                question: "¿Cómo entiende la comunidad indígena Coconuco su relación con el volcán Puracé?",
                options: [
                    "a) Como un simple recurso minero para extraer azufre ilimitadamente",
                    "b) Como un territorio sagrado y un ser vivo que merece respeto y protección ancestral",
                    "c) Como un lugar sin importancia cultural ni espiritual",
                    "d) Como una zona exclusivamente turística de entretenimiento"
                ],
                correct: 1,
                hint: "Pista: Visión holística de armonía y reciprocidad entre el ser humano y la naturaleza."
            },
            {
                category: "Identidad",
                themeClass: "theme-culture",
                mediaBg: "linear-gradient(135deg, #4f46e5, #4338ca)",
                mediaIcon: "fa-solid fa-graduation-cap",
                mediaTitle: "I.E. Manuel María Mosquera",
                question: "La Institución Educativa Manuel María Mosquera contribuye al desarrollo de Puracé mediante:",
                options: [
                    "a) La formación de jóvenes críticos comprometidos con la ciencia, el idioma y la región",
                    "b) La venta de productos industriales importados",
                    "c) La cancelación de proyectos culturales en la zona",
                    "d) El aislamiento de la comunidad escolar"
                ],
                correct: 0,
                hint: "Pista: Papel fundamental de la educación pública rural en la formación integral."
            },
            {
                category: "Sostenibilidad",
                themeClass: "theme-paramo",
                mediaBg: "linear-gradient(135deg, #16a34a, #15803d)",
                mediaIcon: "fa-solid fa-person-hiking",
                mediaTitle: "Ecoturismo Responsable",
                question: "¿Qué estrategia de turismo es la adecuada para visitar el Parque Nacional Natural Puracé sin destruirlo?",
                options: [
                    "a) Turismo masivo descontrolado con fogatas en las zonas de frailejonal",
                    "b) Ecoturismo responsable con guías locales, senderos autorizados y cero basura",
                    "c) Construcción de grandes hoteles sobre las fuentes termales",
                    "d) Extracción de plantas y rocas como souvenirs"
                ],
                correct: 1,
                hint: "Pista: Modelo de visita que respeta la capacidad de carga ambiental del ecosistema."
            }
        ]
    },

    // NIVEL 4: Cambio Climático y Gestión Ambiental
    {
        level: 4,
        title: "Nivel 4: Gestión Ambiental y Futuro",
        questions: [
            {
                category: "Cambio Climático",
                themeClass: "theme-volcano",
                mediaBg: "linear-gradient(135deg, #ea580c, #c2410c)",
                mediaIcon: "fa-solid fa-temperature-arrow-up",
                mediaTitle: "Calentamiento Global en Altas Montañas",
                question: "¿Cuál es el impacto principal del aumento global de temperatura sobre los ecosistemas de páramo como Puracé?",
                options: [
                    "a) Incremento repentino de los glaciares en la cima",
                    "b) Desplazamiento altitudinal de especies y riesgo de desecación de fuentes hídricas",
                    "c) Multiplicación de la fauna de clima cálido sin consecuencias",
                    "d) Mayor producción de nieve durante todo el año"
                ],
                correct: 1,
                hint: "Pista: El calentamiento global empuja la vegetación hacia zonas más altas reduciendo su espacio."
            },
            {
                category: "Educación Ambiental",
                themeClass: "theme-paramo",
                mediaBg: "linear-gradient(135deg, #059669, #047857)",
                mediaIcon: "fa-solid fa-hands-holding-circle",
                mediaTitle: "Liderazgo Juvenil Ambiental",
                question: "Como estudiante de Grado Décimo, ¿cuál es el compromiso ciudadano más directo para la protección de Puracé?",
                options: [
                    "a) Difundir la importancia del ecosistema, promover la investigación y liderar acciones sostenibles",
                    "b) Ignorar las problemáticas ambientales del municipio",
                    "c) Fomentar la quema de vegetación nativa",
                    "d) Comprar especies silvestres en el mercado negro"
                ],
                correct: 0,
                hint: "Pista: Liderazgo juvenil a través del conocimiento y la divulgación comunitaria."
            }
        ]
    }
];

let currentLevelIndex = 0;
let currentQuestionIndex = 0;
let score = 0;
let lives = 3;

const screens = {
    start: document.getElementById('startScreen'),
    game: document.getElementById('gameScreen'),
    levelComplete: document.getElementById('levelCompleteScreen'),
    victory: document.getElementById('victoryScreen'),
    gameOver: document.getElementById('gameOverScreen')
};

const btnStart = document.getElementById('btnStart');
const btnNextLevel = document.getElementById('btnNextLevel');
const btnRestart = document.getElementById('btnRestart');
const btnRetry = document.getElementById('btnRetry');

const levelBadge = document.getElementById('levelBadge');
const livesCount = document.getElementById('livesCount');
const scoreCount = document.getElementById('scoreCount');
const progressBar = document.getElementById('progressBar');

const questionCard = document.getElementById('questionCard');
const questionNumber = document.getElementById('questionNumber');
const categoryBadge = document.getElementById('categoryBadge');
const mediaCard = document.getElementById('mediaCard');
const mediaIcon = document.getElementById('mediaIcon');
const mediaTitle = document.getElementById('mediaTitle');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const hintText = document.getElementById('hintText');

btnStart.addEventListener('click', startGame);
btnNextLevel.addEventListener('click', startNextLevel);
btnRestart.addEventListener('click', startGame);
btnRetry.addEventListener('click', startGame);

function showScreen(screenKey) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenKey].classList.add('active');
}

function startGame() {
    currentLevelIndex = 0;
    currentQuestionIndex = 0;
    score = 0;
    lives = 3;
    
    updateHeaderUI();
    showScreen('game');
    loadQuestion();
}

function updateHeaderUI() {
    levelBadge.textContent = `Nivel ${currentLevelIndex + 1}`;
    livesCount.textContent = lives;
    scoreCount.textContent = score;
}

function loadQuestion() {
    const currentLevelData = gameData[currentLevelIndex];
    const currentQuestion = currentLevelData.questions[currentQuestionIndex];

    const progressPercent = ((currentQuestionIndex) / currentLevelData.questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Aplicar tema dinámico de color a la tarjeta
    questionCard.className = `question-card ${currentQuestion.themeClass}`;

    // Configurar ilustración/media
    mediaCard.style.background = currentQuestion.mediaBg;
    mediaIcon.className = currentQuestion.mediaIcon + " media-icon";
    mediaTitle.textContent = currentQuestion.mediaTitle;

    questionNumber.textContent = `Nivel ${currentLevelData.level} • Pregunta ${currentQuestionIndex + 1} de ${currentLevelData.questions.length}`;
    categoryBadge.textContent = currentQuestion.category;
    questionText.textContent = currentQuestion.question;
    hintText.textContent = currentQuestion.hint;

    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((optionStr, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = optionStr;
        btn.addEventListener('click', () => handleAnswer(index, currentQuestion.correct));
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selectedIndex, correctIndex) {
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.style.pointerEvents = 'none');

    if (selectedIndex === correctIndex) {
        buttons[selectedIndex].classList.add('correct');
        score += 150;
        scoreCount.textContent = score;
    } else {
        buttons[selectedIndex].classList.add('incorrect');
        buttons[correctIndex].classList.add('correct');
        lives--;
        livesCount.textContent = lives;
    }

    setTimeout(() => {
        if (lives <= 0) {
            showScreen('gameOver');
            return;
        }

        currentQuestionIndex++;
        const currentLevelData = gameData[currentLevelIndex];

        if (currentQuestionIndex < currentLevelData.questions.length) {
            loadQuestion();
        } else {
            currentLevelIndex++;
            if (currentLevelIndex < gameData.length) {
                document.getElementById('levelCompleteText').textContent = 
                    `¡Completaste con éxito el Nivel ${currentLevelIndex}! Preparándote para el siguiente reto de Grado Décimo...`;
                showScreen('levelComplete');
            } else {
                document.getElementById('finalScore').textContent = score;
                showScreen('victory');
            }
        }
    }, 1800);
}

function startNextLevel() {
    currentQuestionIndex = 0;
    updateHeaderUI();
    showScreen('game');
    loadQuestion();
}

/* Canvas Niebla */
const canvas = document.getElementById('particlesCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const particles = Array.from({ length: 45 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2.5 + 1,
    speedY: Math.random() * 0.4 + 0.1,
    speedX: Math.random() * 0.2 - 0.1,
    opacity: Math.random() * 0.4 + 0.1
}));

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();

        p.y -= p.speedY;
        p.x += p.speedX;

        if (p.y < 0) {
            p.y = canvas.height;
            p.x = Math.random() * canvas.width;
        }
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();