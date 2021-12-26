html,
    body {
    margin: 0;
    padding: 0;
    background: #eee;
}
.App {
    font - family: sans - serif;
    text - align: center;
    /* display: flex;
    justify-content: space-around;
    flex-direction: column; */
}

/* CUSTOM LINE COLOR */
/* The line */
.vertical - timeline::after {
    background: #424242;
}
.done.vertical - timeline.vertical - timeline - custom - line::before {
    background: #424242;
}
.undone.vertical - timeline.vertical - timeline - custom - line::before {
    background: white;
}
/* .vertical-timeline {
  width: 100% !important;
} */

.done,
.undone {
    margin: unset;
}
/* Icon container's border */
.done.vertical - timeline.vertical - timeline - custom - line
    .vertical - timeline - element - icon {
    box - shadow: 0 0 0 4px #1976d2, inset 0 2px 0 rgba(0, 0, 0, 0.08),
        0 3px 0 4px rgba(0, 0, 0, 0.05);
}

import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import StarIcon from "@material-ui/icons/Star";
import "react-vertical-timeline-component/style.min.css";
import "./styles.css";

export default function App() {
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <VerticalTimeline>
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
            </VerticalTimeline>
        </div>
    );
}
