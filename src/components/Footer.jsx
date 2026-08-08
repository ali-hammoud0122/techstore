
import '../style/footer.css';
function Footer(){

    return(
    <footer className="footer">
        <div className='leftf'>
        <h5>Tech Store</h5>
        <p>Your trusted destination for the latest tech.</p>
</div>
 <div className='middlef'>
        
       
             <h5>Quick Links</h5>
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="#about">About Us</a>
       
</div>
<div className='lastf'>
<p>&copy; 2026 TechStore. All rights reserved.</p>
</div>
</footer>

    );
}
export default Footer;