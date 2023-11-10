import { v4 as uuid } from "uuid";

export default function Languages() {
    return (
        <div className="languages" onClick={() => props.setActive(props.field)}>
            <lable htmlFor="language">Language</lable>
            <input
                type="text"
                id="language"
                name="language"
                value={props.language}
                onChange={(event) => handleChange(event)}
                placeholder="Enter Language"
            />
            <lable htmlFor="extra-info">Additional Information</lable>
            <input
                type="text"
                id="extra-info"
                name="extraInfo"
                value={props.extraInfo}
                onChange={(event) => handleChange(event)}
                placeholder="e.g. C2, TOFEL, IELTS..."
            />
            <lable htmlFor="level">Select proficency level</lable>
            <select name="level" id="level">
                <option value="">Your Proficency Level</option>
                <option value="beginner">Beginner</option>
                <option value="intermidate">Intermidate</option>
                <option value="advanced">Advanced</option>
                <option value="proficent">Proficent</option>
            </select>
        </div>
    );
}
