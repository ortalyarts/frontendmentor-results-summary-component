document.addEventListener('DOMContentLoaded', function() {



 //include the   'async':false   parameter or the object data won't get captured when loading
var jsonRawFile = $.getJSON({'url': "https://raw.githubusercontent.com/ortalyarts/frontendmentor-results-summary-component/main/data.json", 'async': false});
console.log(jsonRawFile);
var jsonFile = jsonRawFile.responseJSON;

//The next line of code will filter out all the unwanted data from the object.
//json = JSON.parse(json.responseText); 

console.log(jsonFile);


 //OLD function 
function listItems() {
    for(var i = 0; i < jsonFile.length; i++) {
        el = document.createElement('li');
        el.innerHTML = 
            '<img src="' + jsonFile[i].icon + '" />' +
            '<p class="title">' + jsonFile[i].category + '</p>' +
            '<p class="score">' + jsonFile[i].score + '<span> / 100</span></p>';
        document.querySelector('.summary ul').appendChild(el);
        
    }
}
//NEW function
function listItemsForEach() {
    jsonFile.forEach((item) => {
        el = document.createElement('li');
        el.innerHTML = 
            '<img src="' + item.icon + '" />' +
            '<p class="title">' + item.category + '</p>' +
            '<p class="score">' + item.score + '<span> / 100</span></p>';
        document.querySelector('.summary ul').appendChild(el);
        console.log(item); // prints each object (category) in the console
      });
}
if(jsonFile) {
    listItemsForEach();
}
else {
    alert('Sorry! No data for you.');
}

});