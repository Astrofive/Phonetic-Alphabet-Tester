
let eastereggcount = 1

//program button to refresh text when clicked
const refreshbutton = document.querySelector('#refresh');
refreshbutton.addEventListener('click', () => {
    refresh(10);
    refreshbutton.style.backgroundColor = "";
    eastereggcount += 1;
});

// refresh() generates 10 random letters and updates document
function refresh(length){
    let result = '';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < length; i++){
        let newletter = letters.charAt(Math.floor(Math.random() * letters.length));
        if (!(result.includes(newletter))) {
            result += newletter;
        } else {
            i--;
        }
    } 
    if (eastereggcount == 10) {
        console.log(eastereggcount);
        result = "HOWDYBOYS!"
    }
    if (eastereggcount == 100) {
        console.log(eastereggcount);
        result = "WOW,100TAPS"
    }
    console.log(result);
    document.querySelector('#textbox').textContent = result;
    document.querySelector('#runcount').textContent = eastereggcount;
}

const helpbutton = document.querySelector('.dropdown');
const dropdowncontent = document.querySelector('#dropdowncontent');
helpbutton.addEventListener('click', () => {
    dropdowncontent.classList.toggle("hide");
});

// weather api
async function getWeather(){
    const weatherresponse = await fetch(`https://api.weather.gov/gridpoints/FWD/31,80/forecast`, {
        method: 'GET'
    });
    const data = await weatherresponse.json();
    document.querySelector('#weathertext').textContent = data.properties.periods[0].detailedForecast
}
getWeather();




document.querySelector('#versionnum').textContent = '1.2.0';
