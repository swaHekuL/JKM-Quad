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
    homeImage.src = 'data:image/png;base64,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';
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
        jpnSpan.classList.add('jpn-text', 'button-jpn-text');
        jpnSpan.textContent = volume.jpn;

        const engSpan = document.createElement('span');
        engSpan.classList.add('eng-text', 'button-eng-text');
        engSpan.textContent = volume.eng;
        engSpan.style.display = isEnglishActive ? 'flex' : 'none';

        const porSpan = document.createElement('span');
        porSpan.classList.add('por-text', 'button-por-text');
        porSpan.textContent = volume.por;
        porSpan.style.display = isPortugueseActive ? 'flex' : 'none';

        button.addEventListener('click', () => {
            if (volume.name === 'dc') openBook(main, loadData(), volume); else openVolume(main, volume);
            
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
                span.style.display = 'flex'});
            document.querySelectorAll(['.chapter-header', '.book-desc', '.chapter-desc', '.verse-container']).forEach(div => {
                div.style.borderBottom = '1px solid #808080';});
        } else {
            englishToggle.classList.remove('active');
            document.querySelectorAll('.eng-text').forEach(span => {
                span.style.display = 'none';});
        }

        if (languageStates.portuguese) {
            portugueseToggle.classList.add('active');
            document.querySelectorAll('.por-text').forEach(span => {
                span.style.display = 'flex';});
            document.querySelectorAll(['.chapter-header', '.book-desc', '.chapter-desc', '.verse-container']).forEach(div => {
                div.style.borderBottom = '1px solid #808080';});
        } else {
            portugueseToggle.classList.remove('active');
            document.querySelectorAll('.por-text').forEach(span => {
                span.style.display = 'none';});
        }

        if (!languageStates.english && !languageStates.portuguese) {
            document.querySelectorAll(['.chapter-header, .book-desc, .chapter-desc', '.verse-container']).forEach(div => {
                div.style.borderBottom = 'none';
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
        jpnSpan.classList.add('jpn-text', 'button-jpn-text');
        jpnSpan.textContent = book_jpn;

        const engSpan = document.createElement('span');
        engSpan.classList.add('eng-text', 'button-eng-text');
        engSpan.textContent = book_eng;
        engSpan.style.display = isEnglishActive ? 'flex' : 'none';

        const porSpan = document.createElement('span');
        porSpan.classList.add('por-text', 'button-por-text');
        porSpan.textContent = book_por;
        porSpan.style.display = isPortugueseActive ? 'flex' : 'none';

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
    title.textContent = volume.name === 'dc' 
        ? volume.jpn
        : book_jpn;

    const activeVolume_jpn = data[volume.name].jpn;
    const activeVolume_eng = data[volume.name].eng;
    const activeVolume_por = data[volume.name].por;

    const activeBook_jpn = volume.name === 'dc' 
        ? activeVolume_jpn.content 
        : activeVolume_jpn.content[book_jpn];
    const activeBook_eng = volume.name === 'dc' 
        ? activeVolume_eng.content 
        : activeVolume_eng.content[book_eng];
    const activeBook_por = volume.name === 'dc' 
        ? activeVolume_por.content 
        : activeVolume_por.content[book_por];

    chapters_jpn = Object.keys(activeBook_jpn);
    chapters_eng = Object.keys(activeBook_eng);
    chapters_por = Object.keys(activeBook_por);

    // Set initial states of toggle buttons
    let isEnglishActive = document.getElementById('english-toggle').classList.contains('active');
    let isPortugueseActive = document.getElementById('portuguese-toggle').classList.contains('active');
    
    for (i = 0; i <= activeBook_eng.length-1; i++) {
        let chapter = Number(chapters_jpn[i]) + 1;

        const button = document.createElement('button');
        button.classList.add('book-button');
        button.id = `${chapter}-button`;
        
        const jpnSpan = document.createElement('span');
        jpnSpan.classList.add('jpn-text', 'button-jpn-text');
        jpnSpan.textContent = String(chapter) + "章";

        const engSpan = document.createElement('span');
        engSpan.classList.add('eng-text', 'button-eng-text');
        engSpan.textContent = "Chapter " + String(chapter);
        engSpan.style.display = isEnglishActive ? 'flex' : 'none';

        const porSpan = document.createElement('span');
        porSpan.classList.add('por-text', 'button-por-text');
        porSpan.textContent = "Capítulo " + String(chapter);
        porSpan.style.display = isPortugueseActive ? 'flex' : 'none';

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
    main.innerHTML = '';
    const scriptureContainer = document.createElement('div');
    scriptureContainer.className = 'scripture-container';

    const activeVolume_jpn = data[volume.name].jpn;
    const activeVolume_eng = data[volume.name].eng;
    const activeVolume_por = data[volume.name].por;

    const activeBook_jpn = volume.name === 'dc' 
        ? activeVolume_jpn.content 
        : activeVolume_jpn.content[book_jpn];
    const activeBook_eng = volume.name === 'dc' 
        ? activeVolume_eng.content 
        : activeVolume_eng.content[book_eng];
    const activeBook_por = volume.name === 'dc' 
        ? activeVolume_por.content 
        : activeVolume_por.content[book_por];
    
    const activeChapter_jpn = activeBook_jpn[chapter];
    const activeChapter_eng = activeBook_eng[chapter];
    const activeChapter_por = activeBook_por[chapter];

    title = document.getElementById('header-title');
    book_jpn = volume.name === 'dc' 
        ? volume.jpn
        : book_jpn;
    title.textContent = book_jpn + " " + String(chapter+1) + "章";

    // Set initial states of toggle buttons
    let isEnglishActive = document.getElementById('english-toggle').classList.contains('active');
    let isPortugueseActive = document.getElementById('portuguese-toggle').classList.contains('active');

    // chapter header stuff
    const chapter_header = document.createElement('div');
    chapter_header.classList.add('chapter-header');
    chapter_header.style.borderBottom = (isEnglishActive|isPortugueseActive) ? '1px solid #808080' : 'none';

    const header_jpn_span = document.createElement('span');
    header_jpn_span.classList.add('jpn-text', 'scripture-jpn-text');
    header_jpn_span.textContent = String(chapter+1) + "章";

    const header_eng_span = document.createElement('span');
    header_eng_span.classList.add('eng-text', 'scripture-eng-text');
    header_eng_span.textContent = 'Chapter ' + String(chapter+1);
    header_eng_span.style.display = isEnglishActive ? 'flex' : 'none';

    const header_por_span = document.createElement('span');
    header_por_span.classList.add('por-text', 'scripture-por-text');
    header_por_span.textContent = "Capítulo " + String(chapter+1);
    header_por_span.style.display = isPortugueseActive ? 'flex' : 'none';

    const header_hr = document.createElement('hr');

    scriptureContainer.appendChild(chapter_header);
    chapter_header.appendChild(header_jpn_span);
    chapter_header.appendChild(header_eng_span);
    chapter_header.appendChild(header_por_span);

    if (activeChapter_eng[0] !== null) {
        const book_desc = document.createElement('div');
        book_desc.classList.add('book-desc');
        book_desc.style.borderBottom = (isEnglishActive|isPortugueseActive) ? '1px solid #808080' : 'none';


        const book_desc_jpn = document.createElement('span');
        book_desc_jpn.classList.add('jpn-text', 'book-desc-jpn');
        book_desc_jpn.textContent = activeChapter_jpn[0];

        const book_desc_eng = document.createElement('span');
        book_desc_eng.classList.add('eng-text', 'book-desc-eng');
        book_desc_eng.textContent = activeChapter_eng[0];
        book_desc_eng.style.display = isEnglishActive ? 'flex' : 'none';

        const book_desc_por = document.createElement('span');
        book_desc_por.classList.add('por-text', 'book-desc-por');
        book_desc_por.textContent = activeChapter_por[0];
        book_desc_por.style.display = isPortugueseActive ? 'flex' : 'none';

        scriptureContainer.appendChild(book_desc);
        book_desc.appendChild(book_desc_jpn);
        book_desc.appendChild(book_desc_eng);
        book_desc.appendChild(book_desc_por);
    }
    
    const chapter_desc = document.createElement('div');
    chapter_desc.classList.add('chapter-desc');
    chapter_desc.style.borderBottom = (isEnglishActive|isPortugueseActive) ? '1px solid #808080' : 'none';
    
    const chapter_desc_jpn = document.createElement('span');
    chapter_desc_jpn.classList.add('jpn-text', 'chapter-desc-jpn');
    chapter_desc_jpn.innerHTML = activeChapter_jpn[1];

    const chapter_desc_eng = document.createElement('span');
    chapter_desc_eng.classList.add('eng-text', 'chapter-desc-eng');
    chapter_desc_eng.textContent = activeChapter_eng[1];
    chapter_desc_eng.style.display = isEnglishActive ? 'flex' : 'none';

    const chapter_desc_por = document.createElement('span');
    chapter_desc_por.classList.add('por-text', 'chapter-desc-por');
    chapter_desc_por.textContent = activeChapter_por[1];
    chapter_desc_por.style.display = isPortugueseActive ? 'flex' : 'none';

    scriptureContainer.appendChild(chapter_desc);
    chapter_desc.appendChild(chapter_desc_jpn);
    chapter_desc.appendChild(chapter_desc_eng);
    chapter_desc.appendChild(chapter_desc_por);

    for (i = 0; i < activeChapter_jpn[2].length; i++) {
        const verseContainer = document.createElement('div');
        verseContainer.classList.add('verse-container');
        verseContainer.style.borderBottom = (isEnglishActive|isPortugueseActive) ? '1px solid #808080' : 'none';

        const verse_jpn = document.createElement('span');
        verse_jpn.classList.add('jpn-text', 'scripture-jpn-text');
        verse_jpn.innerHTML = activeChapter_jpn[2][i];

        const verse_eng = document.createElement('span');
        verse_eng.classList.add('eng-text', 'scripture-eng-text');
        verse_eng.textContent = activeChapter_eng[2][i];
        verse_eng.style.display = isEnglishActive ? 'flex' : 'none';

        const verse_por = document.createElement('span');
        verse_por.classList.add('por-text', 'scripture-por-text');
        verse_por.textContent = activeChapter_por[2][i];
        verse_por.style.display = isPortugueseActive ? 'flex' : 'none';

        scriptureContainer.appendChild(verseContainer);
        verseContainer.appendChild(verse_jpn);
        verseContainer.appendChild(verse_eng);
        verseContainer.appendChild(verse_por);
    }; 
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

