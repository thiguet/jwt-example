const Routable = require('./Interface/Routable.js');

class LoginController extends Routable {
    registerRoute(app) { 
        app.post('/login', (req, res, next) => {
            res.header('Access-Control-Allow-Origin','*');
            if(req.body.user === 'teste' && req.body.pwd === '1'){
                const id = 1; //esse id viria do banco de dados
                var token = jwt.sign({ id }, process.env.SECRET, {
                    expiresIn: 300 // expires in 5min
                });
                res.status(200).send({ auth: true, token: token });
            }
            
            res.status(500).send('Login inválido!');
        });
        
        app.get('/logout', function(req, res) {
            res.status(200).send({ auth: false, token: null });
        });
    }
}

module.exports = new LoginController ();
