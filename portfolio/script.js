// Smooth scroll animation for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Configuration
// Choose one of the following options:

// OPTION 1: Web3Forms (Easiest - No signup required)
// Get your access key from https://web3forms.com/
// Just enter your email and get an access key instantly
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';

// OPTION 2: EmailJS (More features, requires signup)
// Get your credentials from https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

// Initialize EmailJS (only if credentials are set)
if (EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
}

// Form submission handler
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const submitBtn = document.getElementById('submitBtn');
const submitText = document.getElementById('submitText');
const submitLoader = document.getElementById('submitLoader');

function showMessage(message, type = 'success') {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

function setLoading(isLoading) {
    if (isLoading) {
        submitBtn.disabled = true;
        submitText.style.display = 'none';
        submitLoader.style.display = 'inline';
    } else {
        submitBtn.disabled = false;
        submitText.style.display = 'inline';
        submitLoader.style.display = 'none';
    }
}

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Hide previous messages
        formMessage.style.display = 'none';
        
        // Set loading state
        setLoading(true);
        
        try {
            // Try Web3Forms first (easiest option)
            if (WEB3FORMS_ACCESS_KEY !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        access_key: WEB3FORMS_ACCESS_KEY,
                        subject: 'New Contact Form Message from ' + name,
                        from_name: name,
                        email: email,
                        message: message,
                        to_email: 'kondamadugulasowmya22@gmail.com'
                    })
                });
                
                const result = await response.json();
                
                if (result.success) {
                    showMessage('Thank you for your message! I will get back to you soon.', 'success');
                    contactForm.reset();
                } else {
                    throw new Error(result.message || 'Failed to send message');
                }
            }
            // Try EmailJS if Web3Forms is not configured
            else if (EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
                const response = await emailjs.send(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID,
                    {
                        from_name: name,
                        from_email: email,
                        message: message,
                        to_email: 'kondamadugulasowmya22@gmail.com'
                    }
                );
                
                showMessage('Thank you for your message! I will get back to you soon.', 'success');
                contactForm.reset();
            }
            // Fallback: Use mailto if neither service is configured
            else {
                const subject = encodeURIComponent('Portfolio Contact Form');
                const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
                window.location.href = `mailto:kondamadugulasowmya22@gmail.com?subject=${subject}&body=${body}`;
                showMessage('Opening your email client... If it didn\'t open, please email kondamadugulasowmya22@gmail.com', 'info');
                contactForm.reset();
            }
        } catch (error) {
            // Error handling
            console.error('Form Error:', error);
            showMessage('Sorry, there was an error sending your message. Please try again or email me directly at kondamadugulasowmya22@gmail.com', 'error');
        } finally {
            setLoading(false);
        }
    });
}

// Navbar background on scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Add visible class to hero section immediately
window.addEventListener('load', () => {
    document.querySelector('.hero').style.opacity = '1';
});
