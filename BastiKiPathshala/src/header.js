document.addEventListener('DOMContentLoaded', function () {
    const headerContent = 
`<div class="header-container">
        <div class="social-links">
            <div class="social-box1">
                <a href="#"><i class="fas fa-envelope" style="color: #fff;"></i>info@bastikipathshala.com</a>
                <a href="#"><i class="fas fa-phone-alt" style="color: #fff;"></i>+91 812694xxxx</a>
            </div>
            <div class="social-box2">
                <a href="#"><i class="fab fa-facebook-f" style="color: #fff;"></i></a>
                <a href="#"><i class="fab fa-instagram" style="color: #fff;"></i></a>
                <a href="#"><i class="fab fa-twitter" style="color: #fff;"></i></a>
            </div>

        </div>
        
        <nav class="navbar" id="nav1">
            <div class="logo">
                <a href="#">
                    <img src="../assets/logo6.png" alt="Logo" width="55" height="55"></a>
            </div>
            <div class="navlinks">
                <a href="#">Home</a>
                <a href="#">Projects</a>
                <a href="#">Articles</a>
                <a href="#">Contact</a>
            </div>
        </nav>
    </div>
    <div class="hero-section">
        <div class="hero-text">
            <h1>Volunteer With Us</h1> `;
    document.getElementById("header-placeholder").innerHTML = headerContent;
});

    
