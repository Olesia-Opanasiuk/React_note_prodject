import { useParams } from "react-router-dom";

function About(props) {
    return (
        <div>
            <div className="wrapper" style={{
                backgroundImage: `url(${props.data.about.srcImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
                width: "400px",
                height: "500px"
            }}>
                <p className="about">Created by Olesia Opanasiuk</p>
            </div>
        </div>
    );
}

export default About;
