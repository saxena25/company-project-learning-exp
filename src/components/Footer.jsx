export default function Footer(){
    return(
        <>
            <div id="footer-container">
                <div id="footer">
                    <div id="contact-us">
                        <div id="left-side-contact-us">
                            <h3>Contact Us!</h3>
                            <p>There are many variations of passages of Lorem Ipsum but the majority have suffered alteration.</p>
                        </div>
                        <div id="right-side-contact-us">
                            <input type="email" placeholder="Email here"/>
                            <button>Send</button>
                        </div>
                    </div>
                    <div id="main-footer">  
                        <div id="footer-logo">
                            <img id="logo-footer" src="/navbarlogo.svg" alt="" />
                            <div id="social-logos">
                                <img src="/facebook.svg" alt="" /> 
                                <img src="/twitter.svg" alt="" />
                                <img src="/linkedin.svg" alt="" />
                                <img src="/pinelogo.svg" alt="" />
                            </div>
                        </div>
                        <div className="footer-links">
                            <h3>Links</h3>
                            <a href="/">Home</a>
                            <a href="/">Pricing</a>
                            <a href="/">Download</a>
                            <a href="/">About</a>
                            <a href="/">Service</a>
                        </div>
                        <div className="footer-links">
                            <h3>Support</h3>
                            <a href="/">FAQ</a>
                            <a href="/">How it</a>
                            <a href="/">Features</a>
                            <a href="/">Contact</a>
                            <a href="/">Reporting</a>
                        </div>
                        <div className="footer-links">
                            <h3>Contact Us</h3>
                            <p>+880 12345678</p>
                            <p>dummymail@gmail.com</p>
                            <p>Delhi</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}