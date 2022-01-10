import React from 'react'

export function Footer() {
    return (

        <div className="footer-layout">
            <div className="full footer-layout mobile-footer">
                <button className="btn-icon-footer" >
                    {/* <img src={home} alt="home icon" /> */}
                    <p>הבית</p>
                </button>
                <button className="btn-icon-footer">
                    {/* <img src={search} alt="search icon" /> */}
                    <p>חפש שירות</p>
                </button>
                <button className="btn-icon-footer soon" >
                    {/* <img src={myaccount} alt="my-account icon" /> */}
                    <p>החשבון שלי</p>
                    <span className="coming-soon">
                        בקרוב
                    </span>
                </button>
                <button className="btn-icon-footer">
                    <div className="cart-icon">
                        {/* <img src={cart} alt="cart icon" /> */}
                        <span class="badge">9</span>
                    </div>
                    <p>סל הקניות</p>
                </button>
            </div>
        </div >
    )
}

export default Footer

