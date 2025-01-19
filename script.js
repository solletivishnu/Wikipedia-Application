let searchInputEl = document.getElementById("searchInput");
let searchResultsEl =document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function createAndAppendResult(results){
    let {title,link,description} = results;
    //1. Div Container -- result-item
    let divContainerElement = document.createElement("div");
    divContainerElement.classList.add("result-item");
    searchResultsEl.appendChild(divContainerElement);

    //2. Anchor Title -- result-title
    let anchorEl = document.createElement("a");
    anchorEl.classList.add("result-title");
    anchorEl.textContent = title;
    anchorEl.href = link;
    anchorEl.target = "_blank";
    divContainerElement.appendChild(anchorEl);

    //3. Title Brake
    let brakeEl = document.createElement("br");
    divContainerElement.appendChild(brakeEl);

    //4. Anchor URL -- result-url
    let anchorUrlEl = document.createElement("a");
    anchorUrlEl.textContent = link;
    anchorUrlEl.href = link;
    anchorUrlEl.target = "_blank";
    divContainerElement.appendChild(anchorUrlEl);

    //5. Line Brake
    let brakeForLineEl = document.createElement("br");
    divContainerElement.appendChild(brakeForLineEl);

    //6. Paragraph Description -- line-description
    let paraEl = document.createElement("p");
    paraEl.classList.add("line-description");
    paraEl.textContent = description;
    divContainerElement.appendChild(paraEl);
}

function displayResults(searchResults){
    spinnerEl.classList.toggle("d-none");
    for (let results of searchResults){
        createAndAppendResult(results);
    }
   
}

function searchWiki(event){
    if(event.key === "Enter"){
        spinnerEl.classList.toggle("d-none");
        searchResultsEl.textContent = "";
        let userValue = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + userValue;
        let options = {
            method: "GET"
        };
        fetch(url,options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            let {search_results} = jsonData;
            displayResults(search_results);
        })
    }
}

searchInputEl.addEventListener("keydown",searchWiki);