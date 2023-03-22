const starting = "http://10.6.131.173:3000/"

const changeUsername = async (userID,newUsername) => {
    const response = await fetch(starting + 'epapi/changeUsername/' , {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: userID,
                username: newUsername
            }),
            });
            const data = await response.json();
            return data;
        }

        const changePhone = async (userID,phone) => {
            const response = await fetch(starting + 'epapi/changePhone/' , {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId: userID,
                        phone: phone
                    }),
                    });
                    const data = await response.json();
                    return data;
                }

module.exports = { changeUsername, changePhone }