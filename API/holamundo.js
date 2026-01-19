const express = require('express');
const mongoose = require('mongoose');
const Alumno = require('./alumnos.model');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send({ message: '¡Hola, Mundo!' });
});

app.get('/alumnos', (req, res) => {
    Alumno.find()
        .then((alumnos) => {
            res.send(alumnos);
        })
        .catch((error) => {
            res.status(500).send({ message: 'Error al obtener los alumnos', error });
        });
});

app.get('/alumnos/:id', (req, res) => {
    const alumnoId = req.params.id;
    Alumno.findById(alumnoId)
        .then((alumno) => {
            if (alumno) {
                res.send(alumno);
            } else {
                res.status(404).send({ message: 'Alumno no encontrado' });
            }
        })
        .catch((error) => {
            res.status(500).send({ message: 'Error al obtener el alumno', error });
        });
});

app.post('/alumnos', (req, res) => {
    const receivedData = req.body;
    Alumno.create(receivedData)
        .then(() => {
            res.send({ message: 'Datos recibidos y guardados en la base de datos', data: receivedData });   
        })
        .catch((error) => {
            res.status(500).send({ message: 'Error al guardar los datos', error });
        });
});

app.delete('/alumnos/:id', (req, res) => {
    const alumnoId = req.params.id;
    Alumno.findByIdAndDelete(alumnoId)
        .then((alumno) => {
            if (alumno) {       
                res.send({ message: 'Alumno eliminado correctamente' });
            } else {
                res.status(404).send({ message: 'Alumno no encontrado' });
            }   
        })
        .catch((error) => {
            res.status(500).send({ message: 'Error al eliminar el alumno', error });
        });
});


mongoose.connect('mongodb://localhost:27017/mi_basededatos').then(() => {
    console.log('Conexión a la base de datos establecida');
}).catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});