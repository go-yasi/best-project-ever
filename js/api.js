var url = 'https://www.loc.gov/search?fo=json&q=los-angeles';
var baseUrl = 'https://www.loc.gov/search?fo=json';
var url;
var urlSearchParameter = '&q=';
var urlSearchVal;
var urlFormatParameter = '&format=';
var urlFormatVal;

var searchResults= [];
var dataTitle;
var dataDate;
var dataSubject;
var dataDescription;
var dataUrl;
var resultDisplay = document.getElementById('results');


function clearContent() { //function to clear results from previous search
    while(resultDisplay.firstChild) {
        resultDisplay.removeChild(resultDisplay.firstChild);
    }
}
  

function search(event){ //function to be called when search button is clicked
    event.preventDefault(); //prevent form default submit
    clearContent(); //clear previous results from page display
    searchResults= []; //clear data from previous search

    console.log(document.querySelector('.search-bar').value); //show input value in console
    console.log(document.querySelector('.select-format').value); //show input value in console
    urlSearchVal = document.querySelector('.search-bar').value; //save search input
    urlFormatVal = document.querySelector('.select-format').value; //save format input

    if(!(urlSearchVal === '')){ //if search was inputed and query to url
        url = baseUrl + urlSearchParameter + urlSearchVal;
    }
    if(!(urlFormatVal === '' || urlFormatVal === 'Example Option')){//if format was inputed and query to url
        url = baseUrl + urlFormatParameter + urlFormatVal;
    }

    console.log(url); //show url in console

    fetch(url, {
    })
    .then(function (response) {
        return response.json();
     })
    .then(function (data) {
        console.log(data); // show api call data in console
        for(var i = 0; i < data.results.length; i++){ //loop through results from data
            //console.log(data.results[i].title);
            //console.log(data.results[i].date);
            //console.log(data.results[i].subject);
            //console.log(data.results[i].description);
            //console.log(data.results[i].url);
            //console.log('---------------------------------------------');

            var searchResult = { //get data from result and create an object
                dataTitle: data.results[i].title,
                dataDate: data.results[i].date,
                dataSubject: (data.results[i].subject),
                dataDescription: (data.results[i].description),
                dataUrl: data.results[i].url,
            }
            searchResults.push(searchResult); // append result object to array
            
        }
        console.log(searchResults); //show array with relevant data object retrieved in console
        for(var i = 0; i < searchResults.length; i++){ //
            displayResult(i);
        }
        
    });
    urlSearchVal = ''; //reset value input from form
    urlFormatVal = ''; //reset value input from form
}

    function displayResult(n){
        //console.log('hi');

        var resultDivEL = document.createElement('div'); //create div element
        resultDivEL.className = 'search-result' //assign classes to div

        var resultTitleEL = document.createElement('h3'); //create h3
        resultTitleEL.className = 'result-title'; // assign h3 classes
        resultTitleEL.textContent = searchResults[n].dataTitle; //assign h3 text content 

        var resultDateEL = document.createElement('p'); // same as above
        resultDateEL.className = 'result-date';
        resultDateEL.textContent = 'Date: ' + searchResults[n].dataDate;
        
        var resultSubjectsEL = document.createElement('p'); // same as above
        resultSubjectsEL.className = 'result-subjects';
        resultSubjectsEL.textContent = 'Subjects: ' + searchResults[n].dataSubject;

        var resultDescEL = document.createElement('p'); // same as above
        resultDescEL.className = 'result-description';
        resultDescEL.textContent = 'Description: ' + searchResults[n].dataDescription;

        var resultReadEL = document.createElement('button'); // same as above
        resultReadEL.className = 'btn my-2 read-more-button';
        resultReadEL.textContent = 'Read More';
        resultReadEL.id = 'btn' + n; // create unique numbered ids for each button

        resultDivEL.appendChild(resultTitleEL); //append element to div
        resultDivEL.appendChild(resultDateEL); //append element to div
        resultDivEL.appendChild(resultSubjectsEL); //append element to div
        resultDivEL.appendChild(resultDescEL); //append element to div
        resultDivEL.appendChild(resultReadEL); //append element to div

        resultDisplay.appendChild(resultDivEL); //append div to the page
    }

    

    var searchBtn = document.querySelector('.search-button'); //define search button from html
    searchBtn.addEventListener('click', search); //run search() function on click
    
    clearContent();
    //var readMoreBtns = document.querySelectorAll('.read-more-button');
    //for(var i = 0; i < readMoreBtns.length; i++){
    //    readMoreBtns[i].addEventListener('click', search());
    //}


