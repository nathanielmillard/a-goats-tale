
export const getThatFox = () => {
  return fetch('https://randomfox.ca/floof/')
  .then(response => {
    if(response.ok){
      return response.json()
    } else {
      throw Error
    }
  })
  .then(response => {
    return response.image
  })
  .catch(error => {
    return 'Something went wrong getting your goat!'
  })
}
