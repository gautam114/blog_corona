function load(){
    experts();
    
}
function experts(){
    let exp=document.getElementById('ro');
 
    let imgg=[{'img':'images/dr1.webp','name':'DR:gautam','tel':'tel:+917404940441','whats':'https://bit.ly/3n4SV3k','mail':'mailto:gautamparchanda@gmail.com'},
              {'img':'images/dr2.jpg',"name":'DR:Rohan' ,'tel':'tel:+917404940441','whats':'https://bit.ly/3n4SV3k','mail':'mailto:gautamparchanda@gmail.com'},
              {'img':'images/dr3.jpg' ,'name':'DR:hardik','tel':'tel:+917404940441','whats':'https://bit.ly/3n4SV3k','mail':'mailto:gautamparchanda@gmail.com'},
            {'img':'images/dr4.jpg','name':'DR:paras','tel':'tel:+917404940441','whats':'https://bit.ly/3n4SV3k','mail':'mailto:gautamparchanda@gmail.com'}

             ];

    for(let i of imgg){
        let col=document.createElement('div');
        let card=document.createElement('div');
      
       
        col.className='col-md-3 col-6';
        card.className='card text-center  a';
                         
        card.innerHTML=`
        
       <img src='${i.img}' width='90%' height='200' class='mx-auto'>
        <div class='card-footer'>
        <h2>${i.name}</h2>
        </div>
        <div id='button' class=''>
        <a class='btn btn-primary' href='${i.tel}'><span class='bi bi-telephone-fill'></span></a><br><br>
        <a class='btn btn-primary'  href='${i.mail}'><span class='bi bi-envelope-fill'></span></a><br><br>
        <a class='btn btn-primary'  href='${i.whats}'><span class='bi bi-whatsapp'></span></a>
        </div>
        `;
        col.appendChild(card);
        exp.appendChild(col);
    }


}

let nam=false,mail=false;
document.getElementById('f1').addEventListener('submit',(f1)=>{
    f1.preventDefault();

    let mail=document.getElementById('mal').value;
    
    if(!(mail.endsWith('@gmail.com'))){
       mailmsg.innerHTML='write email prefectly';
    }else {
        mailmsg.innerHTML='';
        mail=true;

    }

    
if(mail==true && nam==true){
    document.getElementById('sent').innerHTML='Sent';
    document.getElementById('sent').className='text-success';

}else if(mail==true && nam==false){
    document.getElementById('sent').innerHTML='plzz fill all coloms';
       document.getElementById('sent').className='text-danger';
}else if(nam==true && mail==false){
    document.getElementById('sent').innerHTML='Plzz fill all coloms';
    document.getElementById('sent').className='text-danger';

}


});

document.getElementById('nm').addEventListener('keypress',(nm)=>{
    let asci=nm.charCode;
    console.log(asci);
    if(!((asci>=97 && asci<=122) || (asci>=65 && asci<=90))){
        nm.preventDefault();
    }
    else{
        nam=true;
    }
})




function scrolll(adrs){
    if(adrs=='home'){
        document.documentElement.scrollTop=0;
        document.body.scrollTop=0;
    }
    if(adrs=='about'){
        document.documentElement.scrollTop=450;
        document.body.scrollTop=450;

    }
    if(adrs=='prevent'){
        document.documentElement.scrollTop=1000;
        document.body.scrollTop=1000;
    }
    if(adrs=='experts'){
        document.documentElement.scrollTop=1500;
        document.body.scrollTop=1500;
    }
    if(adrs=='contact'){
        document.documentElement.scrollTop=1900;
        document.body.scrollTop=1900;
    }
}





