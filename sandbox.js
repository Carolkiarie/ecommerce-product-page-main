console.log('hellö')
const links= document.querySelectorAll('.nav__links')
const liTabs= document.querySelector('.tab1')
const slide= document.querySelectorAll('#images')
const nextButton= document.querySelector('.next')
const prevButton= document.querySelector('.previous')
const user= document.querySelector('.main_menu_cart')
const cart= document.querySelector('.hidden_menu_item')
const navMenu= document.querySelector('.container_tab')
const minus= document.getElementById('minus')
const plus= document.getElementById('plus')
const counterNumber= document.getElementById('item_number')
const addToCart= document.getElementById('add_to_cart')
const para= document.querySelector('.overWrite_text')
const spn= document.querySelector('.ptag')
const checkout= document.querySelector('.checkout')
const text= document.querySelector('.sneaker_text')
const image= document.querySelector('.sneaker_image img')
const msg= document.querySelector('.empty_cart')
const closeModal= document.getElementById('close')
const closeModalCart= document.getElementById('closed')
const imageDisplayDesktop= document.querySelector('.whole_images')
const nextPrev= document.querySelector('.next_prev')
const closeMobileNav= document.getElementById('close_mobile_nav')
const mobileMenu= document.getElementById('menu_bar')
const mobile= document.querySelector('.mobile_menu')

const soloImg= document.querySelector('.solo_image')
let current=0;
const maxSlide= slide.length +4

const currSlide= function(sl){
    
    slide.forEach((slides, i)=>{
        slides.style.transform= `translateX(${100*(i - sl)}%)`
    })
   
}
currSlide(0)
nextButton.addEventListener('click', function(){
    if(current ===maxSlide -1){
        current= 0
    }else{
        current++
    }
    currSlide(current)
})
prevButton.addEventListener('click', function(){
   if(current ===0){
    current= maxSlide-1
   }else{
    current--
   }
   currSlide(current)

})

// cart display
user.addEventListener('click', function(){
cart.style.display= 'flex'
})
const clickedLinks= function(out){
    const link=out.target
    const clicked= link.closest('.container_tab').querySelectorAll('.nav__links')
    clicked.forEach(clickedLink=>{
    if(clickedLink == link) {
        clickedLink.style.textDecoration='underline'
    }
})
}
const outLinks=function(li){
    const link=li.target
    const clicked= link.closest('.container_tab').querySelectorAll('.nav__links')
    clicked.forEach(clickedLink=>{
    if(clickedLink == link) clickedLink.style.textDecoration='none'
})
}
// navigation menu
navMenu.addEventListener('mouseover', function(e){
   clickedLinks(e)
})
navMenu.addEventListener('mouseout', function(e){
    outLinks(e)
})

// 

// counter items

let initialNumber= 0
plus.addEventListener('click', function(e){
    e.preventDefault()
    initialNumber++
    counterNumber.textContent= initialNumber
})

minus.addEventListener('click', function(e){
    e.preventDefault()
    if(initialNumber <=0){
        return
    }else{
        initialNumber--
        counterNumber.textContent= initialNumber
        return initialNumber
    }
})

// add to cart
addToCart.addEventListener('click', function(e){
    const add=Number(counterNumber.textContent)
    const total= 125* (add)
   spn.innerHTML= ""
   spn.innerHTML= ` <p>$125 * ${add}<span class="spn">${total}</span></p>`
   text.style.display= 'flex'
   image.style.display= 'block'
   checkout.style.display= 'block'
   msg.style.display= 'none'
   cart.style.display= 'flex'
   
})
closeModal.addEventListener('click', function(e){
    imageDisplayDesktop.style.display= 'none'
})
closeModalCart.addEventListener('click', function(){
    cart.style.display= 'none'
    
})
closeMobileNav.addEventListener('click', function(){
    mobile.style.display= 'none'
})
mobileMenu.addEventListener('click', function(){
    mobile.style.display= 'flex'
    nextPrev.style.display='none'
})