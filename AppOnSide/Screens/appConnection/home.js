const starting = "http://10.6.132.240:3000/"

const getHomeFeed = async () => {
    const response = await fetch(starting + 'api/getHomeFeed/', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            }
            });
            const posts = await response.json();
            // console.log(data)
            const groupedPosts = posts.reduce((acc, post) => {
            const { userId, scrapId, username, name, profileImage, scrapName, caption, likes, comments, dateEdited } = post;
            const key = `${userId}_${scrapId}_${username}_${name}_${profileImage}_${scrapName}_${caption}_${likes}_${comments}_${dateEdited}`;
            
            if (!acc[key]) {
                acc[key] = {
                ...post,
                images: []
                };
            }
            
            if (post.imageName) {
                acc[key].images.push(post.imageName);
            }
            
            return acc;
            }, {});
            
            const mergedPosts = Object.values(groupedPosts).map(post => {
            return {
                ...post,
                imageName: post.images.length > 0 ? post.images : null,
                images: undefined
            };
            });
            
            console.log(mergedPosts);
            return mergedPosts
              
            
        }




        

        const getHomeFeedByUser = async (userId) => {
            const response = await fetch(starting + 'api/getHomeFeedByUser/' + userId, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    }
                    });
                    const posts = await response.json();
                    // console.log(data)
                    const groupedPosts = posts.reduce((acc, post) => {
                    const { userId, scrapId, username, name, profileImage, scrapName, caption, likes, comments, dateEdited } = post;
                    const key = `${userId}_${scrapId}_${username}_${name}_${profileImage}_${scrapName}_${caption}_${likes}_${comments}_${dateEdited}`;
                    
                    if (!acc[key]) {
                        acc[key] = {
                        ...post,
                        images: []
                        };
                    }
                    
                    if (post.imageName) {
                        acc[key].images.push(post.imageName);
                    }
                    
                    return acc;
                    }, {});
                    
                    const mergedPosts = Object.values(groupedPosts).map(post => {
                    return {
                        ...post,
                        imageName: post.images.length > 0 ? post.images : null,
                        images: undefined
                    };
                    });
                    
                    // console.log(mergedPosts);
                    return mergedPosts
                      
                    
                }


                const getMapFeed = async () => {
                    const response = await fetch(starting + 'api/getMapFeed/' , {
                        method: 'GET',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            }
                            });
                            const posts = await response.json();
                            // console.log(data)
                            const groupedPosts = posts.reduce((acc, post) => {
                            const { userId, scrapId, username, name, profileImage, scrapName, caption, longitude, latitude, likes, comments, dateEdited } = post;
                            const key = `${userId}_${scrapId}_${username}_${name}_${profileImage}_${scrapName}_${caption}_${longitude}_${latitude}_${likes}_${comments}_${dateEdited}`;

                            if (!acc[key]) {
                                acc[key] = {
                                ...post,
                                images: []
                                };
                            }

                            if (post.imageName) {
                                acc[key].images.push(post.imageName);
                            }

                            return acc;
                            }, {});

                            const mergedPosts = Object.values(groupedPosts).map(post => {
                            return {
                                ...post,
                                imageName: post.images.length > 0 ? post.images : null,
                                images: undefined
                            };
                            });

                            // console.log(mergedPosts);
                            return mergedPosts


                        }





const isScrapbookLikedByUser = async (scrapId, userId) => {
    // const temp = starting + 'sbapi/isScrapbookLikedByUser/' + scrapId +'/' + userId
    // console.log(temp)
    // console.log("Scrapbook ID: " + scrapId)
    // console.log("User ID: " + userId)
    const response = await fetch(starting + 'sbapi/isScrapbookLikedByUser/' + scrapId +'/' + userId, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            }
            });
            const data = await response.json();
            // console.log(data)
            if (data.length > 0) {
                return true
            } else {
                return false
            }
        }


const addScrapbookLike = async (scrapId, userId) => {
    // console.log("addScrapbookLike")
    // console.log("Scrapbook ID: " + scrapId)
    // console.log(scrapId)
    // console.log("User ID: " + userId)
    // console.log(userId)
    const response = await fetch(starting + 'sbapi/addScrapbookLike/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                scrapId: scrapId,
                userId: userId
            })
            });
            const data = await response.json();
            if (data) {
                return true;
            } else {
                return false;
            }
}


const deleteScrapbookLike = async (scrapId, userId) => {
    // console.log("DelScrapbookLike")
    // console.log("Scrapbook ID: " + scrapId)
    // console.log("User ID: " + userId)
    const response = await fetch(starting + 'sbapi/deleteScrapbookLike/', {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                scrapId: scrapId,
                userId: userId
            })
            });
            const data = await response.json();
            if (data) {
                return true;
            } else {
                return false;
            }
}

const getUsersLikedScrapbooks = async (scrapId) => {
    // console.log("getUsersLikedScrapbooks")
    // console.log("Scrapbook ID: " + scrapId)
    const response = await fetch(starting + 'sbapi/getUsersLikedScrapbook/' + scrapId, {
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

        


const getCommentsByID = async (scrapId) => {
    // console.log("getCommentsByID")
    // console.log("Scrapbook ID: " + scrapId)
    const response = await fetch(starting + 'sbapi/getCommentsByID/' + scrapId, {
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

const insertScrapbookComment = async (scrapId, userId, comment) => {
    console.log("insertScrapbookComment")
    console.log("Scrapbook ID: " + scrapId)
    console.log("User ID: " + userId)
    console.log("Comment: " + comment)
    const response = await fetch(starting + 'sbapi/insertScrapbookComment/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                scrapId: scrapId,
                userId: userId,
                comment: comment
            })
            });
            const data = await response.json();
            if (data) {
                return true;
            } else {
                return false;
            }
}

const deleteScrapbookComment = async (commentId) => {
    // console.log("deleteScrapbookComment")
    // console.log("Comment ID: " + commentId)
    const response = await fetch(starting + 'sbapi/deleteScrapbookComment/', {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                commentId: commentId
            })
            });
            const data = await response.json();
            if (data) {
                return true;
            } else {
                return false;
            }
}

const insertReportUser = async (userId, reportedUserId) => {
    // console.log("insertReportUser")
    console.log("User ID: " + userId)
    console.log("Reported User ID: " + reportedUserId)
    const response = await fetch(starting + 'api/insertReportUser/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: userId,
                ReportedUserId: reportedUserId,
                reportReason: "spam"
            })
            });
            const data = await response.json();
            console.log(data)
            if (data) {
                return true;
            } else {
                return false;
            }
}


const insertReportScrapbook = async (userId, scrapId) => {
    // console.log("insertReportScrapbook")
    const response = await fetch(starting + 'sbapi/insertReportScrapbook/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: userId,
                scrapId: scrapId,
                reportReason: "spam"
            })
            });
            const data = await response.json();
            if (data) {
                return true;
            } else {
                return false;
            }
}



module.exports = { getHomeFeed , isScrapbookLikedByUser, addScrapbookLike, deleteScrapbookLike, getUsersLikedScrapbooks , getCommentsByID , insertScrapbookComment, deleteScrapbookComment, insertReportUser, insertReportScrapbook, getHomeFeedByUser,
    getMapFeed
}
