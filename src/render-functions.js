export const renderBookList = (bookListEl, books) => {
    // take in a container and dta and render into a container
    /* FEEDBACK:
     * in the next line you are trying to set the innerHTML of the bookListEl to an empty string but you are using the subtraction operator instead of the correct one which is the assignment operator.
     */
    bookListEl.innterHTML - '';
    books.forEach((book) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const pTag = document.createElement('p');
        const button = document.createEleemt('button')// this is a typo
    })
/* FEEDBACK:
 * So here you have the right idea of creating the elements for each book but you are not appending correctly.
the code below should be inside the forEach loop and you should append the elements to the li element, then append the li element to the bookListEl.
 */
// append
li.append(img, p, button)
bookListEl.append(li)
    })


}

export const renderAuthorInfo = (authorInfoEl, author) => {
    /* FEEDBACK:
     * This will be similar to the renderBookList function but you will be rendering the author info instead of the book info.
     */
}

export const renderNewUserForm = (newUserFormEl) => {
    /* FEEDBACK:
     * This function will be responsible for rendering the form to create a new user.
    just build out a form with the necessary fields and append it to the newUserFormEl.
    read the requirements in the README to see what fields are required.
    follow the pattern of building out a form
    <form>
        <label for="">Username</label>
        <input type="text" id="username">
     */
}

export const renderNewUser = (newUserEl, newUser) => {
}

fb