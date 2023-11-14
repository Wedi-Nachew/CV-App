import { useState } from "react";
import PersonalInfo from "./PersonalInfo";

export default function InputGroup(props) {
    const [expand, setExpand] = useState(false);

    return (
        <div className="input-group">
            {expand ? (
                <>{props.children}</>
            ) : props.title === "Personal Information" ? (
                <div className="profile-detail">
                    <div>
                        <h2
                            className={
                                props.savedFullName == "Your Name"
                                    ? "placeholder"
                                    : " name"
                            }
                        >
                            {props.savedFullName}
                        </h2>
                        <div>
                            <img src="/email-black.svg" alt="" />
                            <p
                                className={
                                    props.savedEmail == "Email"
                                        ? "placeholder"
                                        : "email"
                                }
                            >
                                {props.savedEmail}
                            </p>
                        </div>
                        <div>
                            <img src="/phone-black.svg" alt="" />
                            <p
                                className={
                                    props.savedTel == "Phone"
                                        ? "placeholder"
                                        : "phone"
                                }
                            >
                                {props.savedTel}
                            </p>
                        </div>
                        <div>
                            <img src="/location-pin-black.svg" alt="" />
                            <p
                                className={
                                    props.savedLocation == "Location"
                                        ? "placeholder"
                                        : "location"
                                }
                            >
                                {props.savedLocation}
                            </p>
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                setExpand((prevState) =>
                                    prevState ? false : true
                                );
                                props.setActive(() => props.field);
                            }}
                        >
                            Edit
                        </button>
                        <img
                            className="profile-pic"
                            src="/user-profile-pic.svg"
                            alt=""
                        />
                    </div>
                </div>
            ) : (
                <div className="category">
                    <img src={props.src} alt="" />
                    <h2>{props.title}</h2>
                    <img
                        src="/drop-down.svg"
                        className="drop-down"
                        alt=""
                        onClick={(event) => {
                            setExpand((prevState) =>
                                prevState ? false : true
                            );
                            props.add && props.add();
                        }}
                    />
                </div>
            )}
        </div>
    );
}
