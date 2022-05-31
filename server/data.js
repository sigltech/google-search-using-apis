const indexjs = require('../client/index')

const searchThroughApi = (e) => {
    e.preventDefault()
    let accessKey = 'cda251ad6cd7d2236b861b330566386f'
    let url = `http://api.serpstack.com/search
    ? access_key = ${accessKey}
    & query = ${searchField}`
}

