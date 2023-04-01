let courTemp = `
    <div class="cours-item">
        <img src="images/cours.png" alt="">
        <h2>HTML</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
        <p>5 heures</p>
    </div>
`

let coursListView = document.querySelector('.cours-list');

if(coursListView) {
   
    fetch('js/cours.json')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        let courses = data;

        for (const cours of courses) {
            coursListView.innerHTML += `
                <div class="cours-item">
                    <img src="${cours.image}" alt="">
                    <h2>${cours.name}</h2>
                    <p>${cours.description}</p>
                    <p>${cours.time} heures</p>
                </div>
            `
        }
    });
}


let listView = document.querySelector('.name-list');

let saveButton = document.querySelector('button');
let inputName = document.getElementById('name')

saveButton.addEventListener('click', function(e) {
    e.preventDefault()

    let name = inputName.value

    if(name != '' && name != null) {
        let item = document.createElement('li');
        item.innerText = name

        listView.appendChild(item)

        inputName.value = ''
    }

})
