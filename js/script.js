//var url = 'https://www.loc.gov/search?fo=json&q=los-angeles';
var baseUrl = 'https://www.loc.gov/search?fo=json';
var urlParmaeter = '&q=los-angeles';

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
            console.log(data.results[i].title);
            console.log(data.results[i].date);
            console.log(data.results[i].subject);
            console.log(data.results[i].description);
            console.log(data.results[i].url);
            console.log('---------------------------------------------');

            dataTitle = data.results[i].title;
            dataDate = data.results[i].date;
            dataSubject = (data.results[i].subject);
            dataDescription = (data.results[i].description);
            dataUrl = data.results[i].url;
        }
        
    });
      

    