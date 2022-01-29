import homeSvg from '../assets/img/home-img.svg'
import aboutSvg from '../assets/img/about-img.svg'
import doc1 from '../assets/img/doc-1.jpg'
import doc2 from '../assets/img/doc-2.jpg'
import doc3 from '../assets/img/doc-3.jpg'
import doc4 from '../assets/img/doc-4.jpg'
import doc5 from '../assets/img/doc-5.jpg'
import doc6 from '../assets/img/doc-6.jpg'
import pic1 from '../assets/img/pic-1.png'
import pic2 from '../assets/img/pic-2.png'
import pic3 from '../assets/img/pic-3.png'
import blog1 from '../assets/img/blog-1.jpg'
import blog2 from '../assets/img/blog-2.jpg'
import blog3 from '../assets/img/blog-3.jpg'
export function AppPage() {
    return (
        <div className="app-page">
            <section class="home" id="home">
                <div class="image">
                    <img src={homeSvg} alt="home img" />
                </div>

                <div class="content">
                    <h3>stay safe, stay healthy</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed autem vero? Magnam, est laboriosam!</p>
                    <a class="btn"> contact us <span class="fas fa-chevron-right"></span> </a>
                </div>
            </section>

            <section class="icons-container">
                <div class="icons">
                    <i class="fas fa-user-md"></i>
                    <h3>140+</h3>
                    <p>doctors at work</p>
                </div>

                <div class="icons">
                    <i class="fas fa-users"></i>
                    <h3>1040+</h3>
                    <p>satisfied patients</p>
                </div>

                <div class="icons">
                    <i class="fas fa-procedures"></i>
                    <h3>500+</h3>
                    <p>bed facility</p>
                </div>

                <div class="icons">
                    <i class="fas fa-hospital"></i>
                    <h3>80+</h3>
                    <p>available hospitals</p>
                </div>
            </section>


            <section class="services" id="services">
                <h1 class="heading"> our <span>services</span> </h1>

                <div class="box-container">

                    <div class="box">
                        <i class="fas fa-notes-medical"></i>
                        <h3>free checkups</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                    </div>

                    <div class="box">
                        <i class="fas fa-ambulance"></i>
                        <h3>24/7 ambulance</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                    </div>

                    <div class="box">
                        <i class="fas fa-user-md"></i>
                        <h3>expert doctors</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                    </div>

                    <div class="box">
                        <i class="fas fa-pills"></i>
                        <h3>medicines</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                    </div>

                    <div class="box">
                        <i class="fas fa-procedures"></i>
                        <h3>bed facility</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                    </div>

                    <div class="box">
                        <i class="fas fa-heartbeat"></i>
                        <h3>total care</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                    </div>
                </div>
            </section>



            <section class="about" id="about">

                <h1 class="heading"> <span>about</span> us </h1>

                <div class="row">

                    <div class="image">
                        <img src={aboutSvg} alt="" />
                    </div>

                    <div class="content">
                        <h3>we take care of your healthy life</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ducimus, quod ex cupiditate ullam in
                            assumenda maiores et culpa odit tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.
                        </p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vero ipsam laborum porro voluptates
                            voluptatibus a nihil temporibus deserunt vel?</p>
                        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                    </div>

                </div>
            </section>


            <section class="doctors" id="doctors">
                <h1 class="heading"> our <span>doctors</span> </h1>
                <div class="box-container">
                    <div class="box">
                        <img src={doc1} alt="" />
                        <h3>john deo</h3>
                        <span>expert doctor</span>
                        <div class="share">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>

                    <div class="box">
                        <img src={doc2} alt="" />
                        <h3>john deo</h3>
                        <span>expert doctor</span>
                        <div class="share">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>

                    <div class="box">
                        <img src={doc3} alt="" />
                        <h3>john deo</h3>
                        <span>expert doctor</span>
                        <div class="share">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>

                    <div class="box">
                        <img src={doc4} alt="" />
                        <h3>john deo</h3>
                        <span>expert doctor</span>
                        <div class="share">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>

                    <div class="box">
                        <img src={doc5} alt="" />
                        <h3>john deo</h3>
                        <span>expert doctor</span>
                        <div class="share">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>

                    <div class="box">
                        <img src={doc6} alt="" />
                        <h3>john deo</h3>
                        <span>expert doctor</span>
                        <div class="share">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="review" id="review">
                <h1 class="heading"> client's <span>review</span> </h1>
                <div class="box-container">
                    <div class="box">
                        <img src={pic1} alt="" />
                        <h3>john deo</h3>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente nihil
                            aperiam? Repellat sequi nisi aliquid perspiciatis libero nobis rem numquam nesciunt alias sapiente
                            minus voluptatem, reiciendis consequuntur optio dolorem!</p>
                    </div>

                    <div class="box">
                        <img src={pic2} alt="" />
                        <h3>john deo</h3>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente nihil
                            aperiam? Repellat sequi nisi aliquid perspiciatis libero nobis rem numquam nesciunt alias sapiente
                            minus voluptatem, reiciendis consequuntur optio dolorem!</p>
                    </div>

                    <div class="box">
                        <img src={pic3} alt="" />
                        <h3>john deo</h3>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente nihil
                            aperiam? Repellat sequi nisi aliquid perspiciatis libero nobis rem numquam nesciunt alias sapiente
                            minus voluptatem, reiciendis consequuntur optio dolorem!</p>
                    </div>

                </div>
            </section>

            <section class="blogs" id="blogs">
                <h1 class="heading"> our <span>blogs</span> </h1>
                <div class="box-container">
                    <div class="box">
                        <div class="image">
                            <img src={blog1} alt="" />
                        </div>
                        <div class="content">
                            <div class="icon">
                                <a href="#"> <i class="fas fa-calendar"></i> 1st may, 2021 </a>
                                <a href="#"> <i class="fas fa-user"></i> by admin </a>
                            </div>
                            <h3>blog title goes here</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
                            <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={blog2} alt="" />
                        </div>
                        <div class="content">
                            <div class="icon">
                                <a href="#"> <i class="fas fa-calendar"></i> 1st may, 2021 </a>
                                <a href="#"> <i class="fas fa-user"></i> by admin </a>
                            </div>
                            <h3>blog title goes here</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
                            <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={blog3} alt="" />
                        </div>
                        <div class="content">
                            <div class="icon">
                                <a href="#"> <i class="fas fa-calendar"></i> 1st may, 2021 </a>
                                <a href="#"> <i class="fas fa-user"></i> by admin </a>
                            </div>
                            <h3>blog title goes here</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
                            <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

