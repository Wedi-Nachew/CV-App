import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Input() {
    const [educationInfo, setEducationInfo] = useState([]);
    const [personalInfo, setPersonalInfo] = useState({
        id: uuid(),
        fullName: "",
        email: "",
        tel: "",
        location: "",
        job: "",
    });
    const [currentSchoolId, setCurrentSchoolId] = useState();
    function consoleData() {
        console.log({ personalInfo, educationInfo });
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
                <button onClick={(event) => addSchool(event)}>
                    Add School
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
            </form>
            <button onClick={consoleData}>Console</button>
        </>
    );
}
