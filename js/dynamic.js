// les inputs
let nameInput = document.getElementById('name')
let emailInput = document.getElementById('email')
let btnSave = document.getElementById('btn-save')

let listItems = document.querySelector('.list-users')

// variables 
let users = [
    {
        "name" : "Josaphat",
        "email" : "jos@gmail.com"
    }
];

btnSave.addEventListener('click', function(e) {
    e.preventDefault();

    let newName = nameInput.value
    let newEmail = emailInput.value

    let newUser = {
        "name": newName,
        "email" : newEmail
    }

    users.push(newUser);

    console.log(users)
    loadUsers();
});


function loadUsers() {

    listItems.innerHTML = '';
    
    for(user of users) {
        let userItem = `
            <li>
                <div>
                    <h3>${user.name}</h3>
                    <p>${user.email}</p>
                </div>
            </li>
        `

        listItems.innerHTML += userItem

    }
}

loadUsers()
