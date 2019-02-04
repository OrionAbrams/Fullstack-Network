import React from "react";


var sectionStyle = {
  width: "100%",
  height: "100vh"
};
function Home() {
  return (
    <div style={sectionStyle} >
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    {/* if material bootstrap is installed, you should see the below button as green */}
    <button className="btn-default">Welcome to Fullstack</button>
    </div>
  );
}

export default Home;
