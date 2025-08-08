import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from "../env.json";


// http://localhost:3000/note/3bvw7dwwjrdxtw9494wfiqxu

function Note(props) {
    let { noteURL } = useParams();
    const [noteText, setNoteText] = useState("");
    const [lineClass, setLineClass] = useState("hide");
    const [formClass, setFormClass] = useState("hide");
    const [errorClass, setErrorClass] = useState("hide");

    // const currentUrl = window.location;


    useEffect(() => {
        if (noteURL !== undefined) {
            fetch(env.urlBackend, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: JSON.stringify({ "url": noteURL })
            })
                .then(response => response.json())
                .then(response => {
                    if (response.result) {
                        setNoteText(response.note);
                        setLineClass("");
                        setFormClass("hide");
                        setErrorClass("hide");
                    }
                    else {
                        setLineClass("hide");
                        setFormClass("");
                        setErrorClass("");
                    }
                })
        }
        else {
            setLineClass("hide");
            setFormClass("");
            setErrorClass("hide");
        }
    }, []);

    const getNote = (event) => {
        event.preventDefault();
        let url = event.target.elements.url.value;
        url = url.trim();
        if (url === "") {
            alert('Fill in the fields');
            return false;
        }
        noteURL = url;
        window.location.href = env.url + "/" + url;
    }

    const searchNote = () => {
        window.location.href = env.url;
    }

    return (
        <div>
            <div className="wrapper" style={{
                backgroundImage: `url(${props.data.note.srcImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
            }}>
                <div className={lineClass}>
                    <div className="result">
                        <div>
                            <h4>Note:</h4>
                            <div>{noteText}</div>
                            <h4>Hash:</h4>
                            <div>{noteURL}</div>
                        </div>
                        <div className="openBtn">
                            <button onClick={searchNote}>See another note</button>
                        </div>
                    </div>
                </div>
                <div className={errorClass}>
                    <p>An error occurred. No such note found! </p>
                </div>
                <div className={formClass}>
                    <form action="" onSubmit={getNote} className="form">
                        <label htmlFor="url" className="formChild" style={{ borderWidth: 0 }}>Enter the hash of the note</label >
                        <input type="text" name="url" id="url" className="formChild" />
                        <button type="submit" className="btn btn-primery formChild">Search for a note</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Note;
