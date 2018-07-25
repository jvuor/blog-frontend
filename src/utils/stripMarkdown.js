const stripMarkdown = (content) => {
  const re = /[a-zA-Z]+/g
  return content.match(re).join(' ')
}

export default stripMarkdown