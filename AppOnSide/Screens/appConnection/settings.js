const starting = "http://localhost:3000/"

const changeUsername = async (userID,newUsername) => {
    const response = await fetch('http://localhost:3000/epapi/changeUsername/' , {
        method: 'PATCH',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: userID,
                username: newUsername
            }),
            });
            const data = await response.json();
        }