const Sequelize = require("sequelize");
const connection = require("../database/database")

// define nome da table e logo em seguida os campos
const Pessoa = connection.define('pessoa', {
  id:{
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  nome:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  email:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  endereco:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  sexo:{
    type: Sequelize.STRING, 
    allowNull: false,
  },
  ic_ativo:{
    type: Sequelize.BOOLEAN,
    allowNull: false, 
    defaultValue: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
  }
});

// syncroniza com o banco e cria a tabela, o param force: false, impede que ele 'recrie' se caso ela já exista.
Pessoa.sync({force: false}).then(() => {
  console.log('Tabela Pessoa syncronizada com sucesso!');
})

module.exports = Pessoa;