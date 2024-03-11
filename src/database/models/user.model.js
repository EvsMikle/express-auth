module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            unique: true
        },
        phone: {
            type: Sequelize.STRING
        },
        accessToken: {
            type: Sequelize.STRING
        },
        refreshToken: {
            type: Sequelize.STRING
        }
    });

    return User;
};

