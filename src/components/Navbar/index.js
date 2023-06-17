import LeftNav from "./LeftNav"
import RightNav from "./RightNav"

function index() {
  return (
    <div style={{
      backgroundColor: '#1F2933',
      padding: '5px',
      height: "50px",
      display: 'flex',
      alignItems: "center",
    }}>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: "center",
        width: "100%"

      }}>
        {/* Left Navigation */}
        <LeftNav />

        {/* Right Navigation */}
        <RightNav />
      </div>
    </div>
  )
}

export default index