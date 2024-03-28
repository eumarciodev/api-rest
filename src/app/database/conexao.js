import mysql from 'mysql'

const conexeao = mysql.createConnection({
  host: '',
  port: '',
  user: '',
  database: '',
  password: ''
})

conexeao.connect()

export default conexeao