import React from 'react';
import { VerticalTimeline, VerticalTimelineElement, } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jun 2022 - Current"
                    iconStyle={{ background: '#11a83e', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">IT Admin - Home Association</h3>
                    <h4 className="vertical-timeline-element-subtitle">Gothenburg, Sweden</h4>
                    <p>Administration of home associations IT, cyber security, webpage management & user registration</p>

                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jun 2022 - Dec 2023"
                    iconStyle={{ background: '#11a83e', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">.Net Software Engineer - Di&aacute; tom os</h3>
                    <h4 className="vertical-timeline-element-subtitle">Gothenburg, Sweden</h4>
                    <p>System and software development with Unity framework, mixed with project management and scrum responsibilities </p>

                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Aug 2020 - June 2022"
                    iconStyle={{ background: '#3e497a', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">IT H&ouml;gskolan Gothenburg - Sweden</h3>
                    <h4>Higher Vocational Degree in Java Development</h4>
                    <p>Studied mainly Java focusing on System Development but also SQL, JavaScript, HTML, CSS and Docker </p>

                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Apr 2018 - Jun 2022"
                    iconStyle={{ background: '#11a83e', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Facilitymanagement - Breas AB</h3>
                    <h4 className="vertical-timeline-element-subtitle">Gothenburg, Sweden</h4>
                    <p>Facility management covering everything from installation of software to chemical waste management</p>

                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Apr 2015 - Nov 2018"
                    iconStyle={{ background: '#11a83e', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Backend Support - Sykes Telenor</h3>
                    <h4 className="vertical-timeline-element-subtitle">Gothenburg, Sweden</h4>
                    <p>Customer support, backend support for the customer support, this role needed a deep
                        technical understanding of the support software.</p>

                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Aug 2014 - Apr 2015"
                    iconStyle={{ background: '#11a83e', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Tank Mechanic - Swedish Armed Forces</h3>
                    <h4 className="vertical-timeline-element-subtitle">Sweden</h4>
                    <p>Basic military training with specialixed education for electrical, digital and mechanical service & repair of tanks</p>

                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Jun 2011 - Jun 2014"
                    iconStyle={{ background: '#3e497a', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Lerums Highschool - Sweden</h3>
                    <h4>Highschool Degree in IT</h4>
                    <p>Basic programming in HTML and CSS, PCB, Windows Server & telecommunication</p>

                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    )
}

export default Experience;