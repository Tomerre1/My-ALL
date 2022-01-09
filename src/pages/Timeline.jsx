
import React, { useEffect, useState } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
// import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";
// import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
// import InfoIcon from '@mui/icons-material/Info';
import MedicationIcon from '@mui/icons-material/Medication';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { timelineService } from '../services/timeline.service';
import Swal from 'sweetalert2'

import "react-vertical-timeline-component/style.min.css";
import { useSelector } from "react-redux";

export function Timeline(props) {
    const [path, setPath] = useState([])
    const currUser = useSelector(state => state.userReducer.user)
    const [isLastStep, setIsLastStep] = useState(false)

    useEffect(() => {
        if (!currUser) props.history.push('/auth')
        async function queryUserTimeline() {
            const timeline = await timelineService.query(currUser);
            const currLevel = timeline.find(steps => steps.find(step => step.isCurrStep))
            const currLevelIndex = timeline.findIndex(level => level === currLevel)
            const userCurrStepIndex = currLevel.findIndex(step => step.isCurrStep)
            if (currLevelIndex >= path.length - 1 && userCurrStepIndex === currLevel.length - 1) {
                setIsLastStep(true)
            }
            setPath(timeline);
        }
        queryUserTimeline();
        return () => { }
    }, [])

    const onNextStep = async () => {
        const result = await Swal.fire({
            title: 'מעבר תחנה',
            text: 'האם תרצה לעבור לתחנה הבא?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'כן',
            cancelButtonText: 'לא'
        })
        
        if (result.value) {
            const currLevel = path.find(steps => steps.find(step => step.isCurrStep))
            const currLevelIndex = path.findIndex(level => level === currLevel)
            const userCurrStepIndex = currLevel.findIndex(step => step.isCurrStep)
            let userNextStep, isNextLevel = false, nextLevel = false;
            //same level diffrent step
            if (userCurrStepIndex + 1 <= currLevel.length - 1) {
                userNextStep = currLevel[userCurrStepIndex + 1]
            }
            // need to move next level and next step
            else {
                if (path.length - 1 >= currLevelIndex + 1) {
                    const nextLevelNumber = path[currLevelIndex + 1]
                    isNextLevel = true
                    nextLevel = currLevelIndex + 1
                    userNextStep = nextLevelNumber[1]
                }
                else {
                    userNextStep = currLevel[userCurrStepIndex + 1]
                    if (currLevelIndex >= path.length - 1 && userCurrStepIndex === currLevel.length - 1) {
                        setIsLastStep(true)
                    }
                    return
                }
            }
            const timeline = await timelineService.moveNext(currUser, userNextStep, isNextLevel, nextLevel);
            setPath(timeline)
        }
    }

    const onPrevStep = () => {
        Swal.fire({
            title: 'מעבר תחנה',
            text: 'האם תרצה לעבור לתחנה הקודמת?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'כן',
            cancelButtonText: 'לא'
        }).then(async (result) => {
            if (result.value) {
                const currLevel = path.find(steps => steps.find(step => step.isCurrStep))
                const currLevelIndex = path.findIndex(level => level === currLevel)
                const userCurrStepIndex = currLevel.findIndex(step => step.isCurrStep)
                let userNextStep, isNextLevel = false, nextLevel = false;
                //same level diffrent step
                if (userCurrStepIndex + 1 <= currLevel.length - 1) {
                    userNextStep = currLevel[userCurrStepIndex + 1]
                }
                // need to move next level and next step
                else {
                    if (path.length - 1 >= currLevelIndex + 1) {
                        const nextLevelNumber = path[currLevelIndex + 1]
                        isNextLevel = true
                        nextLevel = currLevelIndex + 1
                        userNextStep = nextLevelNumber[1]
                    }
                    else {
                        userNextStep = currLevel[userCurrStepIndex + 1]
                        if (currLevelIndex >= path.length - 1 && userCurrStepIndex === currLevel.length - 1) {
                            setIsLastStep(true)
                        }
                        return
                    }
                }
                const timeline = await timelineService.moveNext(currUser, userNextStep, isNextLevel, nextLevel);
                setPath(timeline)
            }
        })
    }


    return (
        <div className="time-line-container">
            <h1>מסלול ההתקדמות {currUser.fullname}</h1>
            <div>
                <button onClick={onNextStep}>תחנה קדימה</button>
                <button onClick={onPrevStep}>תחנה אחורה</button>
            </div>
            <VerticalTimeline>
                {path.map((steps, stepIdx) => (
                    steps.map((step, idx) => {
                        if (idx === 0) {
                            //show level
                            return <VerticalTimelineElement
                                key={step.description + idx}
                                className={`${(step.isDone) ? 'done' : 'undone'} vertical-timeline vertical-timeline-custom-line `}
                                contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                                contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                                icon={<LocalHospitalIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">שלב {step.levelNumber}</h3>
                                <p style={{ color: 'white' }}>{step.description}</p>
                            </VerticalTimelineElement>
                        }
                        //show step
                        return <VerticalTimelineElement
                            key={step.description + idx}
                            className={`${step.isDone || isLastStep ? 'done' : 'undone'} ${((stepIdx === path.length - 1) && (steps.length - 1 === idx)) ? '' : `vertical-timeline vertical-timeline-custom-line  `} ${isLastStep && ((stepIdx === path.length - 1) && (steps.length - 1 === idx)) ? 'laststep vertical-timeline' : ''}`}
                            date={new Date(step.date).toLocaleDateString('he-IL')}
                            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                            contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                            contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
                            icon={(stepIdx === path.length - 1) && (steps.length - 1 === idx) ? <StarIcon /> : <MedicationIcon />}
                        >
                            <h4 className="vertical-timeline-element-subtitle">מספר תחנה {step.stepNumber}</h4>
                            <p>{step.description}</p>
                        </VerticalTimelineElement>
                    }
                    )
                ))}
            </VerticalTimeline>
        </div >
    );
}









{/* <VerticalTimeline>
    <VerticalTimelineElement
        className="done vertical-timeline-element--work vertical-timeline vertical-timeline-custom-line "
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<WorkIcon />}
    >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
        </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="done vertical-timeline vertical-timeline-custom-line vertical-timeline-element--work"
        date="2010 - 2011"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<WorkIcon />}
    >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
        </h4>
        <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
        </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="done vertical-timeline vertical-timeline-custom-line vertical-timeline-element--work"
        date="2008 - 2010"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<WorkIcon />}
    >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
        </h4>
        <p>User Experience, Visual Design</p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="undone vertical-timeline vertical-timeline-custom-line vertical-timeline-element--work"
        date="2006 - 2008"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<WorkIcon />}
    >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
        </h4>
        <p>User Experience, Visual Design</p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="undone vertical-timeline vertical-timeline-custom-line vertical-timeline-element--education"
        date="April 2013"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<SchoolIcon />}
    >
        <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>Strategy, Social Media</p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="undone vertical-timeline vertical-timeline-custom-line vertical-timeline-element--education"
        date="November 2012"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<SchoolIcon />}
    >
        <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Certification</h4>
        <p>Creative Direction, User Experience, Visual Design</p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="undone vertical-timeline vertical-timeline-custom-line vertical-timeline-element--education"
        date="2002 - 2006"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<SchoolIcon />}
    >
        <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
        </h4>
        <p>Creative Direction, Visual Design</p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<StarIcon />}
    />
</VerticalTimeline> */}