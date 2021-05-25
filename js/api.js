var url = 'https://www.loc.gov/search?fo=json&q=los-angeles';
var baseUrl = 'https://www.loc.gov/search?fo=json';
var urlParmaeter = '&q=los-angeles';

var searchResults= [];
var dataTitle;
var dataDate;
var dataSubject;
var dataDescription;
var dataUrl;
var resultDisplay = document.getElementById('results');

baseUrl += urlParmaeter;
function search(){
    fetch(baseUrl, {
    })
    .then(function (response) {
        return response.json();
     })
    .then(function (data) {
        console.log(data);
        for(var i = 0; i < data.results.length; i++){
            //console.log(data.results[i].title);
            //console.log(data.results[i].date);
            //console.log(data.results[i].subject);
            //console.log(data.results[i].description);
            //console.log(data.results[i].url);
            //console.log('---------------------------------------------');

            var searchResult = {
                dataTitle: data.results[i].title,
                dataDate: data.results[i].date,
                dataSubject: (data.results[i].subject),
                dataDescription: (data.results[i].description[0]),
                dataUrl: data.results[i].url,
            }
            searchResults.push(searchResult);
            
        }
        console.log(searchResults);
        for(var i = 0; i < searchResults.length; i++){
            displayResult(i);
        }
        
    });
}

    function displayResult(n){
        //clearContent();
        console.log('hi');

        var resultDivEL = document.createElement('div');
        resultDivEL.className = 'search-result'

        var resultTitleEL = document.createElement('h3');
        resultTitleEL.className = 'result-title';
        resultTitleEL.textContent = searchResults[n].dataTitle;

        var resultDateEL = document.createElement('p');
        resultDateEL.className = 'result-date';
        resultDateEL.textContent = 'Date: ' + searchResults[n].dataDate;
        
        var resultSubjectsEL = document.createElement('p');
        resultSubjectsEL.className = 'result-subjects';
        resultSubjectsEL.textContent = 'Subjects: ' + searchResults[n].dataSubject;

        var resultDescEL = document.createElement('p');
        resultDescEL.className = 'result-description';
        resultDescEL.textContent = 'Description: ' + searchResults[n].dataDescription;

        var resultReadEL = document.createElement('button');
        resultReadEL.className = 'btn my-2 read-more-button';
        resultReadEL.textContent = 'Read More';

        resultDivEL.appendChild(resultTitleEL);
        resultDivEL.appendChild(resultDateEL);
        resultDivEL.appendChild(resultSubjectsEL);
        resultDivEL.appendChild(resultDescEL);
        resultDivEL.appendChild(resultReadEL);

        resultDisplay.appendChild(resultDivEL);
    }

console.log(searchResults.length);
search();