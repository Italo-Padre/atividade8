const alunosValidator = {
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
    cpf:{
        required:'O campo é obrigátorio',
       
          maxLength:{
            value: 11,
            message: 'Insira um CPF valido'
          },
          minLength:{
            value: 11,
            message: 'Insira um CPF valido'
          }
      },
      matricula:{
        required:'O campo é obrigátorio',
       
          maxLength:{
            value: 20,
            message: 'Maximo 20 caracteres'
          },
      },
      email:{
        required:'O campo é obrigátorio',
        
      },
      cep:{
        required:'O campo é obrigátorio',
        maxLength:{
          value: 9,
          message: 'Insira um CEP valido'
        },
        minLength:{
          value: 9,
          message: 'Insira um CEP valido'
        }
      },
      telefone:{
        required:'O campo é obrigátorio',
    
        minLength:{
          value: 8,
          message: 'Insira um telefone valido'
        }
      },
      logradouro:{
        required:'O campo é obrigátorio'
      },
      complemento:{
        required:'O campo é obrigátorio'
      },
      numero:{
        required:'O campo é obrigátorio'
      },
      bairro:{
        required:'O campo é obrigátorio'
      },

}
export default alunosValidator