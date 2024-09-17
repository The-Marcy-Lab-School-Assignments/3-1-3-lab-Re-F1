export const renderBookList = (bookListEl, books) => {
    // take in a container and data and render into a container
    bookListEl.innterHTML = '';
    books.forEach((book) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const pTag = document.createElement('p');
        const button = document.createElement('button')
        
        img.src = book.coverUrl;
        img.alt = `An old cover of ${book.title}`
li.append(img, pTag, button)
bookListEl.append(li)
    })


}

export const renderAuthorInfo = (authorInfoEl, author) => {
    authorInfoEl.innterHTML = '';
        const h2 = document.createElement('h2')
        h2.context = author.name
        
        const img = document.createElement('img');
        img.src = author.pictureUrl
        img.alt = `A picture of ${author.name}`
    
        const p = document.createElement('p');
        p.textContent = `Born: ${author.birthDate}`
    
        const pBio= document.createElement('p');
        pBio.textContent = author.bio
        
        const a = document.createElement('a');
        a.href = author.wikipediaUrl;
        a.textContent = 'Wikipedia Link';

        authorInfoEl.append(h2, img, p, pBio, a);
}

export const renderNewUserForm = (newUserFormEl) => {
    newUserFormEl.innerHTML = '';

    const usernameLabel = document.createElement('label');
    usernameLabel.textContent = 'Username';
    usernameLabel.setAttribute('for', 'username');

    const userInput = document.createElement('input');
    userInput.id = 'username';
    userInput.name = 'username';

    const coolLabel = document.createElement('label');
    coolLabel.textContent = 'Is this user cool?';
    coolLabel.setAttribute('for', 'is-cool');

    const cool = document.createElement('input');
    cool.id = 'is-cool';
    cool.name = 'isCool';
    cool.type = 'checkbox';


    const favLang = document.createElement('label');
    favLang.textContent = 'Favorite Language';
    favLang.setAttribute('for', 'favorite-language');

    const selectFavLang = document.createElement('select');
    selectFavLang.id = 'favorite-language';
    selectFavLang.name = 'favoriteLanguage';

    const diffLanguages = ['None', 'JavaScript', 'Python', 'Ruby'];
    diffLanguages.forEach(language => {
        const option = document.createElement('option');
        option.value = language;
        option.textContent = language;
        selectFavLang.append(option);
    });


    const createUserButton = document.createElement('button');
    createUserButton.textContent = 'Create User';


    newUserFormEl.append(usernameLabel, userInput, coolLabel, cool, favLang, selectFavLang, createUserButton);
};

    

export const renderNewUser = (newUserEl, newUser) => {
newUserEl.innerHTML = "";

    const h2 = document.createElement("h2");
    h2.textContent = newUser.username;
    h2.dataset.userId = newUser.id;

    const pTag = document.createElement("p");
    if (newUser.isCool === true) pTag.textContent = `The hippest in the house!`;
    else pTag.textContent = "A real square.";

    const pTag2 = document.createElement("p");
    pTag2.textContent = `Favorite Language: ${newUser.favoriteLanguage}`;

    newUserEl.append(h2, pTag, pTag2)
};