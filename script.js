let nav=document.getElementById('phone-nav')
let btn=document.querySelector('#btn')
btn.addEventListener('click',()=>{
    nav.classList.toggle('active')
})
function clickfn(){
    btn.click()
}