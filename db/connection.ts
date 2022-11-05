import {Sequelize} from 'sequelize'

const db = new Sequelize('node','root','Perroviejo_1', {
    host:'localhost',
    dialect: 'mysql',

})

export default db;