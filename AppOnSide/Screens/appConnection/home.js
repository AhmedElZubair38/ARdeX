
const starting = "http://10.0.2.2:3000/"

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


module.exports = { getHomeFeed }