// const { response } = require("express")
const searchField = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search');
const luckyBtn = document.querySelector('#feeling-Lucky');
const outputFields = document.querySelector('#search-results');
const searchFieldHandling = document.querySelector('.search-display-handling')

const YOUR_ACCESS_KEY = '1c2c1c628f5ceb0db78cf4ded5ef728b';
let result = '';

function searchThroughApi(e) {
    e.preventDefault();
    const query = searchField.value;
    fetch(`http://api.serpstack.com/search?access_key=${YOUR_ACCESS_KEY}&query=${query}`)
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        const responseJ = response.json();
        return responseJ;
    })
    .then(data => {
        data.organic_results.forEach(res => {
            result = `
            <div class="results-styling" >
                <h1 class="results-h1">${res.title}</h1><br/>
                <a class="results-link" href="${res.url}">${res.url}</a><br/>
                <p class="results-p">${res.snippet}</p>
            <div>
            `;
            searchFieldHandling.style.display = 'none';
            navSearchField.style.display = 'block'
            outputFields.innerHTML += result;
            

        })
    })
    .catch(error => {
        console.log(error)
    });
}
searchBtn.addEventListener('submit', searchThroughApi);
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



searchBtn.addEventListener('submit', searchThroughApi);


