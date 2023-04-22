window.onload = init;

function init() {
    document.querySelector('#iniciarSesion').addEventListener('click', function(){
        window.location.href = 'login.html';
    });
    
    document.querySelector('#submit').addEventListener('click', signin);
}

function signin() {
    var user_name = document.querySelector('#nombre').value;
    var user_age = document.querySelector('#edad').value;
    var user_mail = document.querySelector('#correo').value;
    var user_password  = document.querySelector('#contraseña').value;

    console.log(user_name, user_age, user_mail, user_password );

    axios({
        method: 'post',
        url: 'http://localhost:3000/signin',
        data: {
            user_name,
            user_age, 
            user_mail,
            user_password 
        }
    }).then(function(res){
        console.log(res);
    }).catch(function(err){
        console.log(err);
    })
}