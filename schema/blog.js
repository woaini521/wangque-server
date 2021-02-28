const moment = require("moment");
module.exports = function(sequelize, DataTypes) {
    const blog = sequelize.define('blog', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true
        },
        //文章名称
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'title'
        },
        //文章类别
        articleTypeId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'articleTypeId',
            defaultValue: '0' ,
        },
        // 访问量
        visitNum: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'visitNum',
            defaultValue:1
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'userId',
            defaultValue:'1'
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: 'content'
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
    return blog
}