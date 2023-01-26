// trae los perfiles de usuarios
module.exports = {
    // perfil del usuario
    profile : async(req,res) => {
        try {
            return res.status(200).json({ok: true, msg:'Perfil de Usuario'})
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error en PERFIL'
            })
        }
    }
}