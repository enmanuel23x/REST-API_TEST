const EmailValidator = require("email-validator");
const { check, isNumeric, createClient } = require('../utils/utils')
module.exports = {
    getBalance: async (req, res) =>{
        const { phone, doc } =req.body
        if(check([phone, doc])){
            const client = await createClient('/getBalance');
            client.getBalanceAsync(req.body, function (err, response) {
                if (err) {
                    res.status(500).json({error: true, message: "¡No se pudo realizar el registro, por favor intente de nuevo!"})
                }else{
                    res.status(response.status).json({message: response.message})   
                }  
            });
        }else{
            res.status(400).json({error: true, message: "¡No suministro los datos completos!"})
        }
    },
    addClient: async (req, res) =>{
        const { phone, doc, name, email } = req.body
        if(check([phone, doc, name])){
            if(EmailValidator.validate(email)){
                const client = await createClient('/addClient');
                client.addClientAsync(req.body, function (err, response) {
                    if (err) {
                        res.status(500).json({error: true, message: "¡No se pudo realizar el registro, por favor intente de nuevo!"})
                    }else{
                        res.status(response.status).json({message: response.message})   
                    }  
                });
            }else{
                res.status(400).json({error: true, message: "¡El correo suministrado no tiene un formato valido!"})
            }
        }else{
            res.status(400).json({error: true, message: "¡No suministro los datos completos!"})
        }
    },
    rechargeWallet: async (req, res) =>{
        const { phone, doc, value } =req.body
        if(check([phone, doc])){
            if(isNumeric(value)){
                const client = await createClient('/rechargeWallet');
            client.rechargeWalletAsync(req.body, function (err, response) {
                if (err) {
                    res.status(500).json({error: true, message: "¡No se pudo realizar el registro, por favor intente de nuevo!"})
                }else{
                    res.status(response.status).json({message: response.message})   
                }  
            });
            }else{
                res.status(400).json({error: true, message: "¡El monto suministrado no es valido!"})
            }
        }else{
            res.status(400).json({error: true, message: "¡No suministro los datos completos!"})
        }
    },
}