const clock = document.querySelector("#clock");
const date2 = new Date(1991,11,25,3,50);

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    date.setMinutes(date.getMinutes()+2)
    const minutes = String(date.getMinutes()).padStart(2, "0");
    /*String(date.getMinutes()).padStart(2, "0");*/
    const seconds = String(date.getSeconds()).padStart(2, "0");
    //console.dir(date);
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//5000ms(5초)마다 getClock를 호출시킴
getClock();
setInterval(getClock, 1000);