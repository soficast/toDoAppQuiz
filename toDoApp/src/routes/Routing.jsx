import React from 'react'; //Para manejar los estados de las tareas con el hook de useState

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //Se importan las rutas y el route



import Home from '../pages/Home'; 


function Routing() { //aqui es la funcion del componente donde se definen las rutas


  return (
    <div>
      <Router>
        <Routes>
      
                        

                            <Route path="/" element={<Home/>}/>

                      
                            
        </Routes>
      </Router>
    </div>
  );
}

export default Routing