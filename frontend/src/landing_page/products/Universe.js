import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="Media\images-20250711T113220Z-1-001\media\images\smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="Media\images-20250711T113220Z-1-001\media\images\streakLogo.png"alt="Streak"
            className="img-fluid mb-2"
            style={{ maxHeight: "60px" }}  />
          <p className="text-small text-muted">Algo & Stretegic</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="Media\images-20250711T113220Z-1-001\media\images\sensibullLogo.svg" alt="Sensibull"
            className="img-fluid mb-2"
            style={{ maxHeight: "60px" }}/>
          <p className="text-small text-muted">Options tradding platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="Media\images-20250711T113220Z-1-001\media\images\zerodhaFundhouse.png"  alt="Zerodha Fund House"
            className="img-fluid mb-2"
            style={{ maxHeight: "60px" }} />
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="Media\images-20250711T113220Z-1-001\media\images\goldenpiLogo.png"  alt="GoldenPi"
            className="img-fluid mb-2"
            style={{ maxHeight: "60px" }} />
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="Media\images-20250711T113220Z-1-001\media\images\dittoLogo.png" alt="Ditto"
            className="img-fluid mb-2"
            style={{ maxHeight: "60px" }} />
          <p className="text-small text-muted">Insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;