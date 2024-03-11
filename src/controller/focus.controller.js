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
        Focus.create(newData);
        res.send({ 'successful': true });
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