import { useState } from 'react' //Para manejar los estados de las tareas con el hook de useState
import AddTarea from './components/AddTarea'//Se importa AddTarea
import Routing from './routes/Routing';//Se importa Routing
import './App.css'

function App() { 

  return (
    <div>
        <Routing />
    </div>
);
};


export default App
