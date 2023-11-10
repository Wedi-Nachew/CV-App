import "../style/personal.info.css";

export default function Education(props) {
    return (
        <div className="education" onClick={() => props.setActive(props.field)}>
            <label htmlFor="degree">Degree</label>
            <input
                type="text"
                placeholder="Enter Degree/ Field Of Study/ Exchange Semester"
                id="degree"
                name="degree"
                value={props.degree}
                onChange={(event) => props.handleChange(event)}
            />
            <label htmlFor="school">School</label>
            <input
                type="text"
                placeholder="Enter School/ University"
                id="school"
                name="school"
                value={props.school}
                onChange={(event) => props.handleChange(event)}
            />
            <label htmlFor="city">City</label>
            <input
                type="text"
                placeholder="Enter City"
                id="city"
                name="city"
                value={props.city}
                onChange={(event) => props.handleChange(event)}
            />
            <label htmlFor="country">Country</label>
            <input
                type="text"
                placeholder="Enter Country"
                id="country"
                name="country"
                value={props.country}
                onChange={(event) => props.handleChange(event)}
            />
            <label htmlFor="start-date">Start Date</label>
            <input
                type="date"
                id="start-date"
                name="startDate"
                value={props.startDate}
                onChange={(event) => props.handleChange(event)}
            />
            <label htmlFor="end-date">End Date</label>
            <input
                type="date"
                id="end-date"
                name="endDate"
                value={props.endDate}
                onChange={(event) => props.handleChange(event)}
            />
        </div>
    );
}
