import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database/db.js';
import syncDB from '../database/sync.js';

const Url = sequelize.define('Url', {
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  originalUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Url;
