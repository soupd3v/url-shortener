import sequelize from "./db.js";
import authDB from "./auth.js";

const syncDB = async () => {
    try {
        await sequelize.sync();
        console.log("Database synced successfully");
        } catch (error) {
        console.error("Error syncing database: ", error);
    }
}

syncDB();


export default syncDB