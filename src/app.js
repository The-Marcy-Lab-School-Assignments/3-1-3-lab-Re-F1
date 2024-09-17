import {
  renderBookList,
  renderAuthorInfo,
  renderNewUserForm,
  renderNewUser,
} from './render-functions.js'; // pulling the functions into the file

import {
  getFirstThreeFantasyBooks,
  getAuthor,
  createNewUser,
} from './fetch-functions.js'; // pulling the functions into this file

// export default async function app(appDiv) { // allows us to render stuff outside of it
export default async function app(appDiv) {
  // Create and append elements to the appDiv
  const bookListEl = document.createElement('ul');
  bookListEl.id = 'book-list';
  appDiv.append(bookListEl);

  const authorInfoEl = document.createElement('div');
  authorInfoEl.id = 'author-info';
  appDiv.append(authorInfoEl);

  const newUserEl = document.createElement('div');
  newUserEl.id = 'new-user';
  appDiv.append(newUserEl);

  const newUserFormEl = document.createElement('form');
  newUserFormEl.id = 'new-user-form';
  appDiv.append(newUserFormEl);

  // Render the new user form 
  // Render the form!
  renderNewUserForm(newUserFormEl);

  // Fetch books
  const books = await getFirstThreeFantasyBooks();
  console.log(books);
  //render
  renderBookList(bookListEl, books); 

 
  bookListEl.addEventListener("click", async (event) => {
    const button = event.target;
    const urlKey = button.dataset.authorUrlKey;

// this for some reason was gibing me issues but ifxed itt yay
    if (urlKey) {
      const author = await getAuthor(urlKey);
      if (author) {
        renderAuthorInfo(authorInfoEl, author);
      } else {
        console.error('Author data is missing');
      }
    }
  });

  // Add event listener for new user form submission
  newUserFormEl.addEventListener('submit', async (event) => {
    //stop reload
    event.preventDefault();

    const formData = new FormData(event.target);
    const userObject = Object.fromEntries(formData.entries()); // Convert to object

    const newUser = await createNewUser(userObject);
    renderNewUser(newUserEl, newUser);

    event.target.reset();
  });
}
