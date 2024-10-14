module.exports = (sequelize, DataTypes) => {
    const Expense = sequelize.define("Expense", {
        expense_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users', // references User table
                key: 'user_id'
            }
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'categories', // references Category table
                key: 'category_id'
            }
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    }, {
        tableName: 'expenses',
        timestamps: true,
        underscored: true
    });

    return Expense;
};
