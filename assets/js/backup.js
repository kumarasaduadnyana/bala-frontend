const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu li');

    
    menu.addEventListener('click', () => {

        //saat klik
        nav.classList.toggle('nav-active');

         //animation
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 0.7 }s`;
            }
         });
        //animasi menu
        menu.classList.toggle('toggle')

    });


}


const app = () =>{
    navSlide();
}

app()