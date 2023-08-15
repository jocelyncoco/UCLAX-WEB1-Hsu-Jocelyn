import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const Form = ({ getSubmissions }) => {
    //Name
    const [inputName, inputNameUpdate] = useState("Slim Shady");
    const inputNameonChange = (e) => {
        const theValue = e.target.value;
        inputNameUpdate(theValue);
    };

    //Email
    const [inputEmail, inputEmailUpdate] = useState("Slim@me.com");
    const inputEmailonChange = (e) => {
        const theValue = e.target.value;
        inputEmailUpdate(theValue);
    };

    //Message
    const [inputMessage, inputMessageUpdate] = useState("Test message");
    const inputMessageonChange = (e) => {
        const theValue = e.target.value;
        inputMessageUpdate(theValue);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const postData = {
            id: uuidv4(),
            name: inputName,
            email: inputEmail,
            message: inputMessage,
        };

        await axios.get("http://localhost:4059/submissions", postData);
        getSubmissions();
    };

    return (
        <FormStyled className="Form" onSubmit={onSubmit}>
            {/* Name */}
            <div className="control-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={inputName}
                    onChange={inputNameonChange}
                />
            </div>

            {/* Email */}
            <div className="control-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="name"
                    value={inputEmail}
                    onChange={inputEmailonChange}
                />
            </div>

            {/* Message */}
            <div className="control-group">
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    value={inputMessage}
                    onChange={inputMessageonChange}
                />
            </div>

            <button type="submit">Send</button>
        </FormStyled>
    );
};

export default Form;

const FormStyled = styled.form`
    .control-group {
        margin-bottom: 20px;
    }

    label {
        font-weight: bold;
        display: block;
        margin-bottom: 5px;
    }

    input,
    textarea {
        font-size: 20px;
        padding: 10px;
        width: 100%;
        background-color: #eee;
        border: solid 1px #999;

        &:focus {
            background-color: white;
        }
    }

    textarea {
        height: 150px;
    }

    button {
        background-color: teal;
        padding: 10px 5px;
        color: white;
        width: 150px;
        border: none;
        outline: none;

        cursor: pointer;

        &:hover,
        &:focus {
            background-color: #015353;
        }
        &:active {
            background-color: #002020;
        }
    }
`;
