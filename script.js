function showDiv() {
    document.getElementById('answer').style.display = "inherit";
 
let date = new Date();
let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayName = dayNames[date.getDay()];
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let today = month + "/" + day + "/" + year;
let startDate = new Date("06/19/2021");
let endDate = new Date(today);
let days = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
fetch ("./main.js")
    .then(x => x.text())
    .then(y => {
        let wordArray = y.slice(y.indexOf('var Ma='), y.indexOf(',Oa='))
            .replace('var Ma=', '')
            .replace('[', '')
            .replace(']', '')
            .replace(/"/g, '')
            .split(',');
            //document.body.innerHTML = "<h1> The Wordle is : " + wordArray[days].toUpperCase() + "</h1>"
            var word = "<h1> <center> The answer is : " + wordArray[days].toUpperCase() + "</center></h1>"

            document.body.innerHTML = word
            
    })};

