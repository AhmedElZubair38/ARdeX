


// Example fundtion to get data from database
const insertUser2 = async (name,email,username) => {
    const response = await fetch('http://10.0.2.2:3000/api/insertUser2' , {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                username: username
            }),
            });
            const data = await response.json();
            if (data) {
                return true;
            } else {
                return false;
            }
}


const checkUsername = async (username) => {
    const response = await fetch('http://10.0.2.2:3000/api/checkUsername/' + username , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            }
            });
            const data = await response.json();
            // console.log(data)
            // console.log(data)
            // console.log(typeof(data))
            // console.log(Object.keys(data).length)
            if (Object.keys(data).length ===0){
                return true;
            } else {
                return false;
            }
        }



// export default insertUser2;
module.exports = {insertUser2, checkUsername}