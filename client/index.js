const { response } = require("express")
const searchField = document.querySelector('#search-input')
const searchBtn = document.querySelector('#search')
const luckyBtn = document.querySelector('#feeling-Lucky')
const outputFields = document.querySelector('.output')

const searchThroughApi = (e) => {
    e.preventDefault()
    let accessKey = 'cda251ad6cd7d2236b861b330566386f'
    let url = `http://api.serpstack.com/search
    ? access_key = ${accessKey}
    & query = ${searchField}`

    fetch(url)
        .then(response => response.json())
        .then(results => {
            results.forEach(result => {
                outputFields.textContent = results;
                document.getElementsByClassName('search-display-handling').style.display = 'none';
            })
        })
        .catch(console.error('you are throwing an error'))
}


searchBtn.addEventListener('submit', searchThroughApi)
// luckyBtn.addEventListener('submit', searchThroughApi(e))

module.exports = {
    searchField,
    searchBtn,
    luckyBtn
}
