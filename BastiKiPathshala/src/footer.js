document.addEventListener('DOMContentLoaded', function () {
    const footerContent = 
       `<footer class="footer">
        <div class="footer-grid">
            <div class="footer-item">
                <h4>BASTI KI PATHSHALA</h4>
                <p>Empowering children through education in underserved communities.</p>
                <p>Our mission is to break the barriers of education and empower these children with the knowledge and skills they need to build a brighter future.</p>
            </div>
            <div class="footer-item">
                <h4>USEFUL LINKS</h4>
                <a href="index.html">Home</a>
                <a href="projects.html">Projects</a>
                <a href="articles.html">Articles</a>
                <a href="contact.html">Contact</a>
                 <div class="copyright-section">
            <p>&copy; 2023 Basti Ki Pathshala Foundation. </p><p>All rights reserved.</p>
            <p>Follow us on:
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
            </p>
        </div>
            </div>
            <div class="footer-item">
                <h4>CONTACT US</h4>
                <i class="fas fa-home me-3">302, New Delhi, India</i>
                <i class="fas fa-envelope">info@bastikipathshala</i>
                <i class="fas fa-phone-alt">+91 812694xxxx</i>
            </div>
        </div>
       
    </footer>` ;
    document.getElementById("footer-placeholder").innerHTML = footerContent;

});
