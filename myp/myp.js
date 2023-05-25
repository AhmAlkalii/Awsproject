//typed js
const typed = new Typed('.multiple-text',{
    strings:['Batman', 'Superman', 'Wonder Woman', 'The Flash', 'Aquaman', 
    'Green Lantern', 'Blue Beetle', 'Martian Manhunter', 'Black Canary', 'Green Arrow','A lot more..'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
}); 

//scroll reveal
ScrollReveal({ 
    //reset: true ,
    distance:'80px',
    duration:2000,
    delay:200

});

ScrollReveal().reveal('.home-content, .heading', { origin:'top ' });
ScrollReveal().reveal('.himg, .services-container, .portfolio-box, .contact-form', { origin:'bottom ' });
ScrollReveal().reveal('.home-content h1', { origin:'left ' });
ScrollReveal().reveal('.home-content p, .abcont', { origin:' right ' });


