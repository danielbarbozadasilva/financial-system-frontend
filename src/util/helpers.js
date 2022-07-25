import queryString from 'query-string'

export const parsedToQuery = (data) => queryString.stringify(data)

export function colorGenerate(financial) {
    const color = []
    for (let i = 0; i < financial.length; i++) {
      let r = Math.random() * 255
      let g = Math.random() * 255
      let b = Math.random() * 255
      color.push(`rgba(${r}, ${g}, ${b}, ${0.3})`)
    }
    return color
  }
