import React, { useState, useEffect } from 'react'; //Para manejar los estados de las tareas con el hook de useState
import AddTarea from '../components/AddTarea'; //Se importa AddTarea componente
import ListaTareas from '../components/ListaTareas'; //Se importa ListaTareas componente
import llamados from '../service/llamados'; //Se importan llamados

function Home() { //aqui es la funcion del componente donde se definen los estados para las tareas
  const [tareas, setTareas] = useState([]); //se define el estado de las tareas y se setea para que se actualice el estado

  useEffect(() => { //se actualiza el estado de las tareas
    const fetchTareas = async () => { //async se espera a que se carguen las tareas
      try { //con este try se intenta cargar las tareas
        const tareas = await llamados.getTareas();//espera a que se carguen las tareas
        setTareas(tareas);
      }
      catch (error) {//atrapa el error
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTareas();
  }, []);

  return (//para mostrar una lista de tareas que se van a ir agregando
    <div>
       <h1>To Do List</h1>
        <AddTarea setTareas={setTareas} tareas={tareas} />
        <ListaTareas tareas={tareas} setTareas={setTareas}/>
    </div>
  )
}

export default Home