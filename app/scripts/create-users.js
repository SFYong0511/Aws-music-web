const axios = require('axios')
const fs = require('fs')
const filepath = 'app/data/users.json'
const authURL = 'https://s4e8iu6y11.execute-api.us-east-1.amazonaws.com/users'

function generateRandomID() {
    return Math.random().toString(36).substring(2, 9)
}

function createUser(user) {
    axios.put(authURL, user)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.error(error)
        })
}

// Read JSON data from file
fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err)
        return null
    }

    try {
        // Parse JSON data into array
        const users = JSON.parse(data)
        // Print the array
        const updatedUsers = users.map( user => ({...user, id: generateRandomID()}))
        console.log(updatedUsers)
        updatedUsers.forEach( user => createUser(user))
    } catch (error) {
        console.error('Error parsing JSON:', error)
        return null
    }
})