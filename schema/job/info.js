const moment = require("moment");
module.exports = function(sequelize, DataTypes) {
    const Info = sequelize.define('job_info', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true
        },
        avtor_url: {
            type: DataTypes.STRING,
            field: 'avtor_url'
        },
        birdday: {
            type: DataTypes.STRING,
            field: 'birdday'
        },
        email: {
            type: DataTypes.STRING,
            field: 'email'
        },
        phone: {
            type: DataTypes.STRING,
            field: 'phone'
        },
        blog_url: {
            type: DataTypes.STRING,
            field: 'blog_url'
        },
        about: {
            type: DataTypes.TEXT,
            field: 'about'
        },

        bg_url: {
            type: DataTypes.STRING,
            field: 'bg_url'
        },
        
        // 创建时间
        createdAt: {
            type: DataTypes.DATE,
            get () {
                // console.log(this.getDataValue('created_time'))
                return this.getDataValue('createdAt') ? moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss') : null;
              }
        },
        // 更新时间
        updatedAt: {
            type: DataTypes.DATE,
            get () {
                // console.log(this.getDataValue('created_time'))
                return this.getDataValue('updatedAt') ? moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss') : null;
              }
        }
    }, {
        /**
         * 如果为true，则表示名称和model相同，即user
         * 如果为fasle，mysql创建的表名称会是复数，即users
         * 如果指定的表名称本身就是复数，则形式不变
         */
        freezeTableName: true
    });

    return Info

}