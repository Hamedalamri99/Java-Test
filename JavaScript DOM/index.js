fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        //console.log(response);
        
        return response.json();
    }).then(
        data => {
            console.log("This is data: ".concat(JSON.stringify(data)))
        }
    )
    .catch(error => console.error(error));