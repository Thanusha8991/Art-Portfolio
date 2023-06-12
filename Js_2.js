/* ---------------------toggle icon navbar-------------------*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/* ---------------------scroll section active link-------------------*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
     /* ---------------------sticky navbar-------------------*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

     /* ---------------------remove toggle icon and navbar when click navbar link(scroll)-------------------*/
     menuIcon.classList.remove('bx-x');
     navbar.classList.remove('active');

};

/* ---------------------scroll reveal-------------------*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* ---------------------typed js-------------------*/
const typed = new Typed('.multiple-text', {
    strings: [' a Student at Rajarata University of Sri Lanka', ' an Artist', ' a Programmer(Java, C, C++)', ' a Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 });

 /*---------------------------form validation js--------------------------------- */
 /*const form = document.querySelector('#form');
 const username = document.querySelector('#username');
 const contact = document.querySelector('#contact');
 const email = document.querySelector('#email');

 form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
 });

 const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('sucess')
 }

 const setSucess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('sucess');
    inputControl.classList.remove('error');
 };

 const isValidEmail = email => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

 const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const contactValue = contact.value.trim();

    if(usernameValue === '') {
       setError(username, 'Username is required');
    } 
    else {
        setSucess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } 
    else if(!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } 
    else {
        setSucess(email);
    }

    if(contactValue === '') {
        setError(contact, 'Contact is required');
    }
    else if(contactValue.length < 10 || contactValue.length > 10) {
        setError(contact, 'Contact must be 10 character.');
    }
    else {
        setSucess(contact);
    }
 };*/

/*-----------------------image slider js---------------- */
 var counter = 1;
 setInterval(function(){
     document.getElementById('radio' + counter).checked = true;
     counter++;
     if (counter > 14){
         counter = 1;
     }
    }, 5000);

    /*------------------form validation js--------------- */
    
