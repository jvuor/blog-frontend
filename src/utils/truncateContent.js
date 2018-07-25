const truncateContent = (content) => {
  try {
    if (content.length > 200) {
      return content.split(' ', 30).concat('(...)').join(' ')
    } else {
      return content
    }
  } catch (e) {
    return content
  }
}

export default truncateContent