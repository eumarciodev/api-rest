import conexeao from "../database/conexao.js"

class ClientesRepository {

  create(data) {
    const sql = "INSERT INTO clientes SET ?;"
    return new Promise((resolve, reject) => {
      conexeao.query(sql, data, (erro, resultado) => {
        if (erro) return reject('Não localizado!')

        const row = JSON.parse(JSON.stringify(resultado))
        return resolve(row)
      })
    })
  }

  findAll() {
    const sql = "SELECT * FROM db_barbearia.clientes;"
    return new Promise((resolve, reject) => {
      conexeao.query(sql, (erro, resultado) => {
        if (erro) return reject('Não localizado!')

        const row = JSON.parse(JSON.stringify(resultado))
        return resolve(row)
      })
    })
  }

  findById(id) {
    const sql = "SELECT * FROM db_barbearia.clientes WHERE id=?;"
    return new Promise((resolve, reject) => {
      conexeao.query(sql, id, (erro, resultado) => {
        if (erro) return reject('Não localizado!')

        const row = JSON.parse(JSON.stringify(resultado))
        return resolve(row)
      })
    })
  }

  delete(id) {
    const sql = "DELETE FROM db_barbearia.clientes WHERE id=?;"
    return new Promise((resolve, reject) => {
      conexeao.query(sql, id, (erro, resultado) => {
        if (erro) return reject('Não localizado!')

        const row = JSON.parse(JSON.stringify(resultado))
        return resolve(row)
      })
    })
  }

  update(id, clientes) {
    const sql = "UPDATE db_barbearia.clientes SET ? WHERE id=?;"
    return new Promise((resolve, reject) => {
      conexeao.query(sql, [id, clientes], (erro, resultado) => {
        if (erro) return reject('Não localizado!')

        const row = JSON.parse(JSON.stringify(resultado))
        return resolve(row)
      })
    })
  }

}

export default new ClientesRepository()