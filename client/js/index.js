// const { response } = require("express")
const searchField = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');
const luckyBtn = document.querySelector('#feeling-Lucky');
const outputFields = document.querySelector('.output');

const YOUR_ACCESS_KEY = 'cda251ad6cd7d2236b861b330566386f';
const query = searchField.textContent;

// let url = `http://api.serpstack.com/search?access_key=${YOUR_ACCESS_KEY}&query= ${query}`

const searchThroughApi = (e) => {
    e.preventDefault();
    fetchData(query);
    addDomElements();
}


async function fetchData(query) {
    try {
    await fetch(`http://api.serpstack.com/search?access_key=${YOUR_ACCESS_KEY}&query= ${query}`)
        .then(response => response.json())
        // .then(querys => query)
    } catch {
        console.log('error')
    }
};


document.querySelector('#search').addEventListener('submit', searchThroughApi);


const addDomElements = () => {
    outputFields.textContent = fetchData(searchField);
}


