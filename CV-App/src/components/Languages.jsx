import { v4 as uuid } from "uuid";

export default function Languages(props) {
    return (
        <div className="languages">
            <div>
                <lable htmlFor="language">Language</lable>
                <input
                    type="text"
                    id="language"
                    name="language"
                    value={props.active.language}
                    onChange={(event) => props.handleChange(event)}
                    placeholder="Enter Language"
                />
            </div>
            <div>
                <lable htmlFor="extra-info">Additional Information</lable>
                <input
                    type="text"
                    id="extra-info"
                    name="extraInfo"
                    value={props.active.extraInfo}
                    onChange={(event) => props.handleChange(event)}
                    placeholder="e.g. C2, TOFEL, IELTS..."
                />
            </div>
            <div>
                <lable htmlFor="level">Select proficency level</lable>
                <select
                    name="level"
                    id="level"
                    value={props.active.level}
                    onChange={(event) => props.handleChange(event)}
                >
                    <option value="">Your Proficency Level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermidate">Intermidate</option>
                    <option value="advanced">Advanced</option>
                    <option value="proficent">Proficent</option>
                </select>
            </div>
        </div>
    );
}
