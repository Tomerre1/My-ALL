import React from 'react'
import ArrowCircleDownSharpIcon from '@mui/icons-material/ArrowCircleDownSharp';
import ArrowCircleUpSharpIcon from '@mui/icons-material/ArrowCircleUpSharp';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
export function Footer({ onNextStep, onPrevStep, backHome }) {
    return (

        <div className="footer-layout">
            <div className="full footer-layout mobile-footer">

                <button className="btn-icon-footer" onClick={onNextStep}>
                    <ArrowCircleUpSharpIcon />
                    <p>לתחנה הבאה</p>
                </button>
                <button className="btn-icon-footer" onClick={backHome} >
                    <HomeOutlinedIcon />
                    <p>הבית</p>
                </button>
                <button className="btn-icon-footer soon" onClick={onPrevStep}>
                    <ArrowCircleDownSharpIcon />

                    <p>לתחנה קודמת</p>
                    {/* <span className="coming-soon">
                        בקרוב
                    </span> */}
                </button>
                {/* <button className="btn-icon-footer">
                    <div className="cart-icon">
                        <img src={cart} alt="cart icon" />
                        <span class="badge">9</span>
                    </div>
                    <p>סל הקניות</p>
                </button> */}
            </div>
        </div >
    )
}

export default Footer

