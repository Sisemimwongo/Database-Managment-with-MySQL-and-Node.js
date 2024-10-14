const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('db', 'root', 'Congrats@2024', {
    host: 'localhost',
    dialect: 'mysql'
});

// Import all models
const User = require('./user')(sequelize, DataTypes);
const Expense = require('./expense')(sequelize, DataTypes);
const Category = require('./category')(sequelize, DataTypes);
const PaymentMethod = require('./paymentMethod')(sequelize, DataTypes);
const Budget = require('./budget')(sequelize, DataTypes);

// Define associations
User.hasMany(Expense, { foreignKey: 'user_id' });
Expense.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Category, { foreignKey: 'user_id' });
Category.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(PaymentMethod, { foreignKey: 'user_id' });
PaymentMethod.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Budget, { foreignKey: 'user_id' });
Budget.belongsTo(User, { foreignKey: 'user_id' });

Category.hasMany(Expense, { foreignKey: 'category_id' });
Expense.belongsTo(Category, { foreignKey: 'category_id' });

Category.hasMany(Budget, { foreignKey: 'category_id' });
Budget.belongsTo(Category, { foreignKey: 'category_id' });

// Export models and sequelize connection
module.exports = {
    sequelize,
    User,
    Expense,
    Category,
    PaymentMethod,
    Budget
};
