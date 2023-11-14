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
        id: uuid(),
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
    const [activeInputField, setActiveInputField] = useState({});
    function consoleData() {
        console.log(educationInfo);
    }

    function addSchool() {
        const newSchool = {
            id: uuid(),
            degree: "",
            school: "",
            city: "",
            country: "",
            startDate: "",
            endDate: "",
        };
        setActiveInputField(newSchool);
    }
    function addExperience() {
        const newExperience = {
            id: uuid(),
            jobTitle: "",
            employer: "",
            city: "",
            country: "",
            startDate: "",
            endDate: "",
        };
        setActiveInputField(newExperience);
    }
    function addAward() {
        const newAward = {
            id: uuid(),
            name: "",
            issuer: "",
            date: "",
        };

        setActiveInputField(newAward);
    }
    function addSkill() {
        const newSkill = {
            id: uuid(),
            skill: "",
            level: "",
        };

        setActiveInputField(newSkill);
    }
    function addLanguage() {
        const newLang = {
            id: uuid(),
            language: "",
            extraInfo: "",
            level: "",
        };
        setActiveInputField(newLang);
    }
    function handleChange(event) {
        const { name, value } = event.target;
        setActiveInputField((prevData) => ({ ...prevData, [name]: value }));
    }
    function cancelUserInput() {
        setActiveInputField(() => {});
    }
    function saveUserInput() {
        if (activeInputField.hasOwnProperty("fullName")) {
            setPersonalInfo((prevData) => ({
                ...prevData,
                ...activeInputField,
            }));
        } else if (activeInputField.hasOwnProperty("school")) {
            educationInfo.every((school) => school.id !== activeInputField.id)
                ? setEducationInfo((prevSchools) => [
                      ...prevSchools,
                      activeInputField,
                  ])
                : setEducationInfo((prevSchools) => {
                      return prevSchools.map((school) =>
                          school.id === activeInputField.id
                              ? activeInputField
                              : school
                      );
                  });
        } else if (activeInputField.hasOwnProperty("employer")) {
            workExperience.every((work) => work.id !== activeInputField.id)
                ? setWorkExperience((prevWorks) => [
                      ...prevWorks,
                      activeInputField,
                  ])
                : setWorkExperience((prevWorks) => {
                      return prevWorks.map((work) =>
                          work.id === activeInputField.id
                              ? activeInputField
                              : work
                      );
                  });
        } else if (activeInputField.hasOwnProperty("issuer")) {
            awards.every((award) => award.id !== activeInputField.id)
                ? setAwards((prevAwards) => [...prevAwards, activeInputField])
                : setAwards((prevAwards) => {
                      return prevAwards.map((award) =>
                          award.id === activeInputField.id
                              ? activeInputField
                              : award
                      );
                  });
        } else if (activeInputField.hasOwnProperty("language")) {
            languages.every((language) => language.id !== activeInputField.id)
                ? setLanguages((prevLanguages) => [
                      ...prevLanguages,
                      activeInputField,
                  ])
                : setLanguages((prevLanguages) => {
                      return prevLanguages.map((language) =>
                          language.id === activeInputField.id
                              ? activeInputField
                              : language
                      );
                  });
        } else {
            skills.every((skill) => skill.id !== activeInputField.id)
                ? setSkills((prevSkills) => [...prevSkills, activeInputField])
                : setSkills((prevSkills) => {
                      return prevSkills.map((skill) =>
                          skill.id === activeInputField.id
                              ? activeInputField
                              : skill
                      );
                  });
        }

        setActiveInputField(() => {});
    }
    return (
        <>
            <div className="input-fields">
                <InputGroup
                    src="/profile-black.svg"
                    title="Personal Information"
                    saveUserData={saveUserInput}
                    cancelUserData={cancelUserInput}
                    savedFullName={personalInfo.fullName || "Your Name"}
                    savedEmail={personalInfo.email || "Email"}
                    savedTel={personalInfo.tel || "Phone"}
                    savedLocation={personalInfo.location || "Address"}
                    setActive={setActiveInputField}
                    active={activeInputField}
                >
                    {
                        <div className="expanded">
                            <h2>Personal Information</h2>
                            <PersonalInfo
                                setActive={setActiveInputField}
                                field={personalInfo}
                                active={activeInputField}
                                handleChange={handleChange}
                            />
                            <div
                                className="save-cancel"
                                style={{
                                    display: "flex",
                                }}
                            >
                                <button onClick={cancelUserInput}>
                                    Cancel
                                </button>
                                <button onClick={saveUserInput}>Save</button>
                            </div>
                        </div>
                    }
                </InputGroup>
                <InputGroup
                    src="/education-cap-black.svg"
                    title="Education"
                    add={addSchool}
                    saveUserData={saveUserInput}
                    cancelUserData={cancelUserInput}
                    active={activeInputField}
                >
                    {
                        <>
                            <h2>Education</h2>
                            {educationInfo.length === 0 ? (
                                <>
                                    <Education
                                        field={educationInfo}
                                        setActive={setActiveInputField}
                                        active={activeInputField}
                                        handleChange={handleChange}
                                    />
                                    <div
                                        className="save-cancel"
                                        style={{
                                            display: "flex",
                                        }}
                                    >
                                        <button onClick={cancelUserInput}>
                                            Cancel
                                        </button>
                                        <button onClick={saveUserInput}>
                                            Save
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <div>
                                    {educationInfo.map((school) => (
                                        <div
                                            key={school.id}
                                            className="school"
                                            id={school.id}
                                        >
                                            <div>
                                                <span>
                                                    <strong>
                                                        {school.degree},
                                                    </strong>

                                                    <em>
                                                        &nbsp;{school.school}
                                                    </em>
                                                </span>
                                            </div>
                                            <div>
                                                <small>
                                                    {school.city},&nbsp;
                                                    {school.country}
                                                </small>
                                            </div>
                                        </div>
                                    ))}
                                    <button onClick={addSchool}>
                                        Add School
                                    </button>
                                </div>
                            )}
                        </>
                    }
                </InputGroup>
                <InputGroup
                    src="/briefcase-black.svg"
                    title="Professional Experience"
                    add={addExperience}
                    saveUserData={saveUserInput}
                    cancelUserData={cancelUserInput}
                    active={activeInputField}
                >
                    {
                        <>
                            <h2>Work Experience</h2>
                            {workExperience.length === 0 ? (
                                <>
                                    <WorkExperience
                                        field={workExperience}
                                        active={activeInputField}
                                        handleChange={handleChange}
                                    />
                                    <div
                                        className="save-cancel"
                                        style={{
                                            display: "flex",
                                        }}
                                    >
                                        <button onClick={cancelUserInput}>
                                            Cancel
                                        </button>
                                        <button onClick={saveUserInput}>
                                            Save
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <div>
                                    {workExperience.map((work) => (
                                        <div
                                            key={work.id}
                                            className="work"
                                            id={work.id}
                                        >
                                            <div>
                                                <span>
                                                    <strong>
                                                        {work.jobTitle},
                                                    </strong>

                                                    <em>
                                                        &nbsp;{work.employer}
                                                    </em>
                                                </span>
                                            </div>
                                            <div>
                                                <small>
                                                    {work.city},&nbsp;
                                                    {work.country}
                                                </small>
                                            </div>
                                        </div>
                                    ))}
                                    <button onClick={addExperience}>
                                        Add Experience
                                    </button>
                                </div>
                            )}
                        </>
                    }
                </InputGroup>
                <InputGroup
                    src="/skill-black.svg"
                    title="Skills"
                    add={addSkill}
                    saveUserData={saveUserInput}
                    cancelUserData={cancelUserInput}
                    active={activeInputField}
                >
                    {
                        <>
                            <h2>Skills</h2>
                            {skills.length === 0 ? (
                                <>
                                    {" "}
                                    <Skills
                                        field={skills}
                                        active={activeInputField}
                                        handleChange={handleChange}
                                    />
                                    <div
                                        className="save-cancel"
                                        style={{
                                            display: "flex",
                                        }}
                                    >
                                        <button onClick={cancelUserInput}>
                                            Cancel
                                        </button>
                                        <button onClick={saveUserInput}>
                                            Save
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <div>
                                    {skills.map((skill) => (
                                        <div
                                            key={skill.id}
                                            className="skill"
                                            id={skill.id}
                                        >
                                            <div>
                                                <span>
                                                    <strong>
                                                        {skill.skill},
                                                    </strong>

                                                    <em>&nbsp;{skill.level}</em>
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                    <button onClick={addSkill}>
                                        Add Skill
                                    </button>
                                </div>
                            )}
                        </>
                    }
                </InputGroup>
                <InputGroup
                    src="/awards-black.svg"
                    title="Awards/Honors"
                    add={addAward}
                    saveUserData={saveUserInput}
                    cancelUserData={cancelUserInput}
                    active={activeInputField}
                >
                    {
                        <>
                            <h2>Awards/Honors</h2>
                            {awards.length === 0 ? (
                                <>
                                    <Awards
                                        field={awards}
                                        active={activeInputField}
                                        handleChange={handleChange}
                                    />
                                    <div
                                        className="save-cancel"
                                        style={{
                                            display: "flex",
                                        }}
                                    >
                                        <button onClick={cancelUserInput}>
                                            Cancel
                                        </button>
                                        <button onClick={saveUserInput}>
                                            Save
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <div>
                                    {awards.map((award) => (
                                        <div
                                            key={award.id}
                                            className="award"
                                            id={award.id}
                                        >
                                            <div>
                                                <span>
                                                    <strong>
                                                        {award.name},
                                                    </strong>

                                                    <em>
                                                        &nbsp;{award.issuer}
                                                    </em>
                                                </span>
                                            </div>
                                            <div>
                                                <small>{award.date}</small>
                                            </div>
                                        </div>
                                    ))}
                                    <button onClick={addAward}>
                                        Add Award
                                    </button>
                                </div>
                            )}
                        </>
                    }
                </InputGroup>
                <InputGroup
                    src="/language-black.svg"
                    title="Languages"
                    add={addLanguage}
                    saveUserData={saveUserInput}
                    cancelUserData={cancelUserInput}
                    active={activeInputField}
                >
                    {
                        <>
                            <h2>Languages</h2>
                            {languages.length === 0 ? (
                                <>
                                    <Languages
                                        field={languages}
                                        active={activeInputField}
                                        handleChange={handleChange}
                                    />
                                    <div
                                        className="save-cancel"
                                        style={{
                                            display: "flex",
                                        }}
                                    >
                                        <button onClick={cancelUserInput}>
                                            Cancel
                                        </button>
                                        <button onClick={saveUserInput}>
                                            Save
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <div>
                                    {languages.map((language) => (
                                        <div
                                            key={language.id}
                                            className="language"
                                            id={language.id}
                                        >
                                            <div>
                                                <span>
                                                    <strong>
                                                        {language.language},
                                                    </strong>

                                                    <em>
                                                        &nbsp;{language.level}
                                                    </em>
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                    <button onClick={addLanguage}>
                                        Add Language
                                    </button>
                                </div>
                            )}
                        </>
                    }
                </InputGroup>
                <button className={consoleData}>Console</button>
            </div>
        </>
    );
}
