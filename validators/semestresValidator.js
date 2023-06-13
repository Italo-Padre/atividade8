const semestresValidator = {
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
    data_inicio:{
        required:'O campo é obrigátorio',
    },
    data_fim:{
        required:'O campo é obrigátorio',
    }
}
export default semestresValidator