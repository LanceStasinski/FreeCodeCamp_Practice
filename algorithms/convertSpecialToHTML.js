function convertHTML(str) {
  const NEW_ARR = []
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i)
    let symbol = char === '>' ? '&gt;'
    : char === '<' ? '&lt;'
    : char === '&' ? '&amp;'
    : char === '"' ? '&quot;'
    : char === '\'' ? '&apos;'
    : char;

    NEW_ARR.push(symbol)
  }
  return NEW_ARR.join('')
}
