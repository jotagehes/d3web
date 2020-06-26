window.onload = function(e) {
    fetch(
        'https://jsonplaceholder.typicode.com/posts', {
        }).then(response => response.json())
    .then(data => { 
        console.log(data);
        data.forEach(post => {
            var table = document.getElementById("tabeladedados");
            var row = table.insertRow(-1);
            var idPostColuna = row.insertCell(0);
            var nameColuna = row.insertCell(1); 
            var emailColuna = row.insertCell(2); 
            var bodyColuna = row.insertCell(3); 
            idPostColuna.innerHTML = post.userId;
            nameColuna.innerHTML = post.id;
            emailColuna.innerHTML = post.title;
            bodyColuna.innerHTML = post.body;
        })
    }).catch(error => console.error(error))
}

function Enviar() {
    var form = document.getElementById('formpost');
    var data = {title: form.titulo.value,
                body: form.body.value,};
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then((response) => {
        if (response.ok) {
            alert('Post Criado : '+response.data)
        } else {
            return Promise.reject({ status: res.status, statusText: res.statusText });
        }

    })
    .then((data) => console.log(data))
    .catch(err => console.log('Error message:', err.statusText));
}