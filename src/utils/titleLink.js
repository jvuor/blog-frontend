const titleLink = (title, id) => {
  return `/${id}/${title.split(' ').join('-')}`
}

export default titleLink