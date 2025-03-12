import React, { useState } from 'react'; //Para manejar los estados de las tareas con el hook de useState
import Routing from './routes/Routing'; //Se importan las rutas
import './App.css'; //Se importan estilos

function App() { //aqui es un "componente" donde se definen los estados para las tareas       
  const [tareas, setTareas] = useState([]); //primero se definen las tareas que se conecta con el dbjson, y luego se setea para que se actualice el estado
  const [textoTareas, setTextoTareas] = useState('');//de define el texto de las tareas, y se setea para se actualice el estado
  const [tareasCompletas, setTareasCompletas] = useState(0); //se inicia con un valor en 0 para que despues se actualice el número según se vayan actualizando las tareas

  const addTarea = () => { //con esta funcion se indica que si el cuadro de texto está vacío muestre un texto 
    if (textoTareas.trim() === '') { //el trim es para eliminar los espacios en blanco al inicio y final del texto que se ingresa.
      alert('Escribe una tarea'); //esta alerta le pide al usuario que ingrese una tarea para poder continuar, no se agrega nada si no hay un texto/tarea
      return;
    }
    const tareaNueva = { id: Math.random(), text: textoTareas, completed: false }; //aqui se define la id de cada tarea entrada, el  y si se marcó como completa o no
    setTareas([...tareas, tareaNueva]);//con esto primero se vacía el espacio para luego ingresar una nueva tarea
    setTextoTareas('');//para setear esa nueva tarea y asi se mantiene actualizada la pagina web
    //**Aqui puse esto en un comment pq no me estaba actualizando el dbjson al agregar tareas, pq no lo habia implementado
    // entonces a partir de aqui voy a hace rel codigo para empezar las tareas CRUD al server* */
  };

  const borrarTarea = (tareaId) => { //con esta funcion borramos las tareas que ya se ingresaron a la lista, con la id de la tarea especiica a borrar
    const tareaActualizada = tareas.filter(tarea => tarea.id !== tareaId);//esto es una forma de filtrar/identificar esa tarea especifica a borrar
    setTareas(tareaActualizada); //setea ese nuevo valor
  };

  const toggleTareasCompletas = (tareaId) => { //funcion para cambiar el estado a completa
    const tareaActualizada = tareas.map(tarea => { //con map se recorre el array de tareas para borrar esa tarea en especifico
      if (tarea.id === tareaId) {
        if (!tarea.completed) setTareasCompletas(tareasCompletas + 1);//si la tarea es completa se muestra en el marcador
        return { ...tarea, completed: !tarea.completed };
      }
      return tareas;//si la tarea no sufe ningun cambio se devuelve igual
    });
    setTareas(tareaActualizada); //setea la lista actualizada despues de marcar las tareas como completas
  };


  return ( //aqui se define lo que se va a mostrar en la pagina, definiendo el contenedor principal donde va todo y los elementos como los titulos, inputs y botones, casi como si fuera en html
    <div className="App"> 
      <h1>To Do List</h1>
      <input /*en este input de texto es donde se ingresa la nueva tarea */
        type="text"
        value={textoTareas}
        onChange={(e) => setTextoTareas(e.target.value)} /*esta funcion es para controlar el evento que se ejecuta cada vez que se agrega una nueva tarea */
        placeholder="Nueva tarea"
      />
      <button onClick={addTarea}>Agregar</button> {/*botón para agregar la tarea con un evento onclick y toma la función que se creó arriba*/}
      <ul> {/*para hacer una lista de tareas que se van a ir agregando */}
        {tareas.map(tarea => ( //con este map se recorre el array de tareas y se muestra en la lista
          <li key={tarea.id}> {/*se define la key de cada tarea para que se pueda identificar cada una */}
           <input /*con este input se marca si la tarea está completa o no */
              type="checkbox"
              checked={tarea.completed}
              onChange={() => toggleTareasCompletas(tarea.id)}
            />
            <span style={{ textDecoration: tarea.completed ? 'line-through' : 'none' }}> {/*con este span se tacha la tarea si está completa */}
              {tarea.text}
            </span>
            <button onClick={() => borrarTarea(tarea.id)}>Eliminar</button> {/*con este botón se elimina la tarea */}
          </li>
        ))}
      </ul>
      <p>Tareas completadas: {tareasCompletas}</p> {/*para mostrar el número de tareas completadas */}
    </div>
  );
}

export default App;