const moment = require("moment");
module.exports = function(sequelize, DataTypes) {
    const Msg = sequelize.define('message', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true
        },
        //评价内容
        content: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'content'
        },
        //对应文章id
        article_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'article_id',
        },
        // 评价人
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'user_id'
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
    return Msg
}