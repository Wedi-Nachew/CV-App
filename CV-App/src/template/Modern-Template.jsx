import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import "../style/modern.template.css";

function Header({ src, text }) {
    return (
        <div className="header">
            <img src={src} alt="" />
            <h2>{text}</h2>
        </div>
    );
}
function ListItem(props) {
    return (
        <li className="list-item">
            <h3>{props.title}</h3>
            <p className="subtitle">{props.subtitle}</p>
            <span>{props.time}</span>
            <span>&nbsp; | &nbsp;</span>
            <span>{props.location}</span>
            {props.children}
        </li>
    );
}

function SideBar() {
    return (
        <div className="side-bar">
            <div>
                <h1 className="side-bar--name">John G. Smith</h1>
                <h3 className="side-bar--title">UI/UX Designer</h3>
                <div className="side-bar--img-container">
                    <img src="/man-face.jpeg" />
                </div>
                <ul className="side-bar--contact">
                    <li>
                        <img src="/email-white.svg" />
                        <p>johnsimth@gmail.com</p>
                    </li>
                    <li>
                        <img src="/phone-white.svg" />
                        <p>+1234 456 7890</p>
                    </li>
                    <li>
                        <img src="/location-pin-white.svg" />
                        <p>
                            2314 Pacific Coast, Pasedina, California, 9002, USA
                        </p>
                    </li>
                    <li>
                        <img src="/linked-in-white.svg" />
                        <p>John Smith</p>
                    </li>
                    <li>
                        <img src="/website-white.svg" />
                        <p>www.johnsmith.com</p>
                    </li>
                </ul>
            </div>
            <div className="profile">
                <Header src="/profile-white.svg" text="PROFILE" />
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Placeat fuga neque, consectetur maiores voluptate, adipisci
                    voluptatum quod repellat aperiam optio voluptatem eos
                    suscipit corrupti deleniti quaerat natus sed expedita
                    perferendis?
                </p>
            </div>
            <div className="languages">
                <Header src="/language-white.svg" text="LANGUAGES" />
                <ul>
                    <li>
                        <p>English</p>
                        <div className="languages--level">
                            <span className="filled"></span>
                            <span className="filled"></span>
                            <span className="filled"></span>
                            <span className="filled"></span>
                            <span className="filled"></span>
                        </div>
                    </li>
                    <li>
                        <p>Spanish</p>
                        <div className="languages--level">
                            <span className="filled"></span>
                            <span className="filled"></span>
                            <span className="filled"></span>
                            <span className="filled"></span>
                            <span></span>
                        </div>
                    </li>
                    <li>
                        <p>French</p>
                        <div className="languages--level">
                            <span className="filled"></span>
                            <span className="filled"></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="awards">
                <Header src="/awards-white.svg" text="AWARDS" />
                <ul>
                    <li className="awards--list">
                        <p className="awards--title">
                            Outstanding Comp-Sci. Student
                        </p>
                        <p>University of Alabama, 2004</p>
                    </li>
                    <li className="awards--list">
                        <p className="awards--title">Dean's List</p>
                        <p>New York University, 2014-2015</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
function MainContent() {
    return (
        <div className="main-content">
            <div className="experience">
                <Header
                    src="/briefcase-black.svg"
                    text="PROFESSIONAL EXPERIENCE"
                />
                <ul>
                    <ListItem
                        title="Fronted Simplified"
                        subtitle="UI/UX Designer"
                        time="2022 - present"
                        location="NewYork, USA"
                    >
                        <ul className="experience--contributions">
                            <li>
                                Developed and implemeted startegic plans
                                resulting in 30% increase in new business
                                opportunities
                            </li>
                            <li>
                                Developed and implemeted startegic plans
                                resulting in 30% increase in new business
                                opportunities
                            </li>
                            <li>
                                Developed and implemeted startegic plans
                                resulting in 30% increase in new business
                                opportunities
                            </li>
                        </ul>
                    </ListItem>
                    <ListItem
                        title="Web Flow"
                        subtitle="UI/UX Designer"
                        time="2021 - 2022"
                        location="NewYork, USA"
                    >
                        <ul className="experience--contributions">
                            <li>
                                Developed and implemeted startegic plans
                                resulting in 30% increase in new business
                                opportunities
                            </li>
                            <li>
                                Developed and implemeted startegic plans
                                resulting in 30% increase in new business
                                opportunities
                            </li>
                            <li>
                                Developed and implemeted startegic plans
                                resulting in 30% increase in new business
                                opportunities
                            </li>
                        </ul>
                    </ListItem>
                </ul>
            </div>
            <div className="education">
                <Header src="/education-cap-black.svg" text="EDUCATION" />
                <ul className="education--schools">
                    <ListItem
                        title="Master of Business Administration"
                        subtitle="Haravad Business School"
                        time="2019 - 2020"
                        location="Boston"
                    />
                    <ListItem
                        title="Bsc. in Economics"
                        subtitle="Haravad Business School"
                        time="2015 - 2018"
                        location="Boston"
                    />
                </ul>
            </div>
            <div className="skills">
                <Header src="/skill-black.svg" text="Skills" />
                <ul>
                    <li>Creative and innovative thinking</li>
                    <li>Team management and leadership</li>
                    <li>Creative and innovative thinking</li>
                    <li>Team management and leadership</li>
                </ul>
            </div>
        </div>
    );
}
export default function ModernTemplate() {
    return (
        <div className="super-container">
            <div className="container">
                <SideBar />
                <MainContent />
            </div>
        </div>
    );
}
