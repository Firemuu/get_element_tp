/*function f(id){
    element = document.getElementById(id);
    alert(element);
    alert(element.id);
}*/

function f2(){
    var e=document.getElementById('i1');
    var ch=e.value;
    alert("votre nom est :" +ch);
    lg=ch.length;
    e.value=ch.substr(0,1).toUpperCase()+ch.substr(1,lg).toLowerCase();
    alert("votre nom est :"+ e.value);
    /*element=document.getElementById('i1');
    alert(element);
    alert(element.id);
    alert(element.value);
    ch=element.value;
    lg=ch.length;
    element.value=ch.substr(0,1).toUpperCase()+ch.substr(1,lg).toLowerCase();*/
}

function maFonction(){
    a = "<button id='bt1' onclick='f2()'>Valide</button>";
    document.getElementById("rien").innerHTML = a; 
}

function maFonction2(){
    a =      "<video controls width='1000'><source src='A better tomorrow (1986) animation of chinese beaver meme template.mp4'></video>"
    document.getElementById("demo").innerHTML = a; 
}

function changer(){
    var car1=document.getElementById('car1').style;
    var car2=document.getElementById('car2').style;
    var car3=document.getElementById('car3').style;
    car1.background="gray";
    car2.visibility="hidden";
    car3.border="4px dashed green";
    document.getElementById('bt2');
}


etat1= 1;
etat2 = 1;
tableau1=["po.jpg","Shifu.jpeg","ping.jpg"]
tableau2=["ping.jpg","po.jpg","Shifu.jpeg"]

function tourner1(){
    images=document.getElementsByClassName("c1");
        if(etat1 == 1){
            for(var img of images){
                img.src="1280px-HD_transparent_picture.png";
            }
            etat1 = 0;

        }
        else{
            for(i=0;i<images.length;i++){
                images[i].src=tableau1[i];
    
            }
            etat1 = 1;
        }

}

function tourner2(){
    images=document.getElementsByClassName("c2");
        if(etat2 == 1){
            for(var img of images){
                img.src="1280px-HD_transparent_picture.png";
            }
            etat2 = 0;

        }
        else{
            for(i=0;i<images.length;i++){
                images[i].src=tableau2[i];
    
            }
            etat2 = 1;
        }

}
