function UpdateTime(){
    var dateTime= new Date();
    var hours= dateTime.getHours();
    var minutes= dateTime.getMinutes();
    var seconds= dateTime.getSeconds();
    var ampm=document.getElementById("ampm");
    if(hours>=12){
        ampm.innerText="PM";
    }else
    {
        ampm.innerText="AM"
    }
    if(hours>12){
        hours=hours-12;
    }
    if(hours<10){
            
        hours="0"+hours;
        
        }
        if(minutes<10){
        
            minutes="0"+minutes;
            
            }
        if(seconds<10){
        
            seconds="0"+seconds;
            
            }
    document.getElementById("hours").innerText=hours
    document.getElementById("minutes").innerText=minutes
    document.getElementById("seconds").innerText=seconds
    
    }
     setInterval(UpdateTime, 1000);