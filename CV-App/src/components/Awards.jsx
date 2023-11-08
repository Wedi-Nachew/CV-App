import { v4 as uuid } from "uuid";
import "../style/personal.info.css";
export default function Awards(props) {
    return (
        <div className="awards" onClick={() => props.activeAwardId(props.id)}>
            <label htmlFor="name">Award</label>
            <input
                type="text"
                placeholder="Enter Award Name"
                id="name"
                name="name"
                value={props.name}
                onChange={(event) => props.handleChange(event)}
            />
            <label htmlFor="issuer">Issuer</label>
            <input
                type="text"
                placeholder="Enter Issuer"
                id="issuer"
                name="issuer"
                value={props.issuer}
                onChange={(event) => props.handleChange(event)}
            />
            <label htmlFor="date">Date</label>
            <input
                type="date"
                id="date"
                name="date"
                value={props.date}
                onChange={(event) => props.handleChange(event)}
            />
        </div>
    );
}
