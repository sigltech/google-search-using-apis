const {data} = require('../server/data')
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
}


searchBtn.addEventListener('submit', searchThroughApi)
luckyBtn.addEventListener('submit', searchThroughApi)

module.exports = {
    searchField,
    searchBtn,
    luckyBtn
}
