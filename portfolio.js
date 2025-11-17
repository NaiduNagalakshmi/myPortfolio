let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-bar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*==========================scroll section active link===============*/
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*=================================sticky navbar===========================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    /*======================================remove toggle icon and navbar ========================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};
/*===============================scroll reveal==============================================*/

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.Home-content,heading', { origin:'top'});
ScrollReveal().reveal('.project-container, .certificates-box, .contact form', { origin:'bottom'});
ScrollReveal().reveal('.Home-content h1, .about-img .skills-content p', { origin:'left'});
ScrollReveal().reveal('.Home-content p, .about-content, .home-img', { origin:'right'});


/*===========================typed js========================*/

const typed = new Typed('.multiple-text', {
    strings: ['Front-end Developer','Web Designer','Python Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
})

/*===============contact form======================*/
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_vack4b5", "template_3990e3u", this)
    .then(function() {
        document.getElementById("status").innerText = "✅ Message sent successfully!";
    }, function(error) {
        document.getElementById("status").innerText = "❌ Failed to send. " + JSON.stringify(error);
    });
});



































