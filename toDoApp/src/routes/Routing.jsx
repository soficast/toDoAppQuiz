// Este archivo se encarga de manejar las rutas
import React from "react";

//importamos las rutas de react-router-dom
//BrowserRouter as Router: da contexto de enrutamiento. Routes: se usa para envolver a todos los componentes llamados Routes
//Route: se usa para definir una ruta.
//react-router se usa element=[Component />], el cual acepta un JSX, que es el componente que debe renderzar para la ruta especifica
import { BrowserRouter as Router, Route, } from "react-router-dom";

//se importan las rutas de cada componente
import ListaTareas from "../components/ListaTareas";
import AddTarea from "../components/AddTarea";
import Tarea from "../components/Tarea";

//aqui se define la funcion para el routing de las paginas
function Routing() {
  return (
    <Router>
      <Switch>
        <Route path="/tarea" component={Tarea} />
        <Route path="/addTarea" component={AddTarea} />
        <Route path="/" component={ListaTareas} />
      </Switch>
    </Router>
  );
}

export default Routing;

//este archivo luego se importa en App.js para que se pueda renderizar en la pagina web, y asi no se define cada ruta individualmente directamente