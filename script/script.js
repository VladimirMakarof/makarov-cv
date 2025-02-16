const burger = document.querySelector('.header-burger');
const menu = document.querySelector('.header-menu');
const body = document.querySelector('.body');

let i = 0;

function toggleClass() {
    if (i === 0) {
        burger.classList.add('active');
        burger.classList.add('active:before');
        burger.classList.add('active:after');
        menu.classList.add('active');
        body.classList.add('lock');
        i = 1;
    } else {
        burger.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('lock');
        i = 0;
    }
}

let List = document.querySelectorAll('.header-link')
List.forEach(item => {
    item.addEventListener('click', () => {
        burger.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('lock');
        i = 0;
    })
})

burger.addEventListener('click', toggleClass);


const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
        // Проверяем, является ли текущий элемент активным
        const isActive = item.classList.contains('active');

        // Закрываем все активные элементы
        accordionItems.forEach(accItem => {
            accItem.classList.remove('active');
            accItem.querySelector('.accordion-content').style.display = 'none';
            accItem.querySelector('.accordion-arrow').style.transform = 'none'; // Сбрасываем поворот стрелки
        });

        // Если элемент не активный, открываем его
        if (!isActive) {
            item.classList.add('active');
            content.style.display = 'block';
            item.querySelector('.accordion-arrow').style.transform = 'rotate(90deg)'; // Поворачиваем стрелку
        }
    });
});







const i18Obj = {
    'en': {
        'skills': 'Skills',
        'download': 'Download',
        'motivation': 'Motivation',
        'hire_me': 'Why Hire Me',
        'about_me': 'About Me',
        'objective': 'About Me',
        'hero-title': 'Vladimir Makarov',
        'phone-tooltip': 'Phone',
        'email-tooltip': 'Email',
        'skype-tooltip': 'Skype',
        'telegram-tooltip': 'Telegram',
        'github-tooltip': 'GitHub',
        'sample_code': 'Sample code',
        'purposes': 'Purposes',
        'sample_code-text': 'Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation. Unfortunately, they have now left and the code they gave you doesn\'t work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case). Don\'t worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.',
        'about_me_text': "I currently have experience working both as a Web Developer and a Web Project Manager. I've contributed to website creation and maintenance on the Bitrix CMS, handling external service integrations and performance optimization. Additionally, I've coordinated project tasks and collaborated with clients and teams to ensure successful project execution. I completed a professional retraining program in Information Systems and Technologies at ITMO University and finished the initial stage of The Rolling Scopes School by Epam (stage 0). Now, I’m actively exploring various areas related to web development and trying myself in different fields. My goal is to become a skilled professional in web development and project management.",

        'tech_skills': 'Tech Skills',
        'experience': 'Experience',
        'education': 'Education',
        'experience/education': 'Experience/ Education',
        'about-projects': 'About projects',
        'English': 'English',
        'my_contacts': 'My contacts',
        'purposes-text': 'My goal is to grow and build a career in IT by working on meaningful and challenging projects as a web developer. I am eager to expand and deepen my knowledge in web development, exploring new approaches and technologies. I am drawn to roles that allow for creativity, problem-solving, and continuous learning, where I can make a meaningful contribution to the team and the project.',
        'soft_skills-1': 'Communication: I possess strong communication skills, enabling effective collaboration with colleagues and stakeholders. I prioritize open and clear lines of communication to ensure smooth workflow and successful project outcomes.',
        'soft_skills-2': 'Willingness to learn: I have a strong passion for continuous learning and staying updated with the latest advancements in the ever-evolving technology landscape. I actively seek out opportunities to expand my knowledge and skills, adapting to new technologies and industry changes within the development environment.',
        'soft_skills-3': 'Creativity: I thrive on generating fresh and innovative ideas, bringing new perspectives to project development. Embracing creativity allows me to deliver unique and engaging solutions, enhancing the overall quality and user experience.',
        'soft_skills-4': 'Problem-solving: I am highly proactive in taking ownership of any mistakes and swiftly implementing effective solutions. I excel in both independent problem-solving and collaborating with teams to tackle challenges efficiently, ensuring optimal project performance.',
        'soft_skills-5': 'Teamwork: I am a collaborative team player who values open communication and the contributions of every team member. By fostering a cooperative environment, I actively contribute to project success and the overall growth of the company. I believe that when everyone\'s voice is heard and respected, we can achieve remarkable results.',

        'English-text-1': 'Level: A2-B1 (Intermediate)\n' +
            '\n' +
            'I studied English in school and continued learning it after entering university. During my university studies, I also attended a language school where I successfully completed two levels of training. English language proficiency is important to me, especially in the context of international travel.',
        'English-text-2': 'Due to the current political situation, opportunities for international trips and personal interactions have significantly decreased. However, despite this, I maintain active usage of the English language in written and spoken form through virtual communications, engaging with international communities, and reading specialized literature in English.',
        'English-text-3': 'I realize the importance of maintaining and developing my language skills, so I continue to pursue self-education, English language learning, and practice whenever possible. I am ready to quickly restore my level of proficiency and actively participate in situations that require communication in English.',
        'English-text-4': 'Although the current situation limits my opportunities for practicing English through international travel and in-person meetings, I remain motivated and committed to developing my language skills and expanding my English communication abilities.',
        'experience-projects': 'I’ve several educational projects. Here are some of them',
        'experience-text-commercial': 'I’ve  commercial project.',
        'motivation-text': 'My motivation stems from a genuine love for programming and a strong desire to stay up-to-date with the latest industry trends and technologies. I am constantly exploring online resources, engaging in self-study, and participating in relevant online communities to expand my knowledge and skills. I am driven by the satisfaction of solving complex problems and the opportunity to create innovative and efficient solutions.',
        'hire_me-text1': 'By hiring me, you will get a dedicated and adaptable Full-stack Developer who strives to achieve outstanding results. I am a quick learner and excel in challenging environments where I can constantly improve my skills. I possess strong problem-solving abilities, attention to detail, and the ability to work collaboratively, which facilitates effective communication. My passion for web development and the ability to grasp new concepts quickly make me a valuable asset to any development team.',
        'hire_me-text2': 'While I haven\'t attended specific conferences or exhibitions, my eagerness to learn and staying up-to-date with the latest industry trends ensure that I am always aware of the newest technologies. I am ready to apply my experience and enthusiasm to help your organization achieve its goals in the rapidly evolving field of web development.',
        'job1-title': 'Web Project Manager at its.agency',
        'job1-duration': 'August 2024 — Present (3 months)',
        'job1-location': 'Saint Petersburg, its.agency',
        'job1-description': `Managing and coordinating web projects from development to final implementation.
        Interacting with clients to gather and clarify requirements, without participating in sales.
        Collecting and processing project data, monitoring the completeness and correctness of task descriptions.
        Assigning tasks to development and design teams and controlling their execution through task trackers.
        Monitoring the consistency of development, testing, and implementation stages.
        Managing task deadlines and agreeing on project changes.
        Interacting with teams to ensure coordinated work at all stages of development.
        Resolving organizational issues related to project support and updates.
        Maintaining internal documentation and project reporting.`,

    'job2-title': 'Web Developer at DIGIMATIX',
    'job2-duration': 'November 2023 — July 2024 (9 months)',
    'job2-location': 'Saint Petersburg, www.digimatix.ru',
    'job2-description': `Development and support of web projects: Participated in the creation and maintenance of websites on Bitrix CMS, including setup and optimization of templates, modules, and components to improve functionality and user experience.
    Task management and team interaction: Coordinated work with designers and marketers for successful implementation of web projects, adhering to deadlines and requirements. Aligned tasks among project participants to achieve goals.
    Integration of external services: Developed solutions for integration with APIs and external systems, ensuring seamless operation of web projects and enhancing their functionality.
    Performance optimization: Conducted site audits and implemented measures to improve performance, including speeding up page loading and enhancing security.
    Process automation: Created and implemented scripts for automating server processes such as content updates, backups, and monitoring, reducing time spent on routine tasks.
    Deadline and priority control: Monitored task completion in projects, ensuring deadlines are met and priority tasks are executed sequentially.`,

     'job3-title': 'Business Analyst / Developer / Content Manager at CDS Northern Capital',
'job3-duration': '15 October — Present',
'job3-location': 'CDS Northern Capital',
'job3-description': 'At CDS Northern Capital, I seamlessly blend my expertise in business analysis, software development, and content management to drive digital transformation. I am responsible for optimizing business processes by integrating cutting-edge solutions such as the Pyrus API. My role involves strategic analysis, creative problem-solving, and proactive communication, ensuring that each project not only meets but exceeds expectations. I am dedicated to delivering high-quality results that empower the organization to achieve its long-term goals.',
   
   

    },
    'ru': {
        'skills': 'Навыки',
        'download': 'Скачать',
        'motivation': 'Мотивация',
        'hire_me': 'Почему я подхожу',
        'about_me': 'Обо мне',
        'hero-title': 'Владимир Макаров',
        'phone-tooltip': 'Телефон',
        'email-tooltip': 'Почта',
        'skype-tooltip': 'Скайп',
        'telegram-tooltip': 'Телеграм',
        'github-tooltip': 'ХитХаб',
        'sample_code': 'Пример кода',
        'purposes': 'Цель',
        'sample_code-text': 'Ваш коллега должен был написать простую вспомогательную функцию для преобразования строки (содержащей одно слово) в заглавные буквы перед отпуском. К сожалению, он уже ушел, и предоставленный им код не работает. Исправьте написанную им вспомогательную функцию так, чтобы она работала, как задумано (то есть сделайте первый символ строки "слово" заглавным). Не беспокойтесь о числах, специальных символах или передаче в функцию не-строковых типов данных. Длина строк будет от 1 символа до 10 символов, но никогда не будет пустой.',
        'about_me_text': 'На данный момент у меня есть опыт работы как веб-разработчиком, так и менеджером веб-проектов. Я участвовал в создании и поддержке сайтов на CMS Битрикс, где занимался интеграцией внешних сервисов и оптимизацией производительности. Также координировал выполнение задач по веб-проектам и взаимодействовал с клиентами и командами для обеспечения качественного выполнения задач. Прошел профессиональную переподготовку в Университете ИТМО по специальности «Информационные системы и технологии» и завершил начальный этап The Rolling Scopes School от Epam (stage 0). Сейчас активно развиваюсь в разных областях, связанных с веб-разработкой, пробуя себя в новых направлениях. Моя цель — стать профессионалом в области веб-разработки и управления проектами. ',

        'soft_skills': 'Софт Скиллс',
        'tech_skills': 'Тех. навыки',
        'experience': 'Опыт',
        'experience/education': 'Опыт и Образование',
        'education': 'Образование',
        'about-projects': 'О проекте',
        'English': 'Английский',
        'my_contacts': 'Мои контакты',
        'purposes-text': 'Моя цель — развиваться и строить карьеру в IT, работая над интересными и значимыми проектами в роли веб-разработчика. Стремлюсь расширять и углублять свои знания в области веб-разработки, исследуя новые подходы и технологии. Мне интересна работа, где можно использовать творчество, навыки решения задач и постоянное развитие, принося значимый вклад в команду и проект.',
        'soft_skills-1': 'Коммуникация: У меня развиты навыки эффективного общения, что позволяет успешно взаимодействовать с коллегами и заинтересованными сторонами. Я уделяю особое внимание открытому и ясному обмену информацией, чтобы обеспечить гладкое выполнение работы и успешные результаты проектов.',
        'soft_skills-2': 'Готовность к обучению: У меня сильное стремление к постоянному обучению и оставанию в курсе последних достижений в быстро развивающейся области технологий. Я активно ищу возможности для расширения своих знаний и навыков, адаптируясь к новым технологиям и изменениям в индустрии разработки.',
        'soft_skills-3': 'Креативность: Мне нравится генерировать новые идеи и приносить свежий взгляд на разработку проектов. Развитие креативности позволяет мне предлагать уникальные и привлекательные решения, повышая общее качество и пользовательский опыт.',
        'soft_skills-4': 'Решение проблем: Я активно беру на себя ответственность за любые ошибки и быстро нахожу эффективные решения. Я успешно справляюсь с решением проблем как самостоятельно, так и в команде, обеспечивая оптимальную производительность проекта.',
        'soft_skills-5': 'Работа в команде: Я командный игрок, ценящий открытую коммуникацию и вклад каждого участника команды. Поддерживая сотрудничество, я активно способствую успеху проектов и общему развитию компании. Я верю, что когда каждый голос учитывается и уважается, мы можем достичь впечатляющих результатов.',

        'English-text-1': '\n' +
            'Уровень: A2-B1 (средний)\n' +
            '\n' +
            'Я изучал английский язык в школе и продолжил его изучение после поступления в университет. В течение учебы в университете я также посещал языковую школу, где успешно завершил два уровня обучения. Английский язык является важным инструментом для меня, особенно в контексте международных поездок.',
        'English-text-2': 'Из-за текущей политической ситуации, возможности для международных поездок и личного общения значительно сократились. Однако, несмотря на это, я сохраняю активное использование английского языка в письменной и устной форме в рамках виртуальных коммуникаций, взаимодействия с международными сообществами и чтения специализированной литературы на английском языке.',
        'English-text-3': 'Я осознаю важность поддержания и развития своих языковых навыков, поэтому я по-прежнему стремлюсь к самообразованию, изучению английского языка и практике его использования в любой возможности. Я готов быстро восстановить свой уровень знаний и активно принять участие в ситуациях, где требуется общение на английском языке.',
        'English-text-4': 'Хотя текущая ситуация ограничивает мои возможности для практики английского языка в международных поездках и личных встречах, я остаюсь мотивированным и нацеленным на развитие своих языковых навыков и расширение своего общения на английском языке.',
        'experience-projects': 'У меня есть несколько образовательных проектов. Вот некоторые из них.',
        'experience-text-commercial': 'У меня есть коммерческий проект.',
        'motivation-text': 'Моя мотивация исходит из искренней любви к программированию и сильного желания быть в курсе последних тенденций и технологий в индустрии. Я постоянно изучаю онлайн-ресурсы, занимаюсь самообучением и активно участвую в соответствующих онлайн-сообществах, чтобы расширять свои знания и навыки. Меня вдохновляет удовлетворение от решения сложных задач и возможность создания инновационных и эффективных решений.',
        'hire_me-text1': 'Наняв меня, вы получите преданным и гибким Full-stack разработчиком, который стремится достигать выдающихся результатов. Я быстро обучаюсь и преуспеваю в сложных средах, где могу постоянно улучшать свои навыки. У меня сильные навыки решения проблем, внимание к деталям и умение работать в команде, что способствует эффективной коммуникации. Моя страсть к веб-разработке и способность быстро усваивать новые концепции делают меня ценным ресурсом для любой разработческой команды.',
        'hire_me-text2': 'Хотя я не посещал специальных конференций или выставок, моя стремительность к обучению и постоянное следование последним тенденциям в индустрии гарантируют, что я всегда в курсе новейших технологий. Я готов применить свой опыт и энтузиазм, чтобы помочь вашей организации достичь своих целей в быстро развивающейся сфере веб-разработки.',
  
     'job1-title': 'Менеджер веб-проектов в its.agency',
    'job1-duration': 'Август 2024 — по настоящее время (3 месяца)',
    'job1-location': 'Санкт-Петербург, its.agency',
    'job1-description': `Ведение и координация веб-проектов от этапа разработки до финального внедрения.
Взаимодействие с клиентами для сбора и уточнения требований, без участия в продажах.
Сбор и обработка данных по проектам, контроль за полнотой и корректностью описания задач.
Постановка задач командам разработки и дизайна, а также контроль их выполнения через таск-трекеры.
Контроль за согласованностью этапов разработки, тестирования и внедрения решений.
Управление сроками выполнения задач и согласование изменений в проекте.
Взаимодействие с командами для обеспечения согласованной работы на всех этапах разработки.
Решение организационных вопросов, связанных с поддержкой проектов и их обновлением.
Поддержание внутренней документации и отчетности по проектам.`,

    'job2-title': 'Веб-разработчик в DIGIMATIX',
    'job2-duration': 'Ноябрь 2023 — Июль 2024 (9 месяцев)',
    'job2-location': 'Санкт-Петербург, www.digimatix.ru',
    'job2-description': `Разработка и поддержка веб-проектов: Участвовал в создании и поддержке сайтов на CMS Битрикс, включая настройку и оптимизацию шаблонов, модулей и компонентов для улучшения функциональности и пользовательского опыта.
Управление задачами и взаимодействие с командой: Координировал работу с дизайнерами и маркетологами для успешной реализации веб-проектов, соблюдая сроки и требования. Согласовывал задачи между участниками проекта для достижения целей.
Интеграция внешних сервисов: Разрабатывал решения для интеграции с API и внешними системами, обеспечивая бесшовную работу веб-проектов и улучшение их функциональных возможностей.
Оптимизация производительности: Проводил аудит сайтов и внедрял меры по повышению производительности, включая ускорение загрузки страниц и улучшение безопасности.
Автоматизация процессов: Создавал и внедрял скрипты для автоматизации серверных процессов, таких как обновление контента, резервное копирование и мониторинг, что сократило время на выполнение рутинных задач.
Контроль сроков и приоритетов: Вёл мониторинг выполнения задач по проектам, обеспечивая соблюдение сроков и последовательное выполнение приоритетных задач.`,

        'job3-title': 'Бизнес-аналитик / Разработчик / Контент-менеджер в ЦДС Северная Столица',
'job3-duration': '15 октября — по настоящее время',
'job3-location': 'ЦДС Северная Столица',
'job3-description': 'В ЦДС Северная Столица я объединяю экспертизу в области бизнес-анализа, разработки и контент-менеджмента для содействия цифровой трансформации. Я отвечаю за оптимизацию бизнес-процессов путем интеграции передовых решений, таких как API Pyrus. Моя роль включает стратегический анализ, креативное решение проблем и активное взаимодействие с командой, что позволяет проектам не только соответствовать, но и превосходить ожидания. Я стремлюсь к высокому качеству результатов, способствующих достижению долгосрочных целей организации.',

   
    }
}

const russian = document.querySelector('.ru');
const english = document.querySelector('.en');
const words = document.querySelectorAll('[data-i18]');


document.addEventListener("DOMContentLoaded", () => {
    // Проверяем, было ли значение 'ru-lang' установлено
    const selectedLanguage = localStorage.getItem('ru-lang');
    if (selectedLanguage === null) {
        // Если значение не было установлено, устанавливаем значение по умолчанию 
        localStorage.setItem('ru-lang', 'false');
    }

    if (selectedLanguage === 'true') {
        getTranslateRu();
    }
});


document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('ru-lang') === 'true') {
        getTranslateRu();
    }
});

function getTranslateRu() {
    english.classList.remove('item__active');
    russian.classList.add('item__active');
    words.forEach(el => {
        const text = i18Obj.ru[el.dataset.i18];
        if (el.placeholder) {
            el.placeholder = text;
        }
        el.firstChild.data = text;
    });
    window.localStorage.setItem('ru-lang', true);
    updateTooltipText();
}

function getTranslateEn() {
    russian.classList.remove('item__active');
    english.classList.add('item__active');
    words.forEach(el => {
        const text = i18Obj.en[el.dataset.i18];
        if (el.placeholder) {
            el.placeholder = text;
        }
        el.firstChild.data = text;
    });
    window.localStorage.setItem('ru-lang', false);
    updateTooltipText();
}

russian.addEventListener('click', getTranslateRu);
english.addEventListener('click', getTranslateEn);

// Получение текущего языка страницы
// let currentLanguage = document.documentElement.lang;
let currentLanguage = window.localStorage.getItem('ru-lang') === 'true' ? 'ru' : 'en';

// Функция для скачивания файла в зависимости от выбранного языка
function downloadFile(event, fileName) {
    event.preventDefault(); // Предотвращение стандартного действия ссылки или элемента SVG

    // Создание ссылки для скачивания файла
    let downloadLink = document.createElement('a');
    downloadLink.href = fileName;
    downloadLink.download = fileName;
    downloadLink.target = '_blank';

    // Эмуляция клика по ссылке для начала загрузки файла
    downloadLink.click();
}


let svg = document.querySelector('.svg-download-link');

// Здесь обработчики событий на ссылку и элемент SVG

console.log("Before SVG click event listener");

const encodedEnglishFileName = encodeURIComponent('makarov_vladimir.pdf');
const encodedRussianFileName = encodeURIComponent('макаров_владимир.pdf');

svg.addEventListener('click', function (event) {
    console.log("SVG click event fired");
    let currentLanguage = window.localStorage.getItem('ru-lang');
    console.log("Current language:", currentLanguage);

    if (currentLanguage === null) {
        console.log('Language not set');
        alert('Выберите язык перед загрузкой файла.');
    } else if (currentLanguage === 'false') {
        console.log("Downloading English file");
        downloadFile(event, decodeURIComponent(encodedEnglishFileName));
    } else if (currentLanguage === 'true') {
        console.log("Downloading Russian file");
        downloadFile(event, decodeURIComponent(encodedRussianFileName));
    } else {
        console.log('Unsupported language');
        alert('Выбранный язык не поддерживается.');
    }
});



document.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded event (2) fired");
    const selectedLanguage = localStorage.getItem('ru-lang');
    if (selectedLanguage === 'true') {
        console.log("Language: русский");
    } else {
        console.log("Language: english");
    }
});


// Функция для обработки изменений в локальном хранилище
function updateTooltipText() {
    const svgLinks = document.querySelectorAll('.svg-link');
    let currentLanguage = window.localStorage.getItem('ru-lang') === 'true' ? 'ru' : 'en';

    svgLinks.forEach((link) => {
        const tooltipKey = link.getAttribute('data-tooltip-key');
        const translatedText = i18Obj[currentLanguage][tooltipKey];
        link.setAttribute('data-tooltip', translatedText);
    });
}

// Вызывайте эту функцию при изменении языка
updateTooltipText();


// popup


const popupTriggers = document.querySelectorAll('.popup-trigger');
const popups = document.querySelectorAll('.popup');
const closeButtons = document.querySelectorAll('.close-popup');
const overlay = document.querySelector('.overlay');

popupTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const popupId = trigger.getAttribute('data-popup-id');
        const popup = document.getElementById(popupId);
        if (popup) {
            openPopup(popup, overlay);
        }
    });
});

closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const popup = button.parentNode;
        closePopup(popup, overlay);
    });
});

overlay.addEventListener('click', () => {
    closeAllPopups(overlay);
});

function openPopup(popup, overlay) {
    popup.style.display = 'block';
    overlay.style.display = 'block';
    document.body.classList.add('popup-open');

    popup.style.opacity = '0';
    setTimeout(function () {
        popup.style.opacity = '1';
    }, 200);
}


function closePopup(popup, overlay) {
    popup.style.display = 'none';
    overlay.style.display = 'none';
    document.body.classList.remove('popup-open');
}

function closeAllPopups(overlay) {
    popups.forEach(popup => {
        popup.style.display = 'none';
    });
    overlay.style.display = 'none';
    document.body.classList.remove('popup-open');
}


// Инициализация Swiper
document.addEventListener('DOMContentLoaded', function () {

    const swiper = new Swiper('.swiper', {

        direction: 'horizontal',
        loop: true,


        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },


        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
