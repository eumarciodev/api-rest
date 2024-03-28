import express from 'express';
import ClientesController from './app/controllers/ClientesController.js';

const app = express()

//para express ler body como um json
app.use(express.json())

//rotas
app.get('/dados', ClientesController.index)
app.get('/dados/:id', ClientesController.show)
app.post('/dados', ClientesController.store)
app.delete('/dados/:id', ClientesController.update)
app.put('/dados/:id', ClientesController.delete)

export default app
