fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(
        (response) => { return response.json(); }
        //response => response.json()
        // response => response.json() 
        // no need for round brackets
        // no need for return statement
        // Just another way of writing things
).then(
    data => {
        const container = document.getElementById('container');
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
       <h3>${data.title}</h3>
       <h3>${data.id}</h3>
       <h3>${data.userId}</h3>
       <p>${data.body}</p>
     `;
        container.appendChild(postDiv);
    }
).catch(
    error => {
        console.error('Error fetching:', error);
    }
);