import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Patient = db.define('patients', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    illness: DataTypes.STRING,
    address: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Patient;

(async () => {
    await db.sync();
})();

