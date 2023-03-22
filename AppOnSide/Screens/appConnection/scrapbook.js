
const starting = "http://192.168.0.170:3000/"

const insertScrapbook2 = async (scrapName, caption, latitude, longitude, scrapType, userId) => {
    const response = await fetch(starting + 'sbapi/insertScrapbook2/' , {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "scrapName": scrapName,
                "caption":  caption,
                "latitude": latitude,
                "longitude": longitude,
                "scrapType": scrapType,
                "userId" : userId,
            })
            });
            const data = await response.json();
            console.log(data)
            return data
    }


    const addScrapbookImage = async (scrapId, imageName) => {
        const response = await fetch(starting + 'sbapi/addScrapbookImage/' , {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "scrapId": scrapId,
                    "imageName" : imageName,
                })
                });
                const data = await response.json();
                console.log(data)
                return data
        }

module.exports = { insertScrapbook2, addScrapbookImage }