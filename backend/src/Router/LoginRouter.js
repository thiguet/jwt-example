const Routable = require('./Interface/Routable.js');
const jwt = require('jsonwebtoken');
class LoginController extends Routable {
    registerRoute(app) { 
        app.post('/login', (req, res, next) => {
            res.header('Access-Control-Allow-Origin','*');
            const loginData = req.body;
            if( loginData.user === 'teste' && 
                loginData.pass === '1') {
                const id = 1; //esse id viria do banco de dados
                let token = jwt.sign({ id }, process.env.SECRET, {
                    expiresIn: 300 // expires in 5min
                });
                res.status(200).send({ auth: true, token: token, message: 'Login feito com sucesso !'});
            } else {
                res.status(500).send({ auth: false, message: 'Login inválido!'});
            }
        });
        
        app.get('/logout', function(req, res) {
            res.status(200).send({ auth: false, token: null });
        });
    }
}

module.exports = new LoginController ();
