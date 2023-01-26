// api de los proyectos
module.exports = {
    // traigo la lista de los proyectos
    list : async (req,res) => {
        try {
            return res.status(200).json({ok: true, msg:'Lista de Proyectos'})
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error en PROJECTS-LIST'
            })
        }
    },
    // guardo los proyectos
    store : async (req,res) => {
        try {
            return res.status(201).json({ ok: true, msg: 'El proyecto fue guardado con éxito'})
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error en STORE-PROJECT'
            })
        }
    },
    // muestro los detalles del proyecto
    detail : async (req,res) => {
        try {
            return res.status(200).json({ok: true, msg:'Detalle del Proyecto'})
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error en PROJECT-DETAIL'
            })
        }
    },
    // editor del proyecto
    update : async (req,res) => {
        try {
            return res.status(201).json({ok: true, msg: 'Se actualizo el proyecto con éxito'})
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error en PROJECT-UPDATE'
            })
        }
    },
    // elimino el proyecto
    remove : async (req,res) => {
        try {
            return res.status(200).json({ok: true, msg: 'Se elimino el proycto con éxito'})
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error en PROJECT-REMOVE'
            })
        }
    },
    // agrego un colaborador
    addCollaborator : async (req,res) => {
        try {
            return res.status(200).json({ok: true, msg:'Se agrego el colaborador con éxito'})
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error en COLLABORATOR-ADD'
            })
        }
    },
    // elimino el colaborador
    removeCollaborator : async (req,res) => {
        try {
            return res.status(200).json({ok: true, msg:'Se elimino el colaboradoe con éxito'})
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error en COLLABORATOR-REMOVE'
            })
        }
    },
}