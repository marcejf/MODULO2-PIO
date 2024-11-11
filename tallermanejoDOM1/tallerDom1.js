 const nuevatareaa = document.getElementById('Tareanueva');
const btnAgregar = document.getElementById('Agregar');
const ListaTareas = document.getElementById('ListaTareas');

btnAgregar.addEventListener('click', () =>{
    const Tareanueva = document.createElement('Li');
    Tareanueva.textContent = nuevatareaa.value;

    ListaTareas.appendChild(Tareanueva);

    nuevatareaa.value ='';



    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = "eliminar";
    btnEliminar.addEventListener('click',() =>{
        ListaTareas.removeChild(Tareanueva);
    })

    Tareanueva.appendChild(btnEliminar);
}
);



