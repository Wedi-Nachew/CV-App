export default function Education(props) {
    return (
        <div className="education">
            <div>
                <label htmlFor="degree">Degree</label>
                <input
                    type="text"
                    placeholder="Enter Degree/ Field Of Study/ Exchange Semester"
                    id="degree"
                    name="degree"
                    value={props.active?.degree}
                    onChange={(event) => props.handleChange(event)}
                />
            </div>
            <div>
                <label htmlFor="school">School</label>
                <input
                    type="text"
                    placeholder="Enter School/ University"
                    id="school"
                    name="school"
                    value={props.active?.school}
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
                        value={props.active?.country}
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
                        value={props.active?.startDate}
                        onChange={(event) => props.handleChange(event)}
                    />
                </div>
                <div>
                    <label htmlFor="end-date">End Date</label>
                    <input
                        type="date"
                        id="end-date"
                        name="endDate"
                        value={props.active?.endDate}
                        onChange={(event) => props.handleChange(event)}
                    />
                </div>
            </div>
        </div>
    );
}
