import React from 'react'
import ArrowCircleDownSharpIcon from '@mui/icons-material/ArrowCircleDownSharp';
import ArrowCircleUpSharpIcon from '@mui/icons-material/ArrowCircleUpSharp';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import MoreTimeSharpIcon from '@mui/icons-material/MoreTimeSharp';
export function TimelineFooter({ onNextStep, onPrevStep, onZoomIn, onZoomOut, isZoomIn, setOpenPopup }) {
    return (

        <div className="footer-layout">
            <div className="full footer-layout mobile-footer">
                {isZoomIn ?
                    (<button className="btn-icon-footer flex column align-center justify-center" onClick={onZoomOut}>
                        <ZoomOutIcon />
                        <p>צפייה בשלבים בלבד</p>
                    </button>) :
                    (<button className="btn-icon-footer flex column align-center justify-center" onClick={onZoomIn}>
                        <ZoomInIcon />
                        <p>צפייה בשלבים ותחנות</p>
                    </button>)
                }
                <button className="btn-icon-footer flex column align-center justify-center" onClick={onPrevStep}>
                    <ArrowCircleUpSharpIcon />
                    <p>לתחנה הקודמת</p>
                </button>
                <button className="btn-icon-footer flex column align-center justify-center" onClick={onNextStep}>
                    <ArrowCircleDownSharpIcon />
                    <p>לתחנה הבאה</p>
                </button>
                <button className="btn-icon-footer flex column align-center justify-center" onClick={() => setOpenPopup(true)}>
                    <MoreTimeSharpIcon />
                    <p>עיכוב בתחנה</p>
                </button>
            </div>
        </div >
    )
}

export default TimelineFooter

