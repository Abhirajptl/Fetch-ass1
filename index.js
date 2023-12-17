let button = document.getElementById('btn');
let container = document.getElementById('container');
let data = [];


button.addEventListener('click',()=>{

    fetch("https://reqres.in/api/users")
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        let data = res.data;
        console.log((data));
        displayData(data);
    
    })
    
})

function displayData(data){
    data.forEach((user) => {
        let div = document.createElement('div');

        let avatar = document.createElement('img');
        avatar.src = user.avatar;

        let name = document.createElement('p');
        name.innerText = `${user.first_name} ${user.last_name}`;

        let email = document.createElement('p');
        email.innerText = user.email;

        div.append(avatar,name,email);
        container.appendChild(div);

    });
}
