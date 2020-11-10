
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

export const getThatGoat = () => {
  return fetch('https://fe-cors-proxy.herokuapp.com', {
  headers: {
    "Target-URL": "https://placegoat.com/200"
  }
})
  .then(response => response)
  .catch(error => console.error(error))
}
