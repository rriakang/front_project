import React, {useState} from "react";

const Put = () => {
    const [txtValue, setTextValue] = useState("");
    const onChange = (e) => {
        setTextValue(e.target.value);

    };

    return (
        <div>
            <input type="text" value="" onChange={onChange} />
            <br />
            <p>{txtValue}</p>
        </div>
    );
};
export default Put;