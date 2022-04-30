import homeSvg from '../assets/img/home-img.svg'
import aboutSvg from '../assets/img/about-img.svg'
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
                    <h3 className="right">ברוכים הבאים</h3>
                    <p>אפליקציית MY-ALL נועדה ללוות את תהליך הטיפול וההחלמה בקרב ילדים חולי לוקמיה</p>
                    <a className="btn"> להרשמה <span className="fas fa-chevron-right"></span> </a>
                </div>
            </section>

            {/* <section className="icons-container">
                <div className="icons">
                    <i className="fas fa-user-md"></i>
                    <h3>1+</h3>
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
            </section> */}

            <section className="about" id="about">

                <h1 className="heading"> <span>קצת</span> עלינו </h1>

                <div className="row">

                    <div className="image">
                        <img src={aboutSvg} alt="" />
                    </div>

                    <div className="content">
                        <h3 className="right">המטרה שלנו</h3>
                        <p>אפליקציית MY-ALL נועדה לאפשר למטופלים ולמשפחותיהם הנגשה לקבלת מידע רפואי מהימן אודות מחלת הלוקמיה וגם אפשרות למעקב אחר התהליך אותו עובר המטופל במהלך הטיפול</p>


                        <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
                    </div>

                </div>
            </section>

            <section className="services" id="services">
                <h1 className="heading"> השירותים <span>שלנו</span> </h1>

                <div className="box-container">

                    <div className="box">
                        <i className="fas fa-notes-medical"></i>
                        <h3 className="right">מסלול מעקב</h3>
                        <p>אפשרות למעקב אחר מצבו של המטופל בטיפול ע״י מסלול עם מידע רלוונטי עבור כל תחנה ושלב בטיפול.</p>
                        {/* <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a> */}
                    </div>

                    <div className="box">
                        <i className="fas fa-ambulance"></i>
                        <h3 className="right">ביקורים וסדנאות</h3>
                        <p>ניהול יומן ביקורים וסדנאות בנושא הטיפול.</p>
                        {/* <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a> */}
                    </div>

                    <div className="box">
                        <i className="fas fa-user-md"></i>
                        <h3 className="right">רשימת קשר</h3>
                        <p>ניהול רשימת קשר של אנשי צוות הרפואי שאליהם ניתן לפנות למתן שאלות וקבלת תשובות.</p>
                        {/* <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a> */}
                    </div>

                    <div className="box">
                        <i className="fas fa-pills"></i>
                        <h3 className="right">מעקב תרופתי</h3>
                        <p>מעקב תרופתי אחר נטילת תרופות הטיפול במהלך היום יום.</p>
                        {/* <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a> */}
                    </div>

                    <div className="box">
                        <i className="fas fa-procedures"></i>
                        <h3 className="right">סרטוני הסבר</h3>
                        <p>סרטוני הסבר המאפשרים הנגשה והסברה אודות הטיפול עבור המטופל.</p>
                        {/* <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a> */}
                    </div>

                    <div className="box">
                        <i className="fas fa-heartbeat"></i>
                        <h3 className="right">סיפורי הצלחה וטיפים</h3>
                        <p>סיפורי הצלחה וטיפים של הורים וילדים אשר עברו את התהליך.</p>
                        {/* <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a> */}
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

            {/* <section className="blogs" id="blogs">
                <h1 className="heading"> מחקרים <span>שפורסמו</span> </h1>
                <div className="box-container">
                    <div className="box">
                        <div className="image">
                            <img src={blog1} alt="" />
                        </div>
                        <div className="content">
                            <div className="icon">
                                <a href="#"> <i className="fas fa-calendar"></i> 1st may, 2022 </a>
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
                                <a href="#"> <i className="fas fa-calendar"></i> 1st may, 2022 </a>
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
                                <a href="#"> <i className="fas fa-calendar"></i> 1st may, 2022 </a>
                                <a href="#"> <i className="fas fa-user"></i> by admin </a>
                            </div>
                            <h3>blog title goes here</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
                            <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
                        </div>
                    </div>
                </div>
            </section> */}

        </div>
    )
}

