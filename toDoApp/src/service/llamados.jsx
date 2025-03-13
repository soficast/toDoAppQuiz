

async function getTareas() {
    try {
        const response = await fetch('http://localhost:3000/tareas', { //actualizar la URL del endpoint******
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching tasks');
        }

        const tareas = await response.json();
        return tareas;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
}

//////////LLAMADO POST//////////

async function postTareas(tarea) {
    try {
     
        const tareaData = { 
            tarea
        
        };



        const response = await fetch("http://localhost:3000/tareas", { //actualizar la URL del endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tareaData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting task:', error);
        throw error;
    }
}


//////////////LLAMADO UPDATE/////////////


async function updateTareas(tarea, id) 
{
    try {
     
        const tareaData = { 
            tarea
        
        };


        


        const response = await fetch("http://localhost:3000/tareas/"+id, { //actualizar la URL del endpoint
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tareaData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update task:', error);
        throw error;
    }
}

//////////////LLAMADO DELETE/////////////


async function deleteTareas(id) {
    try {
        const response = await fetch(`http://localhost:3000/tareas/${id}`, { //actualizar la URL del endpoint
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting task with id ${id}`);
        }

        return { message: `Task with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error;
    }
}

export default { getTareas, postTareas, updateTareas, deleteTareas }; //se exportan las funciones para poder usarlas en otros archivos   