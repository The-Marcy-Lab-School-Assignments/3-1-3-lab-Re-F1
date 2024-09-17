export const getFirstThreeFantasyBooks = async () => {
    try {
        // define url
        const booksUrl = "https://openlibrary.org/subjects/fantasy.json";
        
        // send fetch request and await response
        const response = await fetch(booksUrl);

        // here we are checking if the response is not ok
        if (!response.ok) { // if response is not ok - OK is within the (200)
            throw new Error("Failed to get fantasy books"); //
        }

        const jsonData = await response.json();

        return jsonData.works.slice(0, 3).map((works) => {
            return {
                title: works.title,
                author: {
                    name: works.authors[0].name,
                    urlKey: works.authors[0].key,
                },
                coverUrl: works.cover_id ? `https://covers.openlibrary.org/b/id/${works.cover_id}-M.jpg` : null
            };
        });
    } catch (error) {
        console.warn(error.message);
        return null;
    }
};

export const getAuthor = async (urlKey) => {
    try {
        // define url
        const authorUrl = `https://openlibrary.org${urlKey}.json`;
        
        // send fetch request and await response
        const response = await fetch(authorUrl);

        // here we are checking if the response is not ok
        if (!response.ok) { // if response is not ok - OK is within the (200)
            throw new Error("Failed to get author"); //
        }

        const authorData = await response.json();

       return {
                birthDate: authorData.birth_date,
                bio: authorData.bio,
                wikipediaUrl: authorData.wikipedia,
                name: authorData.name,
                pictureUrl: `https://covers.openlibrary.org/a/id/${authorData.photos[0]}-M.jpg`
            };
    } catch (error) {
        console.warn(error.message);
        return null;
    }
};




export const createNewUser = async (user) => {
    try {
        
    const userUrl = 'https://jsonplaceholder.typicode.com/users'
    const responseObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
    };
    
    const response = await fetch(userUrl, responseObj)
    if (!response.ok) {
        throw new Error('Failed to create new user');
    }

    
    const newUser = await response.json()
    return newUser

    } catch (error) {
        console.warn(error.message);
        return null;
    }
};