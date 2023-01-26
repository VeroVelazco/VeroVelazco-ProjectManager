// autenticacion del sitio

module.exports = {
     // se creo un nuevo registro
    register : async (req, res) => {
        try {
            return res.status(201).json({ ok: true, msg: 'El usuario se registro con éxito' })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false, 
                msg: error.message || 'Hubo un error en REGISTER'
            })
        }
    },
    // logeo del usuario
    login : async (req, res) => {
        try {
            return res.status(200).json({ ok: true, msg: 'El usuario se logeo con éxito' })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false, 
                msg: error.message || 'Hubo un error en LOGIN'
            })
        }
    },
    // el email llego a destino y esta checkeado
    checked : async (req, res) => {
        try {
            return res.status(200).json({ ok: true, msg: 'Usuario checkeado' })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false, 
                msg: error.message || 'Hubo un error en CHECKED'
            })
        }
    },
    // envia el token 
    sendToken : async (req, res) => {
        try {
            return res.status(200).json({ ok: true, msg: 'Token enviado' })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false, 
                msg: error.message || 'Hubo un error en SEND-TOKEN'
            })
        }
    },
    // verifica el token
    verifyToken : async (req, res) => {
        try {
            return res.status(200).json({ ok: true, msg: 'Token verificado' })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false, 
                msg: error.message || 'Hubo un error en VERIFY-TOKEN'
            })
        }
    },
    //  cambia la contraseña
    changePassword : async (req, res) => {
        try {
            return res.status(200).json({ ok: true, msg: 'Se actualizo el password con éxito' })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false, 
                msg: error.message || 'Hubo un error en CHANGE-PASSWORD'
            })
        }
    },
}