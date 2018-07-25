const stripMarkdown = (content) => {
  const re = /[[\]@#$%^&*_]/g
  return content.replace(re, '')
}

export default stripMarkdown