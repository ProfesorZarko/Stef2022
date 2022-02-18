console.log("SRETENJE !!!");
const time = ()=>{
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector("#clock").innerText=h + ":"+m+":"+s;
    setTimeout(time, 1000);}
const checkTime=(i)=>{
    if(i<10){i="0"+i}
return i ;};
document.querySelector("#clockButton").addEventListener("click", time);