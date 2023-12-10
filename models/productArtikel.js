import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.js";

const Artikel = sequelize.define("Artikel", {
  Judul: DataTypes.STRING,
  Deskripsi: DataTypes.STRING,
  Gambar: DataTypes.STRING,
  TglTerbit: DataTypes.DATE,
});

export default Artikel;
