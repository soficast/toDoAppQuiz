import React, { useState, useEffect } from 'react'; //Para manejar los estados de las tareas con el hook de useState
import AddTarea from '../components/AddTarea'; //Se importa AddTarea
import llamados from '../service/llamados' //Se importan llamados

function ListaTareas( {tareas, setTareas, agregarTarea } ) { //aqui es la funcion del componente donde se definen los estados para las tareas
    const [tareasCompletas, setTareasCompletas] = useState(0); //se define el estado de las tareas completas y se setea para que se actualice el estado

    useEffect(() => {  //con este useEffect se actualiza el estado de las tareas completas
      const tareasCompletas = tareas.filter(tarea => tarea.completed).length; //con este filter se filtran las tareas que estén completas y se cuentan
      setTareasCompletas(tareasCompletas); //se setea el estado de las tareas completas
    }, [tareas]); //se actualiza el estado de las tareas completas


    const borrarTarea = async (tareaId) => { //esta funcion asincrona espera para que el usuario confirme si desea borrar la tarea o no
      try { //con este try se intenta borrar la tarea
        await llamados.deleteTareas(tareaId); //espera a que se borre la tarea
        const tareaActualizada = tareas.filter(tarea => tarea.id !== tareaId);// filtra la tarea que se quiere borrar
        setTareas(tareaActualizada);//se setea la tarea actualizada
      } catch (error) { //atarapa el error
        console.error('Error deleting task:', error);
      }
    };

    const toggleTareasCompletas = (tareaId) => { //con esta funcion se cambia el estado de las tareas completas
        const tareaActualizada = tareas.map(tarea => {//map recorre el array de tareas y se actualiza el estado de las tareas completas
            if (tarea.id === tareaId) { 
                if (!tarea.completed) {
                  setTareasCompletas(tareasCompletas + 1); //si la tarea está completada se muestra al contador
                }
                return { ...tarea, completed: !tarea.completed };
            }
            return tarea;
        });
        setTareas(tareaActualizada);
    };

//para hacer una lista de tareas que se van a ir agregando
  return (
    <div>Lista de Tareas
        <ul>  
        {tareas.map(tarea => ( //con este map se recorre el array de tareas y se muestra en la lista
          <li key={tarea.id}> 
           <input /*con este input se marca si la tarea está completa o no */
              type="checkbox"
              checked={tarea.completed}
              onChange={() => toggleTareasCompletas(tarea.id)}
            />
            <span style={{ textDecoration: tarea.completed ? 'line-through' : 'none' }}> {/*con este span se tacha la tarea si está completa */}
              {tarea.text}
            </span>
            <button onClick={() => borrarTarea(tarea.id)}>Borrar</button> {/*con este botón se elimina la tarea */}
          </li>
        ))}
      </ul>
      <p>Tareas completadas: {tareasCompletas}</p> {/*para mostrar el número de tareas completadas */}
    </div>
  );
}

export default ListaTareas