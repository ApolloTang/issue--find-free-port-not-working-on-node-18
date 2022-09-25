var sh = require('sh');
const findFreePort = require('find-free-port')

const PORT_LOWER = 9000
const PORT_UPPER = 9010

findFreePort(PORT_LOWER, PORT_UPPER,  function(err, freePort){
  if (err) {
    console.log(err)
    console.log(`Cannot find free port between ${PORT_LOWER}, ${PORT_UPPER}`)
    return
  }
  if (freePort) {
    sh(`http-server  -p ${freePort}`)
  }
})


