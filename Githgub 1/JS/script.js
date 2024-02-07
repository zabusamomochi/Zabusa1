
function validaCampos(){

    let usuário = document.getElementById("usuário").value;
 let senha = document.getElementById("senha").value;


    if(usuário != "lenda" && senha !="123456"){
        alert("Usuario ou senha invalidos")
    }else{
        alert("seja bem-vindo")
    }
}

