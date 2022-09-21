var time = document.getElementById('time');
var arr = time.innerHTML.split(':');

var hr = 0;
var m = 0;
var s = 0;
var ms = 0;

var interval
var remaining

var startbtn = document.getElementById('start')
var pausebtn = document.getElementById('pause')
var stopbtn = document.getElementById('stop')

pausebtn.disabled = true;
stopbtn.disabled = true;

function start() {
    
     ms++;

     if(ms == 100){
         ms=0;
         s++;
     }
     if(ms < 10){
       arr[3] = ('0' + ms)
     }
     if(ms >= 10 && ms < 100){
         arr[3] = ms
     }

     if(s == 60){
        s =0;
        m++;
     }
     if(s < 10) {
      arr[2] = ('0' + s)
     }
     if(s >= 10 && s < 60) {
      arr[2] = s
     }

     if(m == 60) {
        m = 0
        hr++
     }
     if(m < 10) {
        arr[1] = '0' + m
     }
     if(m >= 10 && m < 60) {
        arr[1] = m
     }

     if(hr < 10){
        arr[0] = '0' + hr
     }
     if(hr >= 10) {
         arr[0] = hr
     }

     time.innerHTML = (arr.join(':'))
}

function watch() {
   interval = setInterval(start, 10)
}

startbtn.addEventListener('click', () => {

     watch()
     startbtn.disabled = true
     pausebtn.disabled = false
     stopbtn.disabled = false
})

let count = 0;

pausebtn.addEventListener('click', () => {
    
    count++
    if(count % 2 == 1) {
         
        clearInterval(interval)
        pausebtn.innerHTML = 'Continue'
    }
    if(count % 2 == 0) {

        watch()
        pausebtn.innerHTML = 'Pause'
    }
})

stopbtn.addEventListener('click', () => {
    
   clearInterval(interval)
     hr = 0;
     m = 0;
     s = 0;
     ms = 0;
     count = 0;

     time.innerHTML = '00:00:00:00'

     pausebtn.innerHTML = 'Pause'
     pausebtn.disabled = true
     stopbtn.disabled = true
     startbtn.disabled = false

})