import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import './Navbar.css'

function Navbar({ cartCount }) {
  const {language, toggleLanguage} = useContext(LanguageContext)
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Nova Mobile
      </Link>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </div>
<div className="language-dropdown">
<select
value={language}
onChange={(e) => {
if(e.target.value !== language ) {toggleLanguage()
}
}}
>
<option value="en">EN</option>
<option value="ar">AR</option>
</select>
</div>

      <Link to="/cart" className="cart-link">
        <ShoppingCart size={22} />
        <span>{cartCount}</span>
      </Link>
    </nav>
  )
}

export default Navbar