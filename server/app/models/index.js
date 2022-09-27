const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  operatorsAliases: 0,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.refreshToken = require("./refreshToken.js")(sequelize, Sequelize);
db.resume = require("./resume/resume.model.js")(sequelize, Sequelize);
db.resumeInfo = require("./resume/resumeInfo.model.js")(sequelize, Sequelize);
db.resumeWork = require("./resume/resumeWork.model.js")(sequelize, Sequelize);
db.resumeProject = require("./resume/resumeProject.model.js")(sequelize, Sequelize);
db.resumeEdu = require("./resume/resumeEdu.model.js")(sequelize, Sequelize);
db.resumeExtra = require("./resume/resumeExtra.model.js")(sequelize, Sequelize);

db.user.hasOne(db.refreshToken, {
  foreignKey: "userId",
  targetKey: "id"
});

db.refreshToken.belongsTo(db.user, {
  foreignKey: "userId",
  targetKey: "id"
});

db.resumeInfo.belongsTo(db.resume, { as: "info" });
db.resumeWork.belongsTo(db.resume, { as: "work" });
db.resumeProject.belongsTo(db.resume, { as: "project"});
db.resumeEdu.belongsTo(db.resume, { as: "education"});
db.resumeExtra.belongsTo(db.resume, { as: "extra"});

module.exports = db;