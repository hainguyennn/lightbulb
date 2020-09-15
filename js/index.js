var btnTurnOnorOff = document.getElementById('mybtn').onclick = function(){
    if(document.getElementById('mybtn').checked){
        document.getElementById('mybulb').src = './img/pic_bulbon.gif';
    }else {
        document.getElementById('mybulb').src = './img/pic_bulboff.gif';
    }
}