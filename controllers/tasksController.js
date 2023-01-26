module.exports = {
    // lista de las tareas
    list : async (req,res) => {
        try {
            return res.status(200).json({ok: true, msg:'Listado de Tareas'})
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error en TASKS-LIST'
            })
        }
    },
    //  guarda las tareas
    store : async (req,res) => {
        try {
            return res.status(201).json({ ok : true, msg :'Se guardo la tarea'})
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Hubo un error en STORE-TASK'
            })
        }
    },
    //  detalle de la tarea
    detail : async (req,res) => {
        try {
            return res.status(200).json({ok : true, msg :'Detalle de Tarea'})
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Hubo un error en TASK-DETAIL'
            })
        }
    },
    // edito la tarea
    update : async (req,res) => {
        try {
            return res.status(201).json({ok : true, msg :'Se actualizo la tarea'})
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Hubo un error en TASK-UPDATE'
            })
        }
    },
    //  elimino tarea
    remove : async (req,res) => {
        try {
            return res.status(200).json({ ok : true, msg :'Se elimino la tarea'})
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Hubo un error en TASK-REMOVE'
            })
        }
    },
    //  cambio el estado de la tarea, pendiente, completado
    changeState : async (req,res) => {
        try {
            return res.status(200).json({ok : true, msg :'Tarea completada'})
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Hubo un error en CHANGE-STATE'
            })
        }
    },
}