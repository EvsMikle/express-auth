module.exports = (sequelize, Sequelize) => {
    const Focus = sequelize.define('focus', {
        title: {
            type: Sequelize.STRING
        },
        content: {
            type: Sequelize.STRING
        }
    });

    return Focus;
};

