const value1 = document.querySelector('.input')
const f_span = document.querySelector('.f')
const num = document.querySelector('.num')
value1.onkeyup = () => {
    if (value1.value.length >= 0) {
        n = (19 - value1.value.length)
        f_span.style.color = "rgb(0, 255, 255)";
        num.style.color = "rgb(0, 255, 255)";
        document.querySelector('.num').innerHTML = n
    }
    if (value1.value.length == 0) {
        f_span.style.color = "rgba(128, 128, 128)";
        num.style.color = "rgba(128, 128, 128)";
    }
    
}