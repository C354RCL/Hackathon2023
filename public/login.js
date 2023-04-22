window.onload = init;

function init() {
    document.querySelector('#registrarse').addEventListener('click', function(){
        window.location.href = './signin.html';
    });
    
    document.querySelector('#submit').addEventListener('click', login);
}

function login() {
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;

    console.log(email, password);

    axios({
        method: 'post',
        url: 'http://localhost:3000/login',
        data: {
            email,
            password
        }
    }).then(function(res){
        console.log(res);
    }).catch(function(err){
        console.log(err);
    })
}








