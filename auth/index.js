const express = require ('express')
const router = express.Router ()

const handlerEjemplo = (require, response) => {  
    response.send ("hello word")
}
router.get ('/login', function (req, res){
    res.send ('login')
})

router.get ('/logout', function (req, res){
    res.send('logout')
})

router.get ('/recovery', function (req, res){
    res.send ('hello word')
})

module.exports = router