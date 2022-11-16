/*=============== SHOW MENU ===============*/
const nav__menu=document.getElementById('nav-menu'),
      nav__toggle=document.getElementById('nav-toggle'),
      nav__close=document.getElementById('nav-close');

if(nav__toggle){
    nav__toggle.addEventListener('click',()=>{
        nav__menu.classList.add('show-menu');
    })

}

if(nav__close){
    nav__close.addEventListener('click',()=>{
        nav__menu.classList.remove('show-menu');
    })
}


/*=============== REMOVE MENU MOBILE ===============*/

const nav_links=document.querySelectorAll('.nav__link');

let linkAction=()=>{
    nav__menu.classList.remove('show-menu')
}

nav_links.forEach((link)=>{
    link.addEventListener('click',linkAction);
    
})


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader=()=>{
    const header=document.getElementById('header');

    this.screenY<=50 ? header.classList.add('bg-header'):
                        header.classList.remove('bg-header')
    // console.log('Chal rha h ')
}

window.addEventListener('scroll',scrollHeader);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp=()=>{
    const scrollUp=document.getElementById('scroll-up');

    (this.scrollY>=350 )? scrollUp.classList.add('Show__scroll-bar'):
        scrollUp.classList.remove('Show__scroll-bar')
    

}
window.addEventListener('scroll',scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/