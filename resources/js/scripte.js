// nav script *********************************
let listIcon = document.querySelector('#nav .list-icon');
let closeList = document.querySelector('#nav .close-list');
let navList = document.querySelector('#nav .nav-list');
let li = document.querySelectorAll('#nav .nav-list li');
window.addEventListener('resize', () => {
    if(window.innerWidth > 768){
        listIcon.style.display = 'none';
        closeList.style.display = 'none';
        navList.style.display = 'block';
        li.forEach(item =>{
            item.style.display = 'inline-block';
            item.style.padding = 'unset';
        })
    }
    else{
        listIcon.style.display = 'block';
        closeList.style.display = 'none';
        navList.style.display = 'none';
    }
})
listIcon.addEventListener('click', ()=> {
    closeList.style.display = 'block';
    navList.style.display = 'block';
    li.forEach(item =>{
        item.style.display = 'block';
        item.style.padding = '10px';
    })
    listIcon.style.display = 'none';
})
closeList.addEventListener('click', ()=>{
    navList.style.display = 'none';
    listIcon.style.display = 'block';
    closeList.style.display = 'none';
})
// sticky nav ////
let nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if(window.scrollY >= 500){
        nav.classList.add('sticky-top');
    }
    else{
        nav.classList.remove('sticky-top');
    }
    
})
// end nav script *********************************
// fixed arrow
const arrow = document.querySelector('.arrow')
window.addEventListener('scroll', () =>{
    if(window.scrollY >= 500){
        arrow.style.display = 'block';
    }
    else{
        arrow.style.display = 'none';
    }
})
// end fixed arrow *********************************