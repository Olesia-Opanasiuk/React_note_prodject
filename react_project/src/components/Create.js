import React from "react";
import { useState } from "react";
import env from "../env.json";

function Create(props) {
    const [url, setUrl] = useState("");
    const [lineClass, setLineClass] = useState("hide");
    const [formClass, setFormClass] = useState("");

    const sendData = (obj) => {
        setFormClass("hide");
        setLineClass("");
        fetch(env.urlBackend, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response.result) {
                    setUrl(env.url + "/" + response.url);
                }
            })
    }

    const loadDataFromForm = (event) => {
        event.preventDefault();
        let note = event.target.elements.note.value;
        note = note.trim();
        if (note === "") {
            alert('Заполните поля');
            return false;
        }
        sendData({ "note": note });
    }

    return (
        <div >
            <div className="wrapper" style={{
                backgroundImage: `url(${props.data.create.srcImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
            }}>
                <div className={formClass}>
                    <form action="" onSubmit={loadDataFromForm} className="form">
                        <label htmlFor="" className="formChild">Enter a note</label>
                        <textarea name="note" id="" defaultValue="Test" className="formChild"></textarea>
                        <button type="submit" className="btn formChild">Create</button>
                    </form>
                </div>
                <div className={lineClass}>
                    <div>{url}</div>
                    <div className="createBtn">
                        <button onClick={function () { window.location.reload() }}>Create a new note</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;
