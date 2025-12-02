import KindimLogo from './assets/Logo.png'
import KindimErrorImg from './assets/Errorpage.png'

function ErrorPage() {
    return (
        <>
            {/* Header Section */}
            <header className="header">
                
                {/* Logo */}
                <img src={KindimLogo} className="header-logo" alt="Logo" />

                {/* Title */}
                <span className="header-title">Kindim</span>

                {/* Icons after title */}
                {/* <div className="header-icons">
                <i className="fas fa-home"></i>
                <i className="fas fa-globe"></i>
                <i className="fas fa-user"></i>
                </div> */}

                {/* Login button */}
                <button className="header-btn">Login</button>
            </header>

            {/* Middle Section (404 content) */}
            <section className="middle">
                <div className="middle-content">
                    <h1 className="middle-num">404</h1>
                    <h3 className="middle-title">Page Not Found</h3>

                    <p className="middle-desc">
                        We couldn't find the page you were <br />
                        looking for. It might have been <br />
                        moved or deleted.
                    </p>

                    {/* Buttons */}
                    <button className="middle-reload-btn">Reload Page</button>
                    <button className="middle-home-btn">Go to HomePage</button>
                </div>

                {/* Right image */}
                <img 
                    src={KindimErrorImg}
                    height="300px" 
                    width="300px" 
                    alt="Error" 
                    className="right-img" 
                />
            </section>

            {/* Footer section */}
            <footer className="footer">

                {/* Left footer info */}
                <div className="footer-left">
                    <h3 className="footer-title">Kindim</h3>
                    <p className="footer-desc">
                        Your trusted online marketplace for quality products at great prices.
                    </p>
                </div>

                {/* Right footer quick links */}
                <div className="footer-right">
                    <h3 className="footer-right-title">Quick Links</h3>
                    <a href="#" className="footer-right-nav">Home</a>
                    <a href="#" className="footer-right-nav">Products</a>
                    <a href="#" className="footer-right-nav">About Us</a>
                    <a href="#" className="footer-right-nav">Contact</a>
                </div>
            </footer>
        </>
    );
}

export default ErrorPage;
