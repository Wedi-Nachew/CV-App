import { v4 as uuid } from "uuid";

export default function Skills(props) {
    return (
        <div className="skills" onClick={() => props.setActive(props.field)}>
            <lable htmlFor="skill">Skill</lable>
            <input
                type="text"
                id="skill"
                name="skill"
                value={props.skill}
                onChange={(event) => handleChange(event)}
                placeholder="Enter Skill"
            />
            <lable htmlFor="level">Select skill level</lable>
            <select name="level" id="level">
                <option value="">Your Proficency Level</option>
                <option value="beginner">Beginner</option>
                <option value="intermidate">Intermidate</option>
                <option value="experienced">Experienced</option>
            </select>
        </div>
    );
}
