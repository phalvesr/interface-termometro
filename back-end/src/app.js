const { response, request } = require('express');


function iniciar(pathPortaUSB) {
  const app = require('express')();
  const cors = require('cors')
  const SerialPort = require('serialport');
  const localPort = 3333;
  const port = new SerialPort(pathPortaUSB)
  const Delimiter = require('@serialport/parser-delimiter')
  let valorAEnviar = 0;

  // SerialPort.list().then(console.log)
  const parser = port.pipe(new Delimiter({ delimiter: '\n' }))
  parser.on('data', data => valorAEnviar = data.toString())
  

  app.use(cors())

  app.get('/teste', (request, response) => {
    const obj = {
      message: 'acessando normal',
    }
    return response.json(obj)
  })

  app.get('/teste-api', (request, response) => {
    return response.json({ nome: 'Pedro', altura: valorAEnviar})
  })

  app.listen(localPort, () => console.log(`Rodando na porta ${localPort}`))
}

module.exports = { iniciar }
