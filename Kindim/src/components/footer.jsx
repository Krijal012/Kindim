export function Footer(){
    return(
        <>
        <div className="footer-spacer">
            <footer className="footer show">
                <div className="footer-container">
                    <div className="footer-left">
                        <h3>Kindim</h3>
                        <p>Your trusted online marketplace for quality products at great prices.</p>
                    </div>
                    <div className="footer-right">
                        <h3>Quick Links</h3>
                        {["Home","Products","About Us","Contact Us"].map((link) => (
                            <a href="#" key={link}>{link}</a>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
        </>
    )
}