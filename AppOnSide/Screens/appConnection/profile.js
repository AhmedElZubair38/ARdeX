

const starting = "http://10.0.2.2:3000/"

console.log("profile.js")
const getProfileStuff = async (userId) => {
    // console.log(userId)
    const response = await fetch(starting + 'api/getProfileStuff/' + userId , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            }
            });
            const data = await response.json();
            // console.log(data)
            // console.log(data[0])
            // console.log(typeof(data))
            // console.log(data)
            // console.log(Object.keys(data))
            // const x = Object.values(data)
            // const y = Object.values(x[0])
            // const z = Object.values(y)[0]
            // console.log("userId")
            // console.log("qqqqqqqqqqqqqqqqqqqqqqqqq")
            // console.log(Object.values(data[0])[0])
            // console.log(Object.values(x))


            // console.log(typeof(x))
            // // console.log(z.length)
            // // console.log(typeof(z[0]))
            // console.log(z)
            return data[0];

            if (Object.keys(data).length ===0){
                return true;
            } else {
                return false;
            }
        }

const getFollowers = async (userId) => {
    const response = await fetch(starting + 'api/getFollowers/' + userId , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            }
            });
            const data = await response.json();
            // console.log(data)
            return data
        }


const getFollowing = async (userId) => {
    const response = await fetch(starting + 'api/getFollowing/' + userId , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            }
            });
            const data = await response.json();
            // console.log(data)
            return data
 }


 const getFollowersCount = async (userId) => {
    const response = await fetch(starting + 'api/getFollowers/' + userId , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            }
            });
            const data = await response.json();
            // console.log(data)
            return data.length
            
        }


const getFollowingCount = async (userId) => {
    const response = await fetch(starting + 'api/getFollowing/' + userId , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            }
            });
            const data = await response.json();
            // console.log(data)
            return data.length
 }


const getScrapbooksCount = async (userId) => {
    const response = await fetch(starting + 'sbapi/getScrapbookbyuserId/' + userId , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            }
            });
            const data = await response.json();
            // console.log("getScrapbooksCount")
            // console.log(data)
            return data.length
 }

 const getScrapbooks = async (userId) => {
    const response = await fetch(starting + 'sbapi/getScrapbookbyuserId/' + userId , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            }
            });
            const data = await response.json();
            // console.log(data)
            return data
 }

 const checkFollower = async (userId,followerId) => {
    console.log("checkFollower")
    console.log(userId)
    console.log(followerId)
    const response = await fetch(starting + 'api/getScrapbookbyuserId/' + userId +"/"+followerId , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            }
            });
            const data = await response.json();
            console.log(data)
            return data.length !== 0
 }




module.exports = {getProfileStuff, getFollowers, getFollowing, getFollowersCount, getFollowingCount, getScrapbooksCount, getScrapbooks, checkFollower}