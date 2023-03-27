

const starting = "http://10.6.132.240:3000/"

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
            console.log(data)
            return data
 }

 const checkFollower = async (userId,followerId) => {
    // console.log("checkFollower")
    // console.log(userId)
    // console.log(followerId)
    // console.log(starting + 'api/getScrapbookbyuserId/' + userId +"/"+followerId)
    const response = await fetch(starting + 'api/checkFollower/' + userId +"/"+followerId , {
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


 const insertFollower = async (userId,followerId) => {
    const response = await fetch(starting + 'api/insertFollower/' , {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: userId,
                followerId: followerId,
            })
            });
            const data = await response.json();
            console.log(data)
            return data
    }


const deleteFollower = async (userId,followerId) => {
    const response = await fetch(starting + 'api/deleteFollower/' , {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: userId,
                followerId: followerId,
            })
            });
            const data = await response.json();
            console.log(data)
            return data
    }


// const changeName = async (userId, name) => {
//     console.log("changeNameheading")
//     console.log(userId)
//     console.log("name" +  name)
//     const response = await fetch(starting + 'epapi/changeName' , {
//         method: 'PATCH',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 userId: userId,
//                 name: name,
//             })
//             });
//             const data = await response.json();
//             console.log("changeName")
//             console.log(data)

//             return data
//     }

const changeName = async (userId, name) => {
    try {
      const response = await fetch(starting + 'epapi/changeName', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,
          name: name,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
    //   console.log("changeName");
    //   console.log(data);
  
      return data;
    } catch (error) {
      console.error('Error:', error);
      // handle the error, e.g. show an error message to the user
    }
  };
  

const changeBio = async (userId, bio) => {
    const response = await fetch(starting + 'epapi/changeBio/' , {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: userId,
                bio: bio,
            })
            });
            const data = await response.json();

            return data
    }

const changeProfileImage = async (userId, profileImage) => {
    console.log("changeProfileImage")
    console.log(userId)
    console.log("profileImage" +  profileImage)
    console.log(profileImage)
    const response = await fetch(starting + 'epapi/changeProfileImage/' , {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: userId,
                profileImage: profileImage,
            })
            });
            const data = await response.json();

            return data
    }








module.exports = {getProfileStuff, getFollowers, getFollowing, getFollowersCount, getFollowingCount, getScrapbooksCount, getScrapbooks, checkFollower,
insertFollower, deleteFollower, changeName, changeBio, changeProfileImage

}