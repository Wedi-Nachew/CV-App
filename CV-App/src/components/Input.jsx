import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import TipTap from "./TipTap";
import Awards from "./Awards";
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
    const [currentSchoolId, setCurrentSchoolId] = useState();
    const [workExperience, setWorkExperience] = useState([]);
    const [activeWorkInputId, setActiveWorkInputId] = useState();
    const [awards, setAwards] = useState([]);
    const [activeAwardId, setActiveAwardId] = useState();
    function consoleData() {
        console.log(workExperience);
    }

    function handlePersonalInfoChange(event) {
        const { value, name } = event.target;
        setPersonalInfo((personalInfo) => ({ ...personalInfo, [name]: value }));
    }
    function handleEducationInfoChange(event) {
        const { value, name } = event.target;
        setEducationInfo((schools) => {
            return schools.map((school) => {
                return school.id === currentSchoolId
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
                work.id === activeWorkInputId
                    ? { ...work, [name]: value }
                    : work
            )
        );
    }
    function handleAwardsChange(event) {
        const { value, name } = event.target;
        setAwards((prevAwards) => {
            return prevAwards.map((award) => {
                return award.id === activeAwardId
                    ? { ...award, [name]: value }
                    : award;
            });
        });
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
        setCurrentSchoolId(newSchool.id);
    }
    function addWorkExperince(event) {
        event.preventDefault();
        const newExperience = {
            id: uuid(),
            description: [],
            employer: "",
            city: "",
            country: "",
            startDate: "",
            endDate: "",
        };
        setWorkExperience((prevData) => [...prevData, newExperience]);
        setActiveWorkInputId(newExperience.id);
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
        setActiveAwardId(newAward.id);
    }

    return (
        <>
            <form>
                <PersonalInfo
                    fullName={personalInfo.fullName}
                    email={personalInfo.email}
                    tel={personalInfo.tel}
                    location={personalInfo.location}
                    job={personalInfo.job}
                    handleChange={handlePersonalInfoChange}
                />
                <button onClick={(event) => addAward(event)}>Add Award</button>
                <button onClick={(event) => addWorkExperince(event)}>
                    Add Experience
                </button>
                {educationInfo.map((school) => (
                    <Education
                        key={school.id}
                        id={school.id}
                        currentId={setCurrentSchoolId}
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
                        id={work.id}
                        activeId={setActiveWorkInputId}
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
                        id={award.id}
                        activeAwardId={setActiveAwardId}
                        name={award.name}
                        issuer={award.issuer}
                        date={award.date}
                        handleChange={handleAwardsChange}
                    />
                ))}
            </form>
            <button onClick={consoleData}>Console</button>
        </>
    );
}
