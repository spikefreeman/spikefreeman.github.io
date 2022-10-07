

document.getElementById("sp1").addEventListener("mouseover", changeText1);
document.getElementById("sp2").addEventListener("mouseover", changeText2);
document.getElementById("sp3").addEventListener("mouseover", changeText3);


function changeText1(){
    document.getElementById("changeText").textContent="Treehouse Frontend Web Development Course Graduate";
    
    document.getElementById("sp1").style.opacity = "1";
    document.getElementById("sp2").style.opacity = "0.5";
    document.getElementById("sp3").style.opacity = "0.5";
}

function changeText2(){
    document.getElementById("changeText").textContent="Time Magazine 'Person of the Year' 2006 ";
    
    document.getElementById("sp1").style.opacity = "0.5";
    document.getElementById("sp2").style.opacity = "1";
    document.getElementById("sp3").style.opacity = "0.5";
}

function changeText3(){
    document.getElementById("changeText").textContent="Something else impressive idk";
    
    document.getElementById("sp1").style.opacity = "0.5";
    document.getElementById("sp2").style.opacity = "0.5";
    document.getElementById("sp3").style.opacity = "1";
}
