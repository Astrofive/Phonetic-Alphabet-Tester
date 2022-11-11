
let eastereggcount = 0

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
        result += letters.charAt(Math.floor(Math.random() * letters.length));
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
}

const helpbutton = document.querySelector('.dropdown');
const dropdowncontent = document.querySelector('#dropdowncontent');
helpbutton.addEventListener('click', () => {
    dropdowncontent.classList.toggle("show");
});