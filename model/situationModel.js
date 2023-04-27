module.exports = (sequelize, DataTypes) => {
  
    const Situation = sequelize.define("situation", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
            get() {
                return this.getDataValue('img') !== null? this.getDataValue('img').split(';'): [];
            },
            set(val) {
               this.setDataValue('img',val.join(';'));
            },
            
        },
        description: {
            type: DataTypes.TEXT,
        },
        langages: {
            type: DataTypes.STRING,
            get() {
                return this.getDataValue('langages') !== null? this.getDataValue('langages').split(';'): [];
            },
            set(val) {
               this.setDataValue('langages',val.join(';'));
            },
        },
        date: {
            type: DataTypes.DATE,
        },
        documents: {
            type: DataTypes.STRING,
            get(){
                return this.getDataValue('documents') !== null? this.getDataValue('documents').split(';'): [];
            },
            set(){
                this.setDataValue('documents', val.join(';'))
            }
        },
        productions: {
            type: DataTypes.STRING,
            get(){
                return this.getDataValue('productions') !== null? this.getDataValue('productions').split(';'): [];
            },
            set(){
                this.setDataValue('productions', val.join(';'))
            }
        },
        type: {
            type: DataTypes.STRING
        }

    })

    return Situation

}