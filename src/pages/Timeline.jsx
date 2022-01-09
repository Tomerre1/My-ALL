
import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import InfoIcon from '@mui/icons-material/Info';
import MedicationIcon from '@mui/icons-material/Medication';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

import "react-vertical-timeline-component/style.min.css";

export function Timeline() {
    const path = [
        [
            {
                levelNumber: 1,
                description: 'tomer tomer',
                isDone: true,

            },
            {
                stepNumber: 1,
                levelNumber: 1,
                description: 'tomer tomer',
                date: '2020-01-01',
                requirements: 'צום',
                isDone: true,
            },
            {
                stepNumber: 2,
                levelNumber: 1,
                description: 'tomer tomer',
                date: '2020-01-02',
                requirements: 'ללא צום',
                isDone: true,
            },
            {
                stepNumber: 3,
                levelNumber: 1,
                description: 'tomer omer',
                date: '2020-01-03',
                requirements: 'ללא צום',
                isDone: true,
            },
        ],
        [
            {
                levelNumber: 2,
                description: 'tomer tomer',
                isDone: true,
                date: '2020-01-01',
            },
            {
                stepNumber: 1,
                levelNumber: 2,
                description: 'tomer tomer',
                date: '2020-02-01',
                requirements: 'צום',
                isDone: true,
            },
            {
                stepNumber: 2,
                levelNumber: 2,
                description: 'tomer tomer',
                date: '2020-02-02',
                requirements: 'ללא צום',
                isDone: true,
            },
            {
                stepNumber: 3,
                levelNumber: 2,
                description: 'tomer omer',
                date: '2020-02-03',
                requirements: 'ללא צום',
                isDone: true,
            },
        ],
        [
            {
                levelNumber: 3,
                description: 'tomer tomer',
                isDone: true,
                date: '2020-01-01',
            },
            {
                stepNumber: 1,
                levelNumber: 3,
                description: 'tomer tomer',
                date: '2020-01-01',
                requirements: 'צום',
            },
            {
                stepNumber: 2,
                levelNumber: 3,
                description: 'tomer tomer',
                date: '2020-01-02',
                requirements: 'ללא צום',
            },
            {
                stepNumber: 3,
                levelNumber: 3,
                description: 'tomer omer',
                date: '2020-01-03',
                requirements: 'ללא צום',
            },
        ],
        [
            {
                levelNumber: 4,
                isDone: false,
                description: 'done progress',
                date: '2025-01-02'
            }
        ]
    ]
    
    return (
        <div className="time-line-container">
            <h1>מסלול ההתקדמות שלי</h1>
            <VerticalTimeline>
                {path.map((steps, stepIdx) => (
                    steps.map((step, idx) => {
                        if (idx === 0) {
                            //show level
                            return <VerticalTimelineElement
                                className={`${(step.isDone && !(stepIdx === path.length - 1)) ? 'done' : 'undone'} ${(stepIdx === path.length - 1) ? '' : 'vertical-timeline-element--work vertical-timeline vertical-timeline-custom-line'}`}
                                contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                                contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                                date={step.date}
                                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                                icon={(stepIdx === path.length - 1) ? <StarIcon /> : <LocalHospitalIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">שלב {step.levelNumber}</h3>
                                <p style={{ color: 'white' }}>{step.description}</p>
                            </VerticalTimelineElement>
                        }
                        //show step
                        return <VerticalTimelineElement
                            className={`${step.isDone ? 'done' : 'undone'} vertical-timeline vertical-timeline-custom-line vertical-timeline-element--education`}
                            date={step.date}
                            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                            icon={<MedicationIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">שלב {step.levelNumber}</h3>
                            {step.stepNumber && <h4 className="vertical-timeline-element-subtitle">מספר תחנה {step.stepNumber}</h4>}
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