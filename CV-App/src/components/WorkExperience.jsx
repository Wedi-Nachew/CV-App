import "../style/personal.info.css";

export default function WorkExperience(props) {
    
    return (
        <div
            className="work-experience"
            onClick={() => props.activeId(props.id)}
        >
            <label htmlFor="degree">Employer</label>
            <input
                type="text"
                placeholder="Enter Your Employer"
                id="employer"
                name="employer"
                value={props.employer}
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
            <label htmlFor="description">Description</label>
            <textarea
                id="description"
                name="description"
                value={props.description}
                onChange={(event) => props.handleChange(event)}
            />
        </div>
    );
}
