const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'noName', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'Get API - Controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPut = (req, res = response) => {
    //Dato extraido desde la ruta
    const id = req.params.id;
    res.json({
        msg: 'Put API - Controlador',
        id
    });
}
const usuariosPost = (req, res = response) => {
    //Desestructuracion del body
    const { nombre, edad } = req.body;

    res.json({
        msg: 'Post API - Controlador',
        nombre,
        edad
    });
}
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Delete API - Controlador'
    });
}
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'Patch API - Controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}