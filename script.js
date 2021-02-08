const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const loginBtn = document.querySelector('#loginBtn');
const list = document.querySelector('#list');

loginBtn.addEventListener('click', function (e) {
    e.preventDefault;

    if (title.value == '' && author.value == '' && year.value == '') {
        alert('Please Chack Yout Input');
    } else {
        const newRow = document.createElement('tr');
        list.appendChild(newRow);
        //creat new title
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('year').value = '';


    }

});
