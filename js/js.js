

   
                                                    // BOTON JUGAR
    
function functLimpiar(){
    document.getElementById('id_papel_user').disabled=false;
    document.getElementById('id_tijera_user').disabled=false;
    document.getElementById('id_piedra_user').disabled=false;
    
    // BOTON ALEATORIO MAQUINA
    document.getElementById('id_img').style.display='none';
    document.getElementById('btn').disabled=true;
   
    // AGREGA EL COLOR NUEVAMENTE A LOS BOTONES DE USUARIO
    document.getElementById('id_piedra_user').style.background='#f0f8ff'
    document.getElementById('id_papel_user').style.background='#f0f8ff'
    document.getElementById('id_tijera_user').style.background='#f0f8ff'
    

    document.getElementById('id_ale').innerHTML= '';
    document.getElementById('id_usuario').innerHTML = '';
    document.getElementById('p-button-name').style.display='block'
    

    document.getElementById('txt_usuario').value ='';
    document.getElementById('txt_ale').value ='';
}

                                    // FUNCIONES DE USUARIO

function functPiedraUser(){
   
    document.getElementById('id_usuario').innerHTML='<b><span style="color:blue">Usuario</span></b>, a escogido --><b>Piedra</b>'
    document.getElementById('id_papel_user').style.background='red'
    document.getElementById('id_tijera_user').style.background='red'
    document.getElementById('id_papel_user').disabled=true;
    document.getElementById('id_tijera_user').disabled=true;
    document.getElementById('id_piedra_user').disabled=true;
    document.getElementById('btn').disabled=false;   
    document.getElementById('txt_usuario').value='piedra' 
}

function functPapelUser(){
   
    document.getElementById('id_usuario').innerHTML='<b><span style="color:blue">Usuario</span></b>, a escogido --><b>Papel</b>'
    document.getElementById('id_tijera_user').style.background='red'
    document.getElementById('id_piedra_user').style.background='red'
    document.getElementById('id_papel_user').disabled=true;
    document.getElementById('id_tijera_user').disabled=true;
    document.getElementById('id_piedra_user').disabled=true; 
    document.getElementById('btn').disabled=false;   
    document.getElementById('txt_usuario').value='papel'  
}

function functTijeraUser(){
   
    document.getElementById('id_usuario').innerHTML='<b><span style="color:blue">Usuario</span></b>, a escogido --><b>Tijera</b>'
    document.getElementById('id_papel_user').style.background='red'
    document.getElementById('id_piedra_user').style.background='red'
    document.getElementById('id_papel_user').disabled=true;
    document.getElementById('id_tijera_user').disabled=true;
    document.getElementById('id_piedra_user').disabled=true; 
    document.getElementById('btn').disabled=false;    
    document.getElementById('txt_usuario').value='tijera' 
}




                                    // BOTON RESULTADO 



var myImages = new Array("./img/papel.png","./img/piedra.png","./img/tijera.png");
function changeImg(imgNumber) {

var imgClicked = document.images[imgNumber];

var newImgNumber = Math.round(Math.random() * 2);

// while (imgClicked.src.indexOf(myImages[newImgNumber])!= -1) {
// newImgNumber = Math.round(Math.random() * 2);

// }
if(newImgNumber == 0){
    document.getElementById('txt_ale').value='papel';
}else if(newImgNumber == 1){
    document.getElementById('txt_ale').value='piedra';
}else if(newImgNumber == 2){
    document.getElementById('txt_ale').value='tijera';
}

imgClicked.src = myImages[newImgNumber];



// A PARTIR DE ACA HACE LA LOGICA DE PIEDRA, PAPEL O TIJERA

let result1 = document.getElementById('txt_usuario').value;
  let result2 = document.getElementById('txt_ale').value;

  if(result1 == '' && result2 == ''){
    swal({
        title: "No has Seleccionado nada!",
        text: "Debes Jugar a piedra, papel o tijera!",
        icon: "error",
        button: "Continuar!",
    });
  }else{

 
  if(result1 != result2){
        if(result1 == 'piedra' & result2 == 'papel'){
            
            swal({
                title: `Maquina ha ganado con ${result2} !`,
                text: "Perdiste",
                icon: "error",
                button: "OK",
            });
        }
        else if(result1 == 'piedra' && result2 == 'tijera' ){
            
            swal({
                title: `Usuario ha ganado con ${result1} !`,
                text: "Ganaste",
                icon: "success",
                button: "OK",
            });
        }
        else if(result1 == 'papel' && result2 == 'piedra'){
            
            swal({
                title: `Usuario ha ganado con ${result1} !`,
                text: "Ganaste",
                icon: "success",
                button: "OK",
            });
        
        }
        else if(result1 == 'papel' && result2 =='tijera'){
            
            swal({
                title: `Maquina ha ganado con ${result2} !`,
                text: "Perdiste",
                icon: "error",
                button: "OK",
            });
        }
        else if(result1 == 'tijera' && result2 == 'piedra'){
            
            swal({
                title: `Maquina ha ganado con ${result2} !`,
                text: "Perdiste",
                icon: "error",
                button: "OK",
            });
        }
        else if(result1 == 'tijera' && result2 == 'papel'){
            
            swal({
                title: `Usuario ha ganado con ${result1} !`,
                text: "Ganaste",
                icon: "success",
                button: "OK",
            });
        
        }
    
    }
    if(result1 == result2){
        
        swal({
            title: "Empate!",
            text: "Nadie Gana",
            icon: "./img/tobe1.png",
            button: "OK",
        });
    
    }
  
 }
 document.getElementById('id_ale').innerHTML=`<b><span style="color:red">Maquina</span></b>, a escogido --><b>${document.getElementById('txt_ale').value}</b>`
 document.getElementById('id_img').style.display='flex';
 document.getElementById('btn').disabled='true'
 document.getElementById('p-button-name').style.display='none'
 document.getElementById('btn').style.color='#7cb80c';
 return false;
}

var typed = new Typed(".text-slider", {
    // strings: typed_strings.split(", "),
    strings: ['Seleccione la figura Usuario','Buen Juego','Exito!!!'],
    startDelay: 1500,
    typeSpeed: 100,
    loop: true,
    backDelay: 100,
    backSpeed: 100,
    showCursor: true,
    cursorChar: '&#9994&#9995&#9996',
    // cursorChar:'&#9994',
    onStop: () => {
        alert('Se detuvo');
    },
});