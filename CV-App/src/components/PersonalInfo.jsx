import { useState } from "react";

export default function PersonalInfo(props) {
    return (
        <div
            className="personal-info"
            onClick={() => props.field !== props.active ? props.setActive(props.field) : false }
        >
            <div className="personal-info--top">
                <div>
                    <div>
                        <label htmlFor="name">Full name</label>
                        <input
                            name="fullName"
                            type="text"
                            placeholder="Enter your title, first & last name"
                            id="name"
                            value={props.fullName}
                            onChange={(event) => props.handleChange(event)}
                        />
                    </div>
                    <div>
                        <label htmlFor="job">Job title</label>
                        <input
                            name="job"
                            type="text"
                            placeholder="Enter your job title"
                            id="job"
                            value={props.job}
                            onChange={(event) => props.handleChange(event)}
                        />
                    </div>
                </div>
                <div className="user-img">
                    <label htmlFor="img">
                        <img src="/profile-black.svg" alt="" />
                    </label>
                    <input type="file" name="img" id="img" />
                </div>
            </div>
            <div className="contact">
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        id="email"
                        value={props.email}
                        onChange={(event) => props.handleChange(event)}
                    />
                </div>
                <div>
                    <label htmlFor="tel">Phone number</label>
                    <input
                        name="tel"
                        type="tel"
                        placeholder="Enter your phone number"
                        id="tel"
                        value={props.tel}
                        onChange={(event) => props.handleChange(event)}
                    />
                </div>
            </div>
            <div>
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
        </div>
    );
}
