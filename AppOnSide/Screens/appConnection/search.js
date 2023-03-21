
const starting = "http://localhost:3000/"

const searchByNameAndUsername = async (query) => {
    const response = await fetch(starting + 'api/searchByNameAndUsername/' + query , {
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

const getAllUsers = async () => {
    const response = await fetch(starting + 'api/getAllUsers/', {
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


module.exports = { searchByNameAndUsername, getAllUsers }