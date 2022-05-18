const getData = () => {
    return fetch('https://test-c3301-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
            return response.json()
        })
}

export default getData