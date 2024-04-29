var id;
                                       
function Registro2(a,b,c,d,e,f){//valida que todos los campos eten llenos
    if(a === '' || b === '' || c === '' || d === '' || e === '' || f === ''){
        alert("Por favor rellene correctamente todos los campos");
    }
    else{
        return 0;
    }
}

function Registro(){ //ya funciona
    const nombre = document.getElementById('nombre').value;
    const iniciales = document.getElementById('iniciales').value;
    const horario = document.getElementById('horario').value;
    const puesto = document.getElementById('puesto').value;
    const login = document.getElementById('login').value;
    const contraseña = document.getElementById('contraseñaR').value;
    
    let Usuarios = JSON.parse(localStorage.getItem('Usuarios'));

    alert(Usuarios);
    
    if(Usuarios === null && Registro2(nombre, iniciales, horario, puesto, login, contraseña) === 0){ //no hay usuarios
        var Usuariosaux = [1];
        Usuariosaux[0]=[nombre,iniciales,horario,puesto,login,contraseña];
        localStorage.setItem('Usuarios', JSON.stringify(Usuariosaux));
        alert('Se a registrado a: ' + Usuarios[i][4]);
    }
    else if(Usuarios !== null && Registro2(nombre, iniciales, horario, puesto, login, contraseña) === 0){//hay mas de 1 ususario
        var aux; //no existe el usuario
        alert(Usuarios[0][4] + ' ' + login)
        for(var i=0; i<Usuarios.length ;i++){ //busca si ya existe al usuario
            if(Usuarios[i][4] === login ){
                aux='Existe'; //encontro al usuario
            }
        }
        if(aux !== 'Existe'){ //el usuario no existe y lo va a crear
            Usuarios.push([nombre,iniciales,horario,puesto,login, contraseña]);
            localStorage.setItem('Usuarios', JSON.stringify(Usuarios));
            alert('Se a registrado a: ' + Usuarios[i][4]);
        }
        else{
            alert('Usuario ya registrado');
        }
    }
}

function Logueo(){
    const login = document.getElementById('cargar_usuario').value;
    const contraseña = document.getElementById('contraseñaL').value;
    let Usuarios = JSON.parse(localStorage.getItem('Usuarios'));
    var aux=0;
    
    if(Usuarios === null){
        alert("Usuario inexistente");
    }
    else{
        for(var i=0; i<Usuarios.length ;i++){ //se busca al usuario
            if(login === Usuarios[i][4]){
                aux=1;
                id=i;
                break;
            }
        }

        if(aux === 1 && contraseña === Usuarios[id][5]){
            // alert("Inicio de sessión");
            localStorage.setItem('id',id);
            window.location.href = 'directorio.html';
        }
        else{
            alert("Usuario inexistente");
        }
    }
}