let days = document.querySelector('#days');
let hrs = document.querySelector('#hrs');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');

setInterval(function timer(){
    let curryear = new Date().getFullYear();
    let currtime = new Date();
    let target = new Date(`1 january ${curryear+1} 00:00:00`);
    let diff = target - currtime;
    let d = Math.floor(diff/1000/60/60/24);
    let h = Math.floor((diff/1000/60/60)%24);
    let m = Math.floor((diff/1000/60)%(60));
    let s = Math.floor((diff/1000)%(60));
    days.innerHTML = `${d<10? "0"+d:d}<h5>Days</h5>`;
    hrs.innerHTML = `${h<10 ? "0"+h:h}<h5>Hours</h5>`
    min.innerHTML = `${m<10 ? "0"+m:m}<h5>Minutes</h5>`
    sec.innerHTML = `${s<10 ? "0"+s:s}<h5>Seconds</h5>`
},1000);

timer();