import React from 'react'
import ArrowCircleDownSharpIcon from '@mui/icons-material/ArrowCircleDownSharp';
import ArrowCircleUpSharpIcon from '@mui/icons-material/ArrowCircleUpSharp';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

export function TimelineFooter({ onNextStep, onPrevStep, onZoomIn, onZoomOut, isZoomIn }) {
    return (

        <div className="footer-layout">
            <div className="full footer-layout mobile-footer">

                <button className="btn-icon-footer" onClick={onNextStep}>
                    <ArrowCircleUpSharpIcon />
                    <p>לתחנה הקודמת</p>
                </button>
                {isZoomIn ?
                    (<button className="btn-icon-footer soon" onClick={onZoomOut}>
                        <ZoomOutIcon />
                        <p>צפייה בשלבים בלבד</p>
                    </button>) :
                    (<button className="btn-icon-footer soon" onClick={onZoomIn}>
                        <ZoomInIcon />
                        <p>צפייה בשלבים ותחנות</p>
                    </button>)
                }
                <button className="btn-icon-footer soon" onClick={onPrevStep}>
                    <ArrowCircleDownSharpIcon />
                    <p>לתחנה הבאה</p>
                </button>
            </div>
        </div >
    )
}

export default TimelineFooter

