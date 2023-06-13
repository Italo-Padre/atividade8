const cursoValidator = {
    nome: {
        required:'O campo é obrigátorio',
    minLength:{
      value: 3,
      message: 'Minimo 3 caracteres'
    },
      maxLength:{
        value: 10,
        message: 'Maximo 10 caracteres'
      }
    },
    duracao:{
        required:'O campo é obrigátorio',
       
          maxLength:{
            value: 2,
            message: 'Maximo 2 caracteres'
          },
          max:{
            value:12,
            message: 'O valor maximo e 12'
          },
          min:{
            value:5,
            message: 'O valor minimo e 5'
          }
      },
      modalidade:{
        required:'O campo é obrigátorio',
       
          maxLength:{
            value: 20,
            message: 'Maximo 20 caracteres'
          }
      }

}
export default cursoValidator