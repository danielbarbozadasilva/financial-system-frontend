export function getMoney(str) {
  const result = str?.replace('R$', '')
  return formatReal(parseInt(result?.replace(/[\D]+/g, '')))
}

export function calcSubTotal(value, current_price) {
  var resp = parseFloat(
    formatPrice(getMoney(current_price)) * value
  ).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
  return resp
}

export function calcTotal(subtotal) {
  const TAX_RATE = 5
  var price = parseFloat(formatPrice(subtotal))
  var resp = price + (price / 100) * TAX_RATE
  return resp.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
}

export function formatPrice(num) {
  return parseFloat(num?.replace(".","").replace(",",".").replaceAll(/\s+/g, '').replace("R$", ""))
}

export function formatReal(int) {
  let tmp = int + ''
  let neg = false
  if (tmp.indexOf('-') == 0) {
    neg = true
    tmp = tmp.replace('-', '')
  }

  if (tmp.length == 1) tmp = '0' + tmp

  tmp = tmp.replace(/([0-9]{2})$/g, ',$1')
  if (tmp.length > 6) {
    tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2')
  }

  if (tmp.length > 9) {
    tmp = tmp.replace(/([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, '.$1.$2,$3')
  }

  if (tmp.length > 12) {
    tmp = tmp.replace(
      /([0-9]{3}).([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g,
      '.$1.$2.$3,$4'
    )
  }

  if (tmp.indexOf('.') == 0) tmp = tmp.replace('.', '')
  if (tmp.indexOf(',') == 0) tmp = tmp.replace(',', '0,')

  return neg
    ? '-' + 'R$' + tmp.replace('NaN', '')
    : 'R$' + tmp.replace('NaN', '')
}
