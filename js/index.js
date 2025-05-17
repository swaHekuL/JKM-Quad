document.addEventListener('DOMContentLoaded', function() {
    // INDEX.JS
    
    // Create header elements
    const header = document.createElement('header');
    const headerRow = document.createElement('div');
    headerRow.className = 'header-row';

    const title = document.createElement('h1');
    title.id = 'header-title';
    title.textContent = 'JKM Quad';

    const languageToggle = document.createElement('div');
    languageToggle.className = 'language-toggle';

    const englishButton = document.createElement('button');
    englishButton.id = 'english-toggle';
    englishButton.className = 'language-button';
    englishButton.textContent = 'Eng';

    const portugueseButton = document.createElement('button');
    portugueseButton.id = 'portuguese-toggle';
    portugueseButton.className = 'language-button';
    portugueseButton.textContent = 'Por';

    const homeDiv = document.createElement('div');
    const homeButton = document.createElement('button');
    homeButton.id = 'home-button';
    homeButton.onclick = () => goHome(document.querySelector('.main-content'));

    const homeImage = document.createElement('img');
    homeImage.src = '../images/home.png';
    homeImage.alt = 'Home';
    homeImage.style.width = '24px';
    homeImage.style.height = '24px';

    homeButton.appendChild(homeImage);
    homeDiv.appendChild(homeButton);
    languageToggle.append(englishButton, portugueseButton, homeDiv);
    headerRow.append(title, languageToggle);
    header.appendChild(headerRow);
    document.body.appendChild(header);

    // Define the language toggle buttoms
    const englishToggle = document.getElementById('english-toggle');
    const portugueseToggle = document.getElementById('portuguese-toggle');
    
    // Add event listeners for language toggles
    englishToggle.addEventListener('click', () => toggleLanguage('english'));
    portugueseToggle.addEventListener('click', () => toggleLanguage('portuguese'));

    // Load language preferences from localStorage
    let languageStates = JSON.parse(localStorage.getItem('languagePreferences')) || {
        english: false,
        portuguese: false
    };

    if (languageStates.english) {
        englishToggle.classList.add('active');
    }
    if (languageStates.portuguese) {
        portugueseToggle.classList.add('active');
    }
    const main = document.createElement('main');
    main.className = 'main-content';
    document.body.appendChild(main);
    openContainer(main);
});

function toggleLanguage(language) {
    const button = document.getElementById(`${language}-toggle`);
    button.classList.toggle('active');

    // Store the state of both languages in localStorage
    const languageStates = {
        english: document.getElementById('english-toggle').classList.contains('active'),
        portuguese: document.getElementById('portuguese-toggle').classList.contains('active')
    };
    localStorage.setItem('languagePreferences', JSON.stringify(languageStates))
};

function openContainer(main) {
    // CONTAINER.JS
    title = document.getElementById('header-title');
    title.textContent = 'JKM Quad';
    
    // Set initial states of toggle buttons
    const englishToggle = document.getElementById('english-toggle');
    const portugueseToggle = document.getElementById('portuguese-toggle');

    // Add event listeners for language toggles
    englishToggle.addEventListener('click', () => updateVolumeLanguages());
    portugueseToggle.addEventListener('click', () => updateVolumeLanguages());
    
    // Container for book buttons
    const container = document.createElement('div');
    container.className = 'book-container';

    let isEnglishActive = document.getElementById('english-toggle').classList.contains('active');
    let isPortugueseActive = document.getElementById('portuguese-toggle').classList.contains('active');

    const volumes = [
        { name: 'ot', path: '../data/ot/ot', jpn: '旧約聖書', eng: 'Old Testament', por: 'Velho Testamento'},
        { name: 'nt', path: '../data/nt/nt', jpn: '新約聖書', eng: 'New Testament', por: 'Novo Testamento'},
        { name: 'bofm', path: '../data/bofm/bofm', jpn: 'モルモン書', eng: 'Book of Mormon', por: 'Livro de Mórmon'},
        { name: 'dc', path: '../data/dc/dc', jpn: '教義と聖約', eng: 'Doctrine and Covenants', por: 'Doutrina e Convênios'},
        { name: 'pogp', path: '../data/pogp/pogp', jpn: '高価な真珠', eng: 'Pearl of Great Price', por: 'Pérola de Grande Valor'}
    ];

    volumes.forEach(volume => {
        const button = document.createElement('button');
        button.classList.add('book-button');
        button.id = `${volume.name}-button`;
        
        const jpnSpan = document.createElement('span');
        jpnSpan.classList.add('jpn-text');
        jpnSpan.textContent = volume.jpn;

        const engSpan = document.createElement('span');
        engSpan.classList.add('eng-text');
        engSpan.textContent = volume.eng;
        engSpan.style.display = isEnglishActive ? 'inline' : 'none';

        const porSpan = document.createElement('span');
        porSpan.classList.add('por-text');
        porSpan.textContent = volume.por;
        porSpan.style.display = isPortugueseActive ? 'inline' : 'none';

        button.addEventListener('click', () => {
            openVolume(main, volume);
        });

        container.appendChild(button);
        button.appendChild(jpnSpan);
        button.appendChild(engSpan);
        button.appendChild(porSpan);
    });

    main.appendChild(container);

    function updateVolumeLanguages() {
        // Load language preferences from localStorage
        let languageStates = JSON.parse(localStorage.getItem('languagePreferences')) || {
            english: false,
            portuguese: false
        };

        buttons = document.querySelectorAll('.book-button');

        // Update toggle buttons
        if (languageStates.english) {
            englishToggle.classList.add('active');
            document.querySelectorAll('.eng-text').forEach(span => {
                span.style.display = 'inline'});
        } else {
            englishToggle.classList.remove('active');
            document.querySelectorAll('.eng-text').forEach(span => {
                span.style.display = 'none';
            });
        }

        if (languageStates.portuguese) {
            portugueseToggle.classList.add('active');
            document.querySelectorAll('.por-text').forEach(span => {
                span.style.display = 'inline';
            });
        } else {
            portugueseToggle.classList.remove('active');
            document.querySelectorAll('.por-text').forEach(span => {
                span.style.display = 'none';
            });
        }

        // Save the updated states
        localStorage.setItem('languagePreferences', JSON.stringify(languageStates));
    }
};

function goHome(main) {
    main.innerHTML = '';
    openContainer(main);
};

function openVolume(main, volume) {
    const data = loadData();
    main.innerHTML = '';
    const chapterContainer = document.createElement('div');
    chapterContainer.className = 'chapter-container';
    title = document.getElementById('header-title');
    title.textContent = volume.jpn;
};

function loadData() {
    const data = {
        ot: {
            jpn: '',
            eng: '',
            por: ''
        },
        nt: {
            jpn: '',
            eng: '',
            por: ''
        },
        bofm: {
            jpn: '',
            eng: '',
            por: ''
        },
        dc: {
            jpn: '',
            eng: '',
            por: ''
        },
        pogp: {
            jpn: '',
            eng: '',
            por: ''
        }
    };
    return data;

};