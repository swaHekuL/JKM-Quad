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
        { name: 'ot', jpn: '旧約聖書', eng: 'Old Testament', por: 'Velho Testamento'},
        { name: 'nt', jpn: '新約聖書', eng: 'New Testament', por: 'Novo Testamento'},
        { name: 'bofm', jpn: 'モルモン書', eng: 'Book of Mormon', por: 'Livro de Mórmon'},
        { name: 'dc', jpn: '教義と聖約', eng: 'Doctrine and Covenants', por: 'Doutrina e Convênios'},
        { name: 'pogp', jpn: '高価な真珠', eng: 'Pearl of Great Price', por: 'Pérola de Grande Valor'}
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

        // Update toggle buttons
        if (languageStates.english) {
            englishToggle.classList.add('active');
            document.querySelectorAll('.eng-text').forEach(span => {
                span.style.display = 'inline'});
            document.querySelectorAll('.scripture-eng-text').forEach(span => {
                span.style.display = 'inline'});
            document.querySelectorAll('.chapter-header').forEach(div => {
                div.style.height = 'fit-content'
            });
        } else {
            englishToggle.classList.remove('active');
            document.querySelectorAll('.eng-text').forEach(span => {
                span.style.display = 'none';});
            document.querySelectorAll('.scripture-eng-text').forEach(span => {
                span.style.display = 'none'});
        }

        if (languageStates.portuguese) {
            portugueseToggle.classList.add('active');
            document.querySelectorAll('.por-text').forEach(span => {
                span.style.display = 'inline';});
            document.querySelectorAll('.scripture-por-text').forEach(span => {
                span.style.display = 'inline';});
        } else {
            portugueseToggle.classList.remove('active');
            document.querySelectorAll('.por-text').forEach(span => {
                span.style.display = 'none';});
            document.querySelectorAll('.scripture-por-text').forEach(span => {
                span.style.display = 'none';});
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
    main.innerHTML = '';
    const bookContainer = document.createElement('div');
    bookContainer.className = 'book-container';
    title = document.getElementById('header-title');
    title.textContent = volume.jpn;

    const data = loadData();

    const activeVolume_jpn = data[volume.name].jpn;
    const activeVolume_eng = data[volume.name].eng;
    const activeVolume_por = data[volume.name].por;

    books_jpn = Object.keys(activeVolume_jpn.content);
    books_eng = Object.keys(activeVolume_eng.content);
    books_por = Object.keys(activeVolume_por.content);
    
    // Set initial states of toggle buttons
    const englishToggle = document.getElementById('english-toggle');
    const portugueseToggle = document.getElementById('portuguese-toggle');

    let isEnglishActive = document.getElementById('english-toggle').classList.contains('active');
    let isPortugueseActive = document.getElementById('portuguese-toggle').classList.contains('active');

    for (let i = 0; i < books_jpn.length; i ++) {
        let book_jpn = books_jpn[i];
        let book_eng = books_eng[i];
        let book_por = books_por[i];

        const button = document.createElement('button');
        button.classList.add('book-button');
        button.id = `${book_eng}-button`;
        
        const jpnSpan = document.createElement('span');
        jpnSpan.classList.add('jpn-text');
        jpnSpan.textContent = book_jpn;

        const engSpan = document.createElement('span');
        engSpan.classList.add('eng-text');
        engSpan.textContent = book_eng;
        engSpan.style.display = isEnglishActive ? 'inline' : 'none';

        const porSpan = document.createElement('span');
        porSpan.classList.add('por-text');
        porSpan.textContent = book_por;
        porSpan.style.display = isPortugueseActive ? 'inline' : 'none';

        button.addEventListener('click', () => {
            openBook(main, data, volume, book_jpn, book_eng, book_por);
        });

        bookContainer.appendChild(button);
        button.appendChild(jpnSpan);
        button.appendChild(engSpan);
        button.appendChild(porSpan);
    };

    main.appendChild(bookContainer);
};

function openBook(main, data, volume, book_jpn, book_eng, book_por) {
    main.innerHTML = '';
    const chapterContainer = document.createElement('div');
    chapterContainer.className = 'book-container';
    title = document.getElementById('header-title');
    title.textContent = book_jpn;

    const activeVolume_jpn = data[volume.name].jpn;
    const activeVolume_eng = data[volume.name].eng;
    const activeVolume_por = data[volume.name].por;

    const activeBook_jpn = activeVolume_jpn.content[book_jpn];
    const activeBook_eng = activeVolume_eng.content[book_eng];
    const activeBook_por = activeVolume_por.content[book_por];

    chapters_jpn = Object.keys(activeBook_jpn);
    chapters_eng = Object.keys(activeBook_eng);
    chapters_por = Object.keys(activeBook_por);

    // Set initial states of toggle buttons
    const englishToggle = document.getElementById('english-toggle');
    const portugueseToggle = document.getElementById('portuguese-toggle');

    let isEnglishActive = document.getElementById('english-toggle').classList.contains('active');
    let isPortugueseActive = document.getElementById('portuguese-toggle').classList.contains('active');

    for (i = 0; i <= activeBook_jpn.length; i++) {
        let chapter = Number(chapters_jpn[i]) + 1;

        const button = document.createElement('button');
        button.classList.add('book-button');
        button.id = `${chapter}-button`;
        
        const jpnSpan = document.createElement('span');
        jpnSpan.classList.add('jpn-text');
        jpnSpan.textContent = String(chapter) + "章";

        const engSpan = document.createElement('span');
        engSpan.classList.add('eng-text');
        engSpan.textContent = "Chapter " + String(chapter);
        engSpan.style.display = isEnglishActive ? 'inline' : 'none';

        const porSpan = document.createElement('span');
        porSpan.classList.add('por-text');
        porSpan.textContent = "Capítulo " + String(chapter);
        porSpan.style.display = isPortugueseActive ? 'inline' : 'none';

        button.addEventListener('click', () => {
            openChapter(main, data, volume, book_jpn, book_eng, book_por, chapter-1);
        });

        chapterContainer.appendChild(button);
        button.appendChild(jpnSpan);
        button.appendChild(engSpan);
        button.appendChild(porSpan);
    };

    main.appendChild(chapterContainer);

};

function openChapter(main, data, volume, book_jpn, book_eng, book_por, chapter) {
    console.log(data);
    main.innerHTML = '';
    const scriptureContainer = document.createElement('div');
    scriptureContainer.className = 'scripture-container';

    const activeVolume_jpn = data[volume.name].jpn;
    const activeVolume_eng = data[volume.name].eng;
    const activeVolume_por = data[volume.name].por;
    console.log(activeVolume_jpn);

    const activeBook_jpn = activeVolume_jpn.content[book_jpn];
    const activeBook_eng = activeVolume_eng.content[book_eng];
    const activeBook_por = activeVolume_por.content[book_por];
    console.log(activeBook_jpn);
    
    const activeChapter_jpn = activeBook_jpn[chapter];
    const activeChapter_eng = activeBook_eng[chapter];
    const activeChapter_por = activeBook_por[chapter];
    console.log(activeChapter_jpn);

    title = document.getElementById('header-title');
    title.textContent = book_jpn + " " + String(chapter+1) + "章";

    // Set initial states of toggle buttons
    const englishToggle = document.getElementById('english-toggle');
    const portugueseToggle = document.getElementById('portuguese-toggle');

    let isEnglishActive = document.getElementById('english-toggle').classList.contains('active');
    let isPortugueseActive = document.getElementById('portuguese-toggle').classList.contains('active');

    // chapter header stuff
    const chapter_header = document.createElement('div');
    chapter_header.classList.add('chapter-header');

    const header_jpn_span = document.createElement('span');
    header_jpn_span.classList.add('scripture-jpn-text');
    header_jpn_span.textContent = String(chapter+1) + "章";

    const header_eng_span = document.createElement('span');
    header_eng_span.classList.add('scripture-eng-text');
    header_eng_span.textContent = 'Chapter ' + String(chapter+1);
    header_eng_span.style.display = isEnglishActive ? 'inline' : 'none';

    const header_por_span = document.createElement('span');
    header_por_span.classList.add('scripture-por-text');
    header_por_span.textContent = "Capítulo " + String(chapter+1);
    header_por_span.style.display = isPortugueseActive ? 'inline' : 'none';

    const header_hr = document.createElement('hr');

    scriptureContainer.appendChild(chapter_header);
    chapter_header.appendChild(header_jpn_span);
    chapter_header.appendChild(header_eng_span);
    chapter_header.appendChild(header_por_span);
    chapter_header.appendChild(header_hr);
    
    main.appendChild(scriptureContainer);
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

