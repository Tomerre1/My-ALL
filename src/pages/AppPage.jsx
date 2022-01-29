import homeSvg from '../assets/img/home-img.svg'
import aboutSvg from '../assets/img/about-img.svg'
import doc1 from '../assets/img/doc-1.jpg'
import doc2 from '../assets/img/doc-2.jpg'
import doc3 from '../assets/img/doc-3.jpg'
import doc4 from '../assets/img/doc-4.jpg'
import doc5 from '../assets/img/doc-5.jpg'
import doc6 from '../assets/img/doc-6.jpg'
import blog1 from '../assets/img/blog-1.jpg'
import blog2 from '../assets/img/blog-2.jpg'
import blog3 from '../assets/img/blog-3.jpg'
export function AppPage() {
    return (
        <div className="app-page">
            <section className="home" id="home">
                <div className="image">
                    <img src={homeSvg} alt="home img" />
                </div>

                <div className="content">
                    <h3>stay safe, stay healthy</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed autem vero? Magnam, est laboriosam!</p>
                    <a className="btn"> contact us <span className="fas fa-chevron-right"></span> </a>
                </div>
            </section>

            <section className="icons-container">
                <div className="icons">
                    <i className="fas fa-user-md"></i>
                    <h3>140+</h3>
                    <p>doctors at work</p>
                </div>

                <div className="icons">
                    <i className="fas fa-users"></i>
                    <h3>1040+</h3>
                    <p>satisfied patients</p>
                </div>

                <div className="icons">
                    <i className="fas fa-procedures"></i>
                    <h3>500+</h3>
                    <p>bed facility</p>
                </div>

                <div className="icons">
                    <i className="fas fa-hospital"></i>
                    <h3>80+</h3>
                    <p>available hospitals</p>
                </div>
            </section>


            <section className="services" id="services">
                <h1 className="heading"> our <span>services</span> </h1>

                <div className="box-container">

                    <div className="box">
                        <i className="fas fa-notes-medical"></i>
                        <h3>free checkups</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                        <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
                    </div>

                    <div className="box">
                        <i className="fas fa-ambulance"></i>
                        <h3>24/7 ambulance</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                        <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
                    </div>

                    <div className="box">
                        <i className="fas fa-user-md"></i>
                        <h3>expert doctors</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                        <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
                    </div>

                    <div className="box">
                        <i className="fas fa-pills"></i>
                        <h3>medicines</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                        <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
                    </div>

                    <div className="box">
                        <i className="fas fa-procedures"></i>
                        <h3>bed facility</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                        <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
                    </div>

                    <div className="box">
                        <i className="fas fa-heartbeat"></i>
                        <h3>total care</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                        <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
                    </div>
                </div>
            </section>



            <section className="about" id="about">

                <h1 className="heading"> <span>about</span> us </h1>

                <div className="row">

                    <div className="image">
                        <img src={aboutSvg} alt="" />
                    </div>

                    <div className="content">
                        <h3>we take care of your healthy life</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ducimus, quod ex cupiditate ullam in
                            assumenda maiores et culpa odit tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.
                        </p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vero ipsam laborum porro voluptates
                            voluptatibus a nihil temporibus deserunt vel?</p>
                        <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
                    </div>

                </div>
            </section>


            {/* <section className="doctors" id="doctors">
                <h1 className="heading"> our <span>doctors</span> </h1>
                <div className="box-container">
                    <div className="box">
                        <img src={doc1} alt="" />
                        <h3>john deo</h3>
                        <span>expert doctor</span>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={doc2} alt="" />
                        <h3>john deo</h3>
                        <span>expert doctor</span>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={doc3} alt="" />
                        <h3>john deo</h3>
                        <span>expert doctor</span>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={doc4} alt="" />
                        <h3>john deo</h3>
                        <span>expert doctor</span>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={doc5} alt="" />
                        <h3>john deo</h3>
                        <span>expert doctor</span>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={doc6} alt="" />
                        <h3>john deo</h3>
                        <span>expert doctor</span>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="blogs" id="blogs">
                <h1 className="heading"> our <span>blogs</span> </h1>
                <div className="box-container">
                    <div className="box">
                        <div className="image">
                            <img src={blog1} alt="" />
                        </div>
                        <div className="content">
                            <div className="icon">
                                <a href="#"> <i className="fas fa-calendar"></i> 1st may, 2021 </a>
                                <a href="#"> <i className="fas fa-user"></i> by admin </a>
                            </div>
                            <h3>blog title goes here</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
                            <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={blog2} alt="" />
                        </div>
                        <div className="content">
                            <div className="icon">
                                <a href="#"> <i className="fas fa-calendar"></i> 1st may, 2021 </a>
                                <a href="#"> <i className="fas fa-user"></i> by admin </a>
                            </div>
                            <h3>blog title goes here</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
                            <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={blog3} alt="" />
                        </div>
                        <div className="content">
                            <div className="icon">
                                <a href="#"> <i className="fas fa-calendar"></i> 1st may, 2021 </a>
                                <a href="#"> <i className="fas fa-user"></i> by admin </a>
                            </div>
                            <h3>blog title goes here</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
                            <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

