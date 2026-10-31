
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>Nova Mobile</h2>
          <p>Your next smartphone starts here.</p>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>

          <a href="mailto:info@novamobile.com">
            Email: info@novamobile.com
          </a>

          <a href="tel:+201000000000">
            Phone: +20 100 000 0000
          </a>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>

          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noreferrer">
            Facebook
          </a>

          <a href="https://www.instagram.com/yourpage" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Nova Mobile. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
