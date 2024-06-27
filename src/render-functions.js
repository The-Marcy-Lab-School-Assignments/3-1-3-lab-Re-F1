export const renderBookList = (bookListEl, books) => {
    // take in a container and dta and render into a container
    bookListEl.innterHTML - '';
    books.forEach((book) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const pTag = document.createElement('p');
        const button = document.createEleemt('button')
    })


// append
li.append(img, p, button)
bookListEl.append(li)
}

export const renderAuthorInfo = (authorInfoEl, author) => {
}

export const renderNewUserForm = (newUserFormEl) => {
}

export const renderNewUser = (newUserEl, newUser) => {
}