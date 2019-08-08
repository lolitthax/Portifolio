var txtEmail = document.getElementById('txtEmail')
var txtFoto = document.getElementById('txtFoto')
var form  = document.getElementById('form')
var btn  = document.getElementById('btn')

btn.addEventListener("click", function(){

    if(txtEmail.value == "" || txtFoto.value == ""){
        alert('preencha os campos corretamente')
        txtEmail.value == ""
        txtFoto.value == ""
        txtFoto.focus()
    }
    else{
        alert("Email Enviado com sucesso!")
    }
  });
