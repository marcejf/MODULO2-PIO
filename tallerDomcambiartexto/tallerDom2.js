const cambio = document.getElementById('change');
const paragraph = document.getElementById('myParagraph');


cambio.addEventListener('click',() =>{
    const colors =['red', 'darkblue', 'darkgreen','purple','pink'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    paragraph.textContent= `The paragraph and its color have been modified, the new assigned color is : ${randomColor}`
    paragraph.style.color = randomColor;
})