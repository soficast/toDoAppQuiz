import React from 'react';

async function getTareas() {
    try {
        const response = await fetch('', { //actualizar la URL del endpoint
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

export { getTareas };

//////////LLAMADO POST//////////

async function postTareas(nombre,apellido,edad) {
    try {
     
        const tareaData = { 
            nombre,
            apellido,
            edad
        
        };



        const response = await fetch("http://localhost:3000/users", { //actualizar la URL del endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tareaData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export { postTareas }

//////////////LLAMADO UPDATE/////////////


async function updateTareas(nombre,apellido,edad,id) 
{
    try {
     
        const tareaData = { 
            nombre, 
            apellido,
            edad
        
        };


        


        const response = await fetch("http://localhost:3000/users/"+id, { //actualizar la URL del endpoint
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tareaData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export { updateTareas }



//////////////LLAMADO DELETE/////////////


async function deleteTarea(id) {
    try {
        const response = await fetch(`http://localhost:3000/users/${id}`, { //actualizar la URL del endpoint
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
        console.error('Error deleting user:', error);
        throw error;
    }
}

export { deleteTarea };