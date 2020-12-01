

let navBar  = document.querySelectorAll('.nav a')
let button = document.querySelector('.btn')
let button2 = document.querySelector('.destination:nth-child(2) .btn')
let button3 = document.querySelector('.destination:nth-child(3) .btn')
let title = document.querySelector('.logo-heading')
// when you load the page you will have an allert
window.addEventListener('load', a => alert(`congrats you just ${a.type} this page`))
//when you click the first button the text will become grey
button.addEventListener('click', a => a.target.style.color = 'grey')
//when you click the second button the button will become 50% of opacity
button2.addEventListener('mouseover', a=> a.target.style.opacity = '0.5')
//when you will doubleclikc this button the background will become red
button3.addEventListener('dblclick', a => a.target.style.backgroundColor = 'red')

//image bigger when cursor is over with transition.
let img = document.querySelectorAll('img')
Array.from(img).forEach ((a)=>{
    a.style.cursor = 'zoom-in';
    a.addEventListener('mouseenter', ()=>{
        a.style.transform = "scale(1.2)"
        a.style.transition = "all 0.8s"
    })
    a.addEventListener('mouseleave', ()=>{
        a.style.transform = 'scale(1)'
        a.style.transition = 'all 0.7s'
    })
})


//if you press escape button you will have an alert
document.addEventListener('keydown', a =>{
    if (a.keyCode === 27)
    alert ('are you sure you want to leave us?') 
})
//when you try to drag  the logo'fun buss it will change the text of welcome to fun bus
const  textDrag = document.querySelector('.logo-heading')
textDrag.setAttribute('draggable', true)

document.addEventListener('dragStart', a=>{
    a.dataTransfer.setData("Text", a.target.id)
})
document.addEventListener("drag",a =>{
    document.querySelector('.intro h2').innerHTML = 'Why did You drag the Logo'
})




//when change the size of the  browser it will change the color of the background
const resizeBody = document.querySelector('body');

let resizeTimer;

window.addEventListener('resize', () => {
    resizeBody.style.backgroundColor = 'lightgrey';
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        resizeBody.style.backgroundColor = 'white';
    }, 250);
});

//you can click on the last picture to have it bigger
const destinationImage = document.querySelector('.content-destination img');
destinationImage.addEventListener('click', (event) => {
    destinationImage.style.transform = 'scale(1.5)';
    destinationImage.style.opacity = '0.7'
    event.stopPropagation();
});


