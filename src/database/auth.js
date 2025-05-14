import sequelize from "./db.js";

const authDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

authDB();

export default authDB;