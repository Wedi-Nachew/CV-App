import "../style/personal.info.css";

export default function WorkExperience(props) {
    return (
        <div className="work-experience">
            <div>
                <label htmlFor="job-title">Job Title</label>
                <input
                    type="text"
                    placeholder="Enter Your Employer"
                    id="job-title"
                    name="jobTitle"
                    value={props.active.jobTitle}
                    onChange={(event) => props.handleChange(event)}
                />
            </div>
            <div>
                <label htmlFor="employer">Employer</label>
                <input
                    type="text"
                    placeholder="Enter Your Employer"
                    id="employer"
                    name="employer"
                    value={props.active.employer}
                    onChange={(event) => props.handleChange(event)}
                />
            </div>
            <div className="address">
                <div>
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        placeholder="Enter City"
                        id="city"
                        name="city"
                        value={props.active?.city}
                        onChange={(event) => props.handleChange(event)}
                    />
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        placeholder="Enter Country"
                        id="country"
                        name="country"
                        value={props.active.country}
                        onChange={(event) => props.handleChange(event)}
                    />
                </div>
            </div>
            <div className="time">
                <div>
                    <label htmlFor="start-date">Start Date</label>
                    <input
                        type="date"
                        id="start-date"
                        name="startDate"
                        value={props.active.startDate}
                        onChange={(event) => props.handleChange(event)}
                    />
                </div>
                <div>
                    <label htmlFor="end-date">End Date</label>
                    <input
                        type="date"
                        id="end-date"
                        name="endDate"
                        value={props.active.endDate}
                        onChange={(event) => props.handleChange(event)}
                    />
                </div>
            </div>
        </div>
    );
}
