import React, { useState } from 'react'; //Para manejar los estados de las tareas con el hook de useState
import llamados from '../service/llamados';  //Se importan llamados

function AddTarea({ setTareas, tareas}) { //aqui es la funcion del componente donde se definen los estados para las tareas 
    const [textoTarea, setTextoTarea] = useState(''); //de define el texto de las tareas, y se setea para se actualice el estado

    const agregarTarea = async () => { //con esta funcion se indica que si el cuadro de texto está vacío muestre un texto 
        if (textoTarea.trim() === '') { //el trim es para eliminar los espacios en blanco al inicio y final del texto que se ingresa
            alert("Escribe una tarea"); //esta alerta le pide al usuario que ingrese una tarea para poder continuar, no se agrega nada si no hay un texto/tarea
            return;
        }
    
        const tareaNueva = { id: Math.random(), text: textoTarea, completed: false}; //aqui se define la id de cada tarea entrada, el  y si se marcó como completa o no
        setTareas([...tareas, tareaNueva]);//con esto primero se vacía el espacio para luego ingresar una nueva tarea
        setTextoTarea("");//para setear esa nueva tarea y asi se mantiene actualizada la pagina web
        await llamados.postTareas(tareaNueva) //con esto se postea el contenido en el dbjson

    }

    return ( //aqui se define lo que se va a mostrar en la pagina, definiendo el contenedor principal donde va todo y los elementos como los titulos, inputs y botones, casi como si fuera en html
        <div className="addTarea">
            <input 
                type="text" 
                value={textoTarea}
                placeholder="Nueva Tarea"
                onChange={(e) => setTextoTarea(e.target.value)}
            />
            <button onClick={agregarTarea}>Agregar</button>
        </div>
    );
};

export default AddTarea;