function updateclock(){
    const now=new Date();
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();

    hours=hours<10?"0"+hours:hours;
    minutes=minutes<10?"0"+minutes:minutes;
    seconds=seconds<10?"0"+seconds:seconds;
    const currenttime=`${hours}:${minutes}:${seconds}`;
    //const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent=currenttime;


}
updateclock();
setInterval(updateclock,1000)