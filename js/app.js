let $ = document

const navbarMenuList = $.querySelector('.navbar-list__ul')
const mobileMenu = $.querySelector('.navbar-menus-mobile')
const mobileMenuList = $.querySelector('.mobile-navbar-list__ul')
const mobileMenuIcon = $.querySelector('.mobile-menu-icon')
const header = $.querySelector('header')
let menuItems = ['Home', 'Pricing', 'About Us', 'Contact']


menuItems.forEach((item, index) => {
    navbarMenuList.insertAdjacentHTML('beforeend', `<li class="navbar-list__li mx-1"><a href="#" onclick='showInnerHtml(${index})'>${item}</a></li>`)
    mobileMenuList.insertAdjacentHTML('beforeend', `<li class="mobile-navbar-list__li mx-1"><a href="#" onclick='showInnerHtml(${index})'>${item}</a></li>`)
})

document.addEventListener('click', event => {
    if (mobileMenuIcon.contains(event.target)) {
        mobileMenu.style.transform = 'translatex(0)'
    } else {
        mobileMenu.style.transform = 'translatex(-300px)'
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 762) {
        mobileMenu.style.transform = 'translatex(-300px)'
    }
})

let showInnerHtml = (index) => {
    header.innerHTML = ''
    if (index === 0) {
        header.insertAdjacentHTML('beforeend', `<div class="header-home">
        <div class="row flex-wrap-reverse align-items-center">
            <div class="header-home__left col-12 col-lg-6 px-5 px-lg-0 mb-5">
                <span class="header-home__left-off fs-6 text-secondary fw-bold">FREE 30 DAYS TRIAL</span>
                <h1 class="header-home__left-title">The best way
                    to showcase
                    your project.</h1>
                    <p class="header-home__left-text fs-6 text-secondary">Here you can put a short description about your project.</p>
                    <button class="btn btn-primary home-btn">tree for free</button>
                    <button class="btn btn-outline-dark home-btn">See how it works</button>
            </div>
            <div class="header-home__right col-12 col-lg-6">
                <img src="image/home-img.png" alt="home-img" style="width: 100%;">
            </div>
        </div>
        <p class="text-md-center d-none d-sm-block py-5 mt-3 fs-6 text-primary-emphasis">Trusted by individuals and teams at the world's best companies</p>
    </div>`)
    }
    if (index === 1) {
        header.insertAdjacentHTML('beforeend', `<div class="header-pricing pt-4 pb-5 pb-lg-0 text-center">
        <h2 class="header-pricing__title my-3 fs-1">Pricing</h2>
        <span class="header-pricing__text fs-4">Our pricing is not expensive, but it's not cheap either, it's exactly what it should be</span>
        
        <div class="row mx-2 mt-4 justify-content-center">
        
            <div class="pricong-count col-11 col-md-10 col-lg-4 bg-white text-start my-2 p-5">
                <span class="pricong-count__title">Basic</span>
                <h3 class="pricong-count__price">9</h3>
                <p class="pricong-count__text mt-5 pt-3 fs-5">For individuals and small teams</p>
                <div class="d-flex justify-content-center">
                    <button class="btn price-btn py-3 btn-outline-dark">Get Started with Basic</button>
                </div>

            </div>
            <div class="pricong-count pricong-count__center col-11 col-md-10 col-lg-4 bg-white text-start my-2 p-5">
                <span class="pricong-count__title">Pro</span>
                <h3 class="pricong-count__price">19</h3>
                <p class="pricong-count__text mt-5 pt-3 fs-5">For startups and growing businesses</p>
                <div class="d-flex justify-content-center">
                    <button class="btn price-btn py-3 btn-primary">Get Started with Basic</button>
                </div>

            </div>
            <div class="pricong-count col-11 col-md-10 col-lg-4 bg-white text-start my-2 p-5">
                <span class="pricong-count__title">Business</span>
                <h3 class="pricong-count__price">99</h3>
                <p class="pricong-count__text mt-5 pt-3 fs-5">For organizations with advanced needs</p>
                <div class="d-flex justify-content-center">
                    <button class="btn price-btn py-3 btn-outline-dark">Get Started with Basic</button>
                </div>

            </div>

        </div>
    </div>`)
    }
    if (index === 2) {
        header.insertAdjacentHTML('beforeend', `<div class="about mt-5 pt-5 pt-md-0 text-center">
        <h2 class="about-title fs-1">About us</h2>
        <h2 class="about-text text-secondary fs-5 px-1 mt-3">Here you can talk about your team and why people should join your company</h2>
        <img class="about-img mt-3" src="image/aboutus.png" alt="about us">
    </div>`)
    }
    if (index === 3) {
        header.insertAdjacentHTML('beforeend', `             <div class="contact my-4">
        <div class="row">
            <div class="contact-left col-12 col-lg-7">
                <img style="width: 100%;" class="contact-left__img" src="image/contact.png" alt="">
            </div>
            <div class="contact-right d-flex flex-column justify-content-center col-12 px-4 py-5 col-lg-5 pb-lg-0">
                <h2 class="contact-right__title">Contact us</h2>
                <span class="contact-right__text mt-3">Explore the future with us. 
                    Feel free to get in touch.</span>
                    <form class="mt-4">
                        <div class="form-group">
                          <label for="nameInput">Name</label>
                          <input type="text" class="form-control py-3 mt-2" id="nameInput" placeholder="Full Name">
                        </div>
                        <div class="form-group mt-4">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control py-3 mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                          </div>
                          <div class="form-group mt-4">
                            <label for="inputMessage">Message</label>
                            <input type="text" class="form-control py-3 mt-2" id="inputMessage" placeholder="How can we get better?">
                          </div>
                          
                          <button type="submit" class="btn btn-primary mt-4 py-3" style="width: 100%;">Submit</button>
                    </form>
            </div>
        </div>
    </div>`)
    }

}

