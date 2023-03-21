


// Example fundtion to get data from database
const insertUser2 = async (name,email,username) => {
    const response = await fetch('http://10.6.131.173:3000/api/insertUser2' , {
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
    const response = await fetch('http://10.6.131.173:3000/api/checkUsername/' + username , {
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

            if (Object.keys(data).length ===0){
                return true;
            } else {
                return false;
            }
        }

        const getUserIdFromEmail = async (email) => {
            const response = await fetch('http://10.6.131.173:3000/api/getUserIdFromEmail/' + email , {
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

                    // console.log(data);
        
                    if (Object.keys(data).length ===0){
                        return false;
                    } else {
                        return Object.values(data[0])[0]
                        // return data;
                    }
                }




// export default insertUser2;
module.exports = {insertUser2, checkUsername, getUserIdFromEmail}