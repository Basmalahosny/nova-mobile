import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import './Home.css'

const containerVariants = {
    hidden: {},
    visible: {
        transition:{
            staggerChildren:0.2
        }
    }
}
const cardVariants= {
    hidden: {
    opacity: 0,
        y: 100
    },
visible:{
    opacity:1,
    y:0,
    transition:{
        duration:0.8
    }
}
}
function Home() {
    return (
        <main className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>
                        Discover Your Next Smartphone
                    </h1>
                    <p>Explore the latest smartphones and find
                        the perfect device for your lifestyle.</p>
                    <Link to="/products">
                        Shop Now
                    </Link>
                </div>
                <div className="hero-image">
                    <img
                        src="/iPhone-18-12.webp"
                        alt="Premium smartphones"
                    />
                </div>
            </section>
            <section className="why-choose">
                <h2>Why Choose Nova Mobile?</h2>
                <p className="why-description">
                    We Make Finding Your Perfect Smartphone Easier
                </p>
                <div className="features">
                    <div className="feature-card">
                        <h3>Best Prices</h3>
                        <p>Enjoy Great Smartphones At Competitive Prices.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Trusted Quality</h3>
                        <p>Discover reliable Devices from trusted Brands.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Wide Collection </h3>
                        <p>Explore a Variety of Smartphones In one Place.</p>
                    </div>
                </div>
            </section>
            <section className="shopping-services">
                <h2>Our Shopping Services</h2>

                <motion.div
                 className="services-container"
                 variants={containerVariants}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{once:true}}
                 >

                    <motion.div
                        className="service-card"
                        variants={cardVariants}
                    >
                        <h3>Home Delivery</h3>
                        <p>Get your favorite smartphone delivered to your doorstep.</p>
                    </motion.div>

                    <motion.div
                        className="service-card"
                        variants={cardVariants}
                    >
                        <h3>Visa Payment</h3>
                        <p>Enjoy easy and convenient payment using your Visa card.</p>
                    </motion.div>

                    <motion.div
                        className="service-card"
                        variants={cardVariants}
                    >
                        <h3>Cash on Delivery</h3>
                        <p>Pay for your order when it arrives at your door.</p>
                    </motion.div>

                    <motion.div
                        className="service-card"
                       variants={cardVariants}
                    >
                        <h3>Product Warranty</h3>
                        <p>Shop with confidence with a warranty on our smartphones.</p>
                    </motion.div>
                    </motion.div>  {/* services-container */}
                    </section>   {/* shopping-services */}
        </main>
    )
}

export default Home