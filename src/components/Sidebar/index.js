
function index() {
    return (
        <div style={{
            width: "15%",
            height: "100vh",
            position: "fixed",
            padding: "10px",
            backgroundColor: '#1F2933',

        }}
        >
            <div style={{
                borderRadius: "5px",
                // backgroundColor:"#52606D"
                backgroundColor:"#3E4C59"


            }}
                className="hover:bg-gray-700 hover:cursor-pointer p-2 font-semibold mt-2 mb-2"
            >
                <span className="text-white">
                    Menu
                </span>
            </div>
            <div style={{
                backgroundColor: "whitesmoke",
                padding: "5px",
                borderRadius: "5px",
                marginTop: "5px",
                marginBottom: "5px"
            }}>
                Menu
            </div>
            <div style={{
                backgroundColor: "whitesmoke",
                padding: "5px",
                borderRadius: "5px",
                marginTop: "5px",
                marginBottom: "5px"
            }}>
                Menu
            </div>
            <div style={{
                backgroundColor: "whitesmoke",
                padding: "5px",
                borderRadius: "5px",
                marginTop: "5px",
                marginBottom: "5px"
            }}>
                Menu
            </div>
        </div>
    )
}

export default index