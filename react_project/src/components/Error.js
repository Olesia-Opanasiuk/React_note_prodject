
function Error(props) {
    return (
        <div>
            <div className="wrapper" style={{
                backgroundImage: `url(${props.data.error.srcImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
            }}>
                <div>404</div>
            </div>
        </div>
    );
}

export default Error;
