const salasValidator = {
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
    capacidade:{
        required:'O campo é obrigátorio',
        max:{
            value: 70,
            message: 'Capacidade máxima de 70 pessoas'
          },
        min:{
            value: 10,
            message:'Mínimo de 10 pessoas por sala'
        }
    },
    tipo:{
        required:'O campo é obrigátorio',
    }
}

export default salasValidator