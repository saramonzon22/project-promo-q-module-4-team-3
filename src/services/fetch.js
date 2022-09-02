const getData = (data) => {
    return fetch('https://awesome-profile-cards.herokuapp.com/card/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/JSON'
        }
    }).then(response => response.json()).then(data => {
        return data;
    })
}

export default getData;