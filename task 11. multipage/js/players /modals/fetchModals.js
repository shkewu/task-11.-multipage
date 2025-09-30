const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
.then(response => response.json())
// нужно разобраться, как получить с сервера ответ в виде объекта