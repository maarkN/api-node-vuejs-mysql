const Pessoa = require('../models/Pessoa')

class pessoaController {
  //---------------------------------------------------------------------------------------------
  async store(req, res){
    const pessoaExist = await Pessoa.findOne({ where : {email: req.body.email}});
    if(pessoaExist){
      return res.status(400).json({error :'Usuario ja existente'});
    }
    await Pessoa.create(req.body)
      .then(response => {
        console.log('RESPONSE ' + response)
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error)
        res.status(400).send({
          message: 'Falha ao realizar cadastro'
        });
      })
  }
//--------------------------------------------------------------------------------------------
  async update(req, res){
    await Pessoa.findByPk(req.params.id)
      .then(pessoa => {
        pessoa.update(req.body)
          .then(response => {
            res.status(200).json(response);
          })
      })
      .catch(error => {
        console.log(error)
        res.status(400).send({
          message: 'Falha ao atualizar cadastro'
        });
      })
  }
  //------------------------------------------------------------------------------------------
  async get(req, res){
    /** se tiver id na req findByPk se nao findAll */
    if(req.params.id) {
      await Pessoa.findByPk(req.params.id)
        .then(response => {
          if(response) {
            res.status(200).json(response)
          } else {
            res.status(400).send({
              message: 'Não foi encontrado pessoa com o ID informado'
            })
          }
        })
        .catch(error => {
          console.log(error)
          res.status(500).send({
            message: 'Falha ao processar sua requisição'
          });
        })
    } else {
      await Pessoa.findAll()
      .then(response => {
        res.status(200).send(response)
      })
      .catch(error => {
        console.log(error)
        res.status(500).send({
          message: 'Falha ao processar sua requisição'
        });
      })
    }
  }
  //----------------------------------------------------------------------------------------
  async delete(req, res){
    await Pessoa.findByPk(req.params.id)
      .then(pessoa => {
        if(pessoa) {
          pessoa.destroy().then(
            res.status(204).send({message: 'deletado com sucesso'})
          )
        }
        res.status(400).send({message:'usuário não encontrado'})
      })
      .catch(error => {
        console.log(error)
        res.status(401).send({message:'falha ao deletar'})
      });
  }
}
module.exports = new pessoaController()
