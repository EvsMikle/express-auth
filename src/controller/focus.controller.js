const db = require("../database/models");
const Focus = db.focus;

exports.save = async (req, res) => {
    // Do something with the form data
    if (!req.body.title, !req.body.content) {
        res.status(400).send({
            message: 'Please provide all the fields.'
        });
        return;
    }

    const newData = {
        title: req.body.title,
        content: req.body.content
    }

    if (req.body.id === 0) {
        const success = Focus.create(newData);
        res.send({ 'success': success });
    }else{
        const success = Focus.update({'title': req.body.title, 'content': req.body.content}, { where: {'id': req.body.id} });
        res.send({ 'success': success });
    }
}

exports.getData = async (req, res) => {
    const limit = req.body.pageid * 6;
    try {
        const data = await Focus.findAll({ limit: limit, order: [['id', 'DESC']] });
        return res.json(data);
    }
    catch (ex) {
        throw ex;
    }
}

exports.getRow = async (req, res) => {
    const id = req.body.id;
    if(id === 0) {
        return res.json({'title': '', 'content': ''});
    }

    try {
        const row = await Focus.findByPk(id);
        return res.json(row);
    }
    catch (ex) {
        throw ex;
    }
}

exports.delData = async (req, res) => {
    const id = req.body.id;
    try {
        const success = await Focus.destroy({ where: { 'id': id } });
        return res.json({'success': success});
    }
    catch (ex) {
        throw ex;
    }
}

module.exports = exports;