import ClientesRepository from '../repositories/ClientesRepository.js';

class clientesController {

  async index(req, res) {
    const result = await ClientesRepository.findAll()
    res.json(result)
  }

  async show(req, res) {
    const id = req.params.id
    const result = await ClientesRepository.findById(id)
    res.json(result)
  }

  async store(req, res) {
    const data = req.body
    const result = await ClientesRepository.create(data)
    res.json(result)
  }

  async delete(req, res) {
    const id = req.params.id
    const result = await ClientesRepository.delete(id)
    res.json(result)
  }

  async update(req, res) {
    const id = req.params.id
    const clientes = req.body
    const result = await ClientesRepository.update(id, clientes)
    res.json(result)
  }

}

export default new clientesController()