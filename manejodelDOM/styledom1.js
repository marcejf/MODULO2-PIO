/* DOM 
con nodo raiz, rut y se trabaja con los elementos y las etiquetas 
se puede crear etiquetas nuevas , como manipular las que ya existen , cambiar contenidos a las etiquetas 
accedo atravez de id o de la clase 
 */

const boton = document.getElementById('cambiarcolor')
const parrafo = document.getElementById('esteparrafo')

/*boton.addEventListener('click',() =>{
 //cambiar el color del parrafo al hacer click
 const colores =['red', 'blue','yellow','green','purple'];
 const color = colores[Math.floor(Math.random()* colores.length)];
 //csmbiar el contenido del parrafo

 parrafo.textContent = `el color asignado es : ${color}`;
 parrafo.style.color = color;


});
 */


const colores ={
    rojo: 'red',
    azul: 'blue',
    amarillo: 'yellow',
    verde: 'green',
    purpura: 'purple',

};
const nombrecolor = Object.keys(colores);
boton.addEventListener('click', () =>{
    const colorEspagnol = nombrecolor[Math.floor(Math.random()*nombrecolor.length)]
    const colorIngles = colores[colorEspagnol]

    parrafo.textContent = `el color asignado es : ${colorEspagnol}`
    parrafo.style.color = colorIngles;
});


    

