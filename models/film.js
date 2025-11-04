module.exports = (sequelize, DataTypes) => {
  const Film = sequelize.define("Film", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nama_film: {
        type: DataTypes.STRING,
    },
    Description: {
        type: DataTypes.TEXT,
    },
    Sutradara: {
        type: DataTypes.STRING,
    },
    Tahun_Terbit: {
        type: DataTypes.INTEGER,
    },
    Genre : {
        type: DataTypes.STRING,
    }
});

  return Film;
};