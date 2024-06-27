export const getFirstThreeFantasyBooks = async () => {
    // using async and await --> it is replacing the .then() and .catch()
    // Async is what is returning the promise
    // promise is going to resolve
    try {
    const booksUrl = "https://openlibrary.org/subjects/fantasy.json"
    const response = await fetch(booksUrl)
    if (!repsonse.ok) throw new Error(`Failed to get fantasy books`)
        
    // parse the response body from JSON into JS object
    const jsonData = await repsonse.json()


    return jsonData.works.slice(0, 3).map((work) => {    // returning the
        return {
            title: work.title,
            author: {
              name: work.authors[0].name,
              urlKey: work.authors[0].key,
            },
            coverUrl: `https://covers.openlibrary.org/a/id/${work.cover_id}-M.jpg`
        }
    })
    // sending the fetch data with the URL and checking to see if the response is ok
    // parsing the response body from JSON into a JS object
    // returns 3 books
}
}

export const getAuthor = () => {
};

export const createNewUser = () => {
}