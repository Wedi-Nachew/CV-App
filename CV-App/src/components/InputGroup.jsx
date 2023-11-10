import { useState } from "react";

export default function InputGroup(props) {
    const [expand, setExpand] = useState(false);
    return (
        <div>
            <img
                src="/drop-down.svg"
                className="drop-down"
                alt=""
                onClick={() =>
                    setExpand((prevState) => (prevState ? false : true))
                }
            />
            {expand ? (
                props.children
            ) : (
                <>
                    <img src={props.src} alt="" />
                    <h2>{props.title}</h2>
                    {/* <img
                        src="/drop-down.svg"
                        className="drop-down"
                        alt=""
                        onClick={() =>
                            setExpand((prevState) => (prevState ? false : true))
                        }
                    /> */}
                </>
            )}
        </div>
    );
}
