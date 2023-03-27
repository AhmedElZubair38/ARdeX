
const starting = "http://10.6.132.240:3000/"

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

const deleteScrapbookImage = async (scrapId) => {
    console.log("deleteScrapbookImage")
    console.log(scrapId)
    console.log('###############################################################################################')
    const response = await fetch(starting + 'sbapi/deleteScrapbookImage/' , {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "scrapId": scrapId,
                "imageName" : "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            })
            });
            const data = await response.json();
            console.log(data)
            return data
    }


module.exports = { insertScrapbook2, addScrapbookImage, deleteScrapbookImage }