let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let paragrafi = document.querySelectorAll('p')

btn1.addEventListener('click', ()=>{
    paragrafi.forEach(p => {
        let randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        p.style.color = randomColor;
    })
})

btn2.addEventListener('click', ()=>{
    paragrafi.forEach(p => {
        p.classList.toggle('bold');
    })
})

btn3.addEventListener('click', ()=>{
    paragrafi.forEach(p => {
        p.classList.toggle('display-none');
    })
})