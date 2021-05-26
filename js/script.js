var searchBtn = document.getElementById("searchBtn");
var searchInput = document.getElementById("search");
var readMoreBtn = document.getElementById("read-btn1");



function searchFunction() {
    searchInput.submit();
}


//readMoreBtn.addEventListener("click", function(){
//    window.location.assign('https://www.loc.gov/?fo=json');
//})

searchBtn.addEventListener("click", function (){
    window.location.replace('./search-results.html');
})

