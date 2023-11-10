import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Awards from "./Awards";
import Skills from "./Skills";
import Languages from "./Languages";
import InputGroup from "./InputGroup";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Input() {
    const [personalInfo, setPersonalInfo] = useState({
        fullName: "",
        email: "",
        tel: "",
        location: "",
        job: "",
    });
    const [educationInfo, setEducationInfo] = useState([]);
    const [workExperience, setWorkExperience] = useState([]);
    const [awards, setAwards] = useState([]);
    const [skills, setSkills] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [activeInputField, setActiveInputField] = useState();
    function consoleData() {
        console.log(activeInputField);
    }

    function handlePersonalInfoChange(event) {
        const { value, name } = event.target;
        setPersonalInfo((personalInfo) => ({ ...personalInfo, [name]: value }));
    }
    function handleEducationInfoChange(event) {
        const { value, name } = event.target;
        setEducationInfo((schools) => {
            return schools.map((school) => {
                return school.id === activeInputField.id
                    ? {
                          ...school,
                          [name]: value,
                      }
                    : school;
            });
        });
    }
    function handleWorkExperienceInfoChange(event) {
        const { value, name } = event.target;
        setWorkExperience((prevData) =>
            prevData.map((work) =>
                work.id === activeInputField.id
                    ? { ...work, [name]: value }
                    : work
            )
        );
    }
    function handleAwardsChange(event) {
        const { value, name } = event.target;
        setAwards((prevAwards) => {
            return prevAwards.map((award) => {
                return award.id === activeInputField.id
                    ? { ...award, [name]: value }
                    : award;
            });
        });
    }
    function handleSkillInfoChange(event) {
        const { name, value } = event.target;
        setSkills((prevSkills) =>
            prevSkills.map((skill) =>
                skill.id === activeInputField.id
                    ? { ...skill, [name]: value }
                    : skill
            )
        );
    }
    function handleLanguageChange(event) {
        const { name, value } = event.target;
        setSkills((prevLangs) =>
            prevLangs.map((lang) =>
                lang.id === activeInputField.id
                    ? { ...lang, [name]: value }
                    : lang
            )
        );
    }
    function addSchool(event) {
        event.preventDefault();
        const newSchool = {
            id: uuid(),
            fullName: "",
            email: "",
            tel: "",
            location: "",
            job: "",
        };
        setEducationInfo((prevSchool) => [...prevSchool, newSchool]);
        setActiveInputField(newSchool);
    }
    function addAward(event) {
        event.preventDefault();
        const newAward = {
            id: uuid(),
            name: "",
            issuer: "",
            date: "",
        };
        setAwards((awards) => [...awards, newAward]);
        setActiveInputField(newAward);
    }
    function addSkills(event) {
        event.preventDefault();
        const newSkill = {
            id: uuid(),
            skill: "",
            level: "",
        };
        setSkills((prevSkills) => [...prevSkills, newSkill]);
        setActiveInputField(newSkill);
    }
    function addLang(event) {
        event.preventDefault();
        const newLang = {
            id: uuid(),
            language: "",
            extraInfo: "",
            level: "",
        };
        setSkills((prevLangs) => [...prevLangs, newLang]);
        setActiveInputField(newLang);
    }
    function handleChange(event) {
        const { name, value } = event.target;
        setActiveInputField((prevData) => ({ ...prevData, [name]: value }));
    }

    console.log(activeInputField);

    return (
        <>
            <div className="input-fields">
                <InputGroup
                    src="/profile-black.svg"
                    title="Personal Information"
                >
                    {
                        <div className="expanded">
                            <h2>Personal Information</h2>
                            {Object.values(personalInfo).every(
                                (value) => value === ""
                            ) ? (
                                <PersonalInfo
                                    setActive={setActiveInputField}
                                    field={personalInfo}
                                    active={activeInputField}
                                    email={personalInfo.email}
                                    tel={personalInfo.tel}
                                    location={personalInfo.location}
                                    job={personalInfo.job}
                                    handleChange={handleChange}
                                />
                            ) : (
                                <div>
                                    <h3>{personalInfo.fullName}</h3>
                                    <p>{personalInfo.email}</p>
                                    <p>{personalInfo.tel}</p>
                                    <p>{personalInfo.location}</p>
                                </div>
                            )}
                        </div>
                    }
                </InputGroup>
                <InputGroup src="/education-cap-black.svg" title="Education" />
                <InputGroup
                    src="/briefcase-black.svg"
                    title="Professional Experience"
                />
                <InputGroup src="/awards-black.svg" title="Awards/Honors" />
                <InputGroup src="/skill-black.svg" title="Skills" />
                <InputGroup src="/language-black.svg" title="Languages" />
                <button className={consoleData}>Console</button>
                {/*<PersonalInfo
                    fullName={personalInfo.fullName}
                    email={personalInfo.email}
                    tel={personalInfo.tel}
                    location={personalInfo.location}
                    job={personalInfo.job}
                    handleChange={handlePersonalInfoChange}
                />
                {educationInfo.map((school) => (
                    <Education
                        key={school.id}
                        field={school}
                        setActive={setActiveInputField}
                        degree={school.degree}
                        school={school.school}
                        city={school.city}
                        country={school.country}
                        startDate={school.startDate}
                        endDate={school.endDate}
                        handleChange={handleEducationInfoChange}
                    />
                ))}
                {workExperience.map((work) => (
                    <WorkExperience
                        key={work.id}
                        field={work}
                        setActive={setActiveInputField}
                        employer={work.employer}
                        city={work.city}
                        country={work.country}
                        startDate={work.startDate}
                        endDate={work.endDate}
                        description={work.description}
                        handleChange={handleWorkExperienceInfoChange}
                    />
                ))}
                {awards.map((award) => (
                    <Awards
                        key={award.id}
                        field={award}
                        setActive={setActiveInputField}
                        name={award.name}
                        issuer={award.issuer}
                        date={award.date}
                        handleChange={handleAwardsChange}
                    />
                ))}
                {skills.map((skill) => (
                    <Skills
                        key={skill.id}
                        field={skill}
                        setActive={setActiveInputField}
                        skill={skill.skill}
                        level={skill.level}
                        handleChange={handleSkillInfoChange}
                    />
                ))}
                {languages.map((lang) => (
                    <Languages
                        key={lang.id}
                        field={lang}
                        setActive={setActiveInputField}
                        language={lang.language}
                        extraInfo={lang.extraInfo}
                        level={lang.level}
                        handleChange={handleLanguageChange}
                    />
                ))}*/}
            </div>
        </>
    );
}
