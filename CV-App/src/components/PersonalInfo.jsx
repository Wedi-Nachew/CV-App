import { useState } from "react";
import "../style/personal.info.css";

export default function PersonalInfo(props) {
    return (
        <div className="personal-info">
            <label htmlFor="name">Full name</label>
            <input
                name="fullName"
                type="text"
                placeholder="Enter your title, first & last name"
                id="name"
                value={props.fullName}
                onChange={(event) => props.handleChange(event)}
            />
            <label htmlFor="job">Job title</label>
            <input
                name="job"
                type="text"
                placeholder="Enter your job title"
                id="job"
                value={props.job}
                onChange={(event) => props.handleChange(event)}
            />
            <label htmlFor="email">Email</label>
            <input
                name="email"
                type="email"
                placeholder="Enter your email"
                id="email"
                value={props.email}
                onChange={(event) => props.handleChange(event)}
            />
            <label htmlFor="tel">Phone number</label>
            <input
                name="tel"
                type="tel"
                placeholder="Enter your phone number"
                id="tel"
                value={props.tel}
                onChange={(event) => props.handleChange(event)}
            />
            <label htmlFor="location">Address</label>
            <input
                name="location"
                type="text"
                placeholder="City, Country"
                id="location"
                value={props.location}
                onChange={(event) => props.handleChange(event)}
            />
        </div>
    );
}
