export function isNotValid(form, formValidate) {
  const inputs = ['bank', 'cpf']
  
  const invalid = (label) =>
    !Object.keys(form).includes(label) || form[label].length === 0

  const validate =
    Object.values(formValidate).filter((item) => item !== '').length > 0

  return inputs.some((item) => invalid(item)) || validate
}

export function fieldValidate(name, value) {
  let message = ''

  switch (name) {
    case 'bank':
      if (value === 'selecione') {
        message += 'Não pode ser vazio!'
      }
      break

    case 'cpf':
      let cpf = value
        .trim()
        .replaceAll('-', '')
        .replaceAll('_', '')
        .replaceAll('.', '')
      if (cpf.length < 11) {
        message += 'CPF inválido!'
      }
      break
  }

  return message
}
