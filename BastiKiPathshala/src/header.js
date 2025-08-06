document.addEventListener('DOMContentLoaded', function () {
    const headerContent = 
`<div class="header-container">
        <div class="social-links">
            <div class="social-box1">
                <a href="#"><i class="fas fa-envelope"></i>info@bastikipathshala.com
                    <i class="fas fa-phone-alt"></i><span>+91 812694xxxx</span>
            </div>
            <div class="social-box2">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
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
    