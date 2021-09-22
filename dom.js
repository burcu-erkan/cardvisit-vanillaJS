const button = document.querySelector('.random');
const nameP = document.querySelector('.info-title');
const title = document.querySelector('.info-content');
const icons = document.querySelector('ul');
const image = document.querySelector('.profile-image');
let userData;
let prevActive = icons.children[0];

function getData() {
    fetch('https://randomuser.me/api/?gender=female')
        .then(response => response.json())
        .then(function (data) {
            userData = data.results[0]

        })
}

button.addEventListener('click', function () {
    getData()
    setTimeout(function () {
        console.log(userData)
        image.src = userData.picture.large;
        nameP.innerText = 'My name is';
        title.innerText = `${userData.name.first} ${userData.name.last}`
    }, 500)
})

icons.addEventListener('click', function (event) {
    let element = event.target.parentElement;
    changeClass(element)
    displayInfo(element.className)
})

function changeClass(currentEl) {
    let newClass = prevActive.className.split(" ")[0];
    prevActive.className = newClass;
    currentEl.className += ' active';
    prevActive = currentEl;

}

function displayInfo(string) {
    switch (string) {
        case 'name active':
            nameP.innerText = 'My name is';
            title.innerText = `${userData.name.first} ${userData.name.last}`;
            break;
        case 'email active':
            nameP.innerText = 'My email is';
            title.innerText = `${userData.email} `;
            break;
        case 'date active':
            nameP.innerText = 'My age is';
            title.innerText = `${userData.dob.age}`;
            break;
        case 'address active':
            nameP.innerText = 'My street is';
            title.innerText = `${userData.location.street.name} }`;
            break;
        case 'phone active':
            nameP.innerText = 'My phone is';
            title.innerText = `${userData.phone}`;
            break;
            case 'password active':
                nameP.innerText = 'My password is';
                title.innerText = `${userData.login.password}`;
                break;
    }
}