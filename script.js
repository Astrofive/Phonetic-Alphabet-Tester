
//program button to refresh text when clicked
const refreshbutton = document.querySelector('#refresh');
refreshbutton.addEventListener('click', () => {
    refresh(10);
});

// refresh() generates 10 random letters and updates document
function refresh(length){
    let result = '';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < length; i++){
        result += letters.charAt(Math.floor(Math.random() * letters.length));
    } 
    console.log(result);
    document.querySelector('#textbox').textContent = result;
}