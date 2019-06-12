const app = require ('express')

const app = express ()

function rootHandler (request, reponse) {
    reponse.send ('Hola')
}
app.get ('/', rootHandler)
app.listen (9000)