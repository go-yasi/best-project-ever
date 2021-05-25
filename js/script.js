var searchBtn = document.getElementById("searchBtn");
var searchInput = document.getElementById("search");
var readMoreBtn = document.getElementById("read-btn1");



function searchFunction() {
    searchInput.submit();
}


readMoreBtn.addEventListener("click", function(){
    window.location.assign('https://www.loc.gov/?fo=json');
})

searchBtn.addEventListener("click", function (){
    window.location.replace('./search-results.html');
})

var url = 'https://www.loc.gov/search?fo=json&q=los-angeles';
var baseUrl = 'https://www.loc.gov/search?fo=json';
var urlParmaeter = '&q=los-angeles';

var searchResults= [];
var dataTitle;
var dataDate;
var dataSubject;
var dataDescription;
var dataUrl;


baseUrl += urlParmaeter;

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
        
    });
