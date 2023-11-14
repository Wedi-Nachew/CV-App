import { v4 as uuid } from "uuid";

export default function Skills(props) {
    return (
        <div className="skills">
            <div>
                <lable htmlFor="skill">Skill</lable>
                <input
                    type="text"
                    id="skill"
                    name="skill"
                    value={props.active.skill}
                    onChange={(event) => props.handleChange(event)}
                    placeholder="Enter Skill"
                />
            </div>
            <div>
                <lable htmlFor="level">Select skill level</lable>
                <select
                    name="level"
                    id="level"
                    value={props.active.level}
                    onChange={(event) => props.handleChange(event)}
                >
                    <option value="">Your Proficency Level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermidate">Intermidate</option>
                    <option value="experienced">Experienced</option>
                </select>
            </div>
        </div>
    );
}
