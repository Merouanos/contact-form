const sub=document.getElementById("sub");


document.forms[0].addEventListener("keydown",function(event){

    if(event.target.classList.contains("border-red"))
    {
    event.target.classList.replace("border-red","border-gray-500");
        event.target.nextElementSibling.classList.replace("visible","hidden");
    }

})

document.getElementById("box").addEventListener("change",function(){
    const p=document.getElementById("p6");
    if(p.classList.contains("visible"))
            p.classList.replace("visible","hidden");
        
})



document.getElementById("tp1").onclick=function(){
    const p=document.getElementById("p4");
    if(p.classList.contains("visible"))
            p.classList.replace("visible","hidden");
}
document.getElementById("tp2").onclick=function(){
    const p=document.getElementById("p4");
    if(p.classList.contains("visible"))
            p.classList.replace("visible","hidden");
}

sub.addEventListener("click",function(event){
    

    event.preventDefault();
    const su=document.getElementById("exist");

    let t=[];
    t[0]=checkempty(document.getElementById("name"),document.getElementById("p1"));
    t[1]=checkempty(document.getElementById("lname"),document.getElementById("p2"));
    t[2]=checkempty(document.getElementById("msg"),document.getElementById("p5"));
    t[3]=checkcorrect(document.getElementById("email"),document.getElementById("p3"))
    t[4]=checkselected(document.getElementById("query1"),document.getElementById("query2"),document.getElementById("p4"));
    t[5]=checkbox(document.getElementById("box"),document.getElementById("p6"));
    if(t[0]&&t[1]&&t[2]&&t[3]&&t[4]&&t[5])
    {
        let test;

        su.classList.replace("visible","hidden");
       await(test).fetch("treat.php",{
            method: "POST",
            body: new FormData(document.querySelector("form")),
        }).then((response)=>(response.json())).then((data)=>{
            const sucs=document.getElementById("sucs");
            
            if(data.data==="1")
            {
                sucs.classList.replace("hidden","visible");
                sucs.classList.add("fade");
                 test=  setTimeout(function() {
                sucs.classList.replace("visible","hidden");
                sucs.classList.remove("fade");
              }, 3000);
              
            }
            else
            {
                su.classList.replace("hidden","visible");
                sucs.classList.replace("visible","hidden");
                sucs.classList.remove("fade");
            }

            

                });
    }
    else 
    su.classList.replace("visible","hidden");


        

    
        

})

function checkempty(entry,p){
    if(entry.value=="")
    {
        p.classList.replace("hidden","visible");
        entry.classList.replace("border-gray-500","border-red");
        return false;
    }
    return true;
}

function checkcorrect(entry,p){
    const regdit = /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|hotmail\.com|live\.com|yahoo\.com|icloud\.com|protonmail\.com|proton\.me|zoho\.com|aol\.com|yandex\.com|yandex\.ru)$/;
    if(!regdit.test(entry.value))
    {
        p.classList.replace("hidden","visible");
        entry.classList.replace("border-gray-500","border-red");
        return false;
    }
    return true;
}
function checkselected(entry1,entry2,p){
    if(!entry1.checked && !entry2.checked)
    {
        p.classList.replace("hidden","visible");
        return false;
    }
    return true;
    
}
function checkbox(entry,p){
    if(!entry.checked)
    {
        p.classList.replace("hidden","visible");
        return false;

    }
    return true;
    
}

