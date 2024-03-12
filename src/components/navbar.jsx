export default function Navbar() {
  return (
    <>
    <div id="bg-img-wrapper">
        <div id="bg-img" style={{backgroundImage: `url(/woman-in-blue.jpg)`, backgroundSize: 'cover',
        backgroundPosition: 'center'}}>
            <div id="navbar">
                <div id='left-side-navbar'>
                    <img src="/navbarlogo.svg" alt="" />
                </div>
                <div id='right-side-navbar'>
                    <a href="/valid/url">Home</a>
                    <a href="/valid/url" >Services Us</a>
                    <a href="#why-us-page" >Why US</a>
                    <a href="/valid/url" >Our Goals</a>
                    <button>Contact Us</button>
                </div>
            </div>
            <div id="front-page">
                <div id="left-side-front">
                    <h1>We Create Learning Experience With Excellent Technology.</h1>
                    <p>Unlimited Access To 100+ World-Class Courses, Hands-On Projects, And Job-Ready Certificate Programs- All Included In Your Subscription</p>
                    <div id="front-btns">
                        <button id='demo-btn'>Book Demo Class</button>
                        <div id="explore-btn">
                            <a href="/valid/url">Explore More →</a>
                        </div>
                    </div>
                </div>
                <div id="right-side-front" style={{backgroundImage:`url(/video-bg.svg)`, backgroundSize: 'cover'}}>
                    <video src={"/video-1.mp4"} controls poster={'/video-thumbnail.jpg'} className='video-poster'/>
                </div>
            </div>
        </div>
    </div>
    <div id="second-page">
        <div id="inside-second-page">
            <div id="upper-box">
                <h1>We Provide various Kind of learning modules for you</h1>
                <p>It Is a Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. 
                    The Point Of Using Lorem
                </p>
            </div>
            <div id="cards">
                <div className="card" >
                    <img src="/left-svg.svg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Learn Anything</h5>
                        <p className="card-text">It Is Long Established Fact That A Reader Will Be Distracted By The Readable</p>
                    </div>
                </div>
                <div className="card">
                    <img src="/center-svg.svg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Flexible Learning</h5>
                        <p className="card-text">It Is Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When</p>
                    </div>
                </div>
                <div className="card">
                    <img src="/right-svg.svg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Expert Connect</h5>
                        <p className="card-text">It Is Long Established Fact That A Reader Will Be Distracted By The Readable</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="why-us-page">
        <div id="all-content">
            <div id="head-content">
                <h1>Why Us</h1>
                <p>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers
                    You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.
                </p>
            </div>
            <div id="body-content">
                <div id="video-2" style={{backgroundImage: `url(/video-bg.svg)`,backgroundSize:'cover'}}>
                    <video src={'/video-1.mp4'} controls  poster={'/video-thumbnail.jpg'}></video>
                </div>
                <div id="body-right-side">
                    <h1>Crafting Your Dream Career: Building a Path You Love With Us</h1>
                    <p>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers
                    You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</p>
                    <p>Our Platform Is Designed To Empower Learners Like You To Excel In Today's Dynamic World.</p>
                    <button>Get More</button>
                </div>
            </div>
        </div>
    </div>
    <div id="records-page">
        <div id="record-page-content">
            <div id="upper-content">
                <h1>We Completed 1200+ Certification Program Successfully & Counting</h1>
                <p>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers
                You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</p>
            </div>
            <div id="all-stats">
                <div className="stats">
                    <div id="stat-img">
                        <img id="circle-tick" src="/checkmark.svg" alt="" />
                    </div>
                    <div id="stat-content">
                        <h3>100+</h3>
                        <p id="batch-complete">Batch Completed</p>
                    </div>
                </div>
                <div className="stats">
                    <div id="stat-img">
                        <img src="/right-tick.svg" alt="" />
                    </div>
                    <div id="stat-content">
                        <h3>50+</h3>
                        <p>Active Batches</p>
                    </div>
                </div>
                <div className="stats">
                    <div id="stat-img">
                        <img src="/user-circle.svg" alt="" />
                    </div>
                    <div id="stat-content">
                        <h3>10,000+</h3>
                        <p>Student Satisfied</p>
                    </div>
                </div>
                <div className="stats">
                    <div id="stat-img">
                        <img src="/user-circle.svg" alt="" />
                    </div>
                    <div id="stat-content">
                        <h3>10+</h3>
                        <p>Course Modules</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="feedback-container">
        <div id="feedback-upper">
            <div id="feedback-content">
                <h1>Our Students Feedback</h1>
                <p>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers
                    You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</p>
            </div>
            <div id="feedback-btn">
                <button>Read More →</button>
            </div>
        </div>
        <div id="feedback-card">
            <div className="fd-card mb-3" style={{margin: '0'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="/photoguy.jpg" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="feedback-card-body">
                            <div id="rating-star">
                                <img src="/star.svg" alt="" />
                                <img src="/star.svg" alt="" />
                                <img src="/star.svg" alt="" />
                                <img src="/star.svg" alt="" />
                                <img src="/star.svg" alt="" />
                            </div>
                            <p className="fd-card-text">"Sed Ut Perspiciatis Uncle Omnis Iste Natus Error Sit Voluptatem Accusantion Doloremque <br />
                            Laudantium,<br />Totam Rem Aperian, Eaque ipsa Quae Ab llio"</p>
                            <h3>Riad Kumar</h3>
                            <p id="pr-manager">Product Manager. <span id="learning-link">@Learning.com</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="home-btn">
        <a href="#navbar">
            <img src="/double-up-arrow.svg" alt="" />
        </a>
    </div>
    </>
  );
}
