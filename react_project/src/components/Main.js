
function Main(props) {
    return (
        <div className="container" >
            <div className="wrapper" style={{
                backgroundImage: `url(${props.data.main.srcImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
            }} >
                <div className="link">
                    <a href="/create">Create Note</a>
                </div>
                <div className="link">
                    <a href="/note">Review Note</a>
                </div>
            </div>
        </div >
    );
}

export default Main;
