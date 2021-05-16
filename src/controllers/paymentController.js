const { check, isNumeric, createClient } = require('../utils/utils')

module.exports = {
    generatePay: async (req, res) =>{
        const { phone_src, doc_src, value, phone_dest, doc_dest } =req.body
        if(check([phone_src, doc_src, value, phone_dest, doc_dest])){
            if(isNumeric(value)){
                const client = await createClient('/generatePay');
                client.generatePayAsync(req.body, function (err, response) {
                    if (err) {
                        res.status(500).json({error: true, message: "¡No se pudo realizar el registro, por favor intente de nuevo!"})
                    }else{
                        res.status(response.status).json({...response})  
                    }
                });
            }else{
                res.status(400).json({error: true, message: "¡El monto suministrado no es valido!"})
            }
        }else{
            res.status(400).json({error: true, message: "¡No suministro los datos completos!"})
        }
    },
    confirmPayment: async (req, res) =>{
        const { token } =req.body
        if(check([token])){
            const client = await createClient('/confirmPayment');
                client.confirmPaymentAsync(req.body, function (err, response) {
                    if (err) {
                        res.status(500).json({error: true, message: "¡No se pudo confirmar el pago, por favor intente realizar el pago nuevamente!"})
                    }else{
                        res.status(response.status).json({message: response.message})   
                    }
                });
        }else{
            res.status(400).json({error: true, message: "¡No suministro los datos completos!"})
        }
    }
}