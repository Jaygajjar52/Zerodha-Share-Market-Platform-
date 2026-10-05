import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="Media\images-20250711T113220Z-1-001\media\images\234b808c-db95-4700-b7ef-2f1a7e872365.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Jay Gajjar</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Jay Gajjar, a passionate MERN Stack developer, set out to build a
            Zerodha Clone to challenge himself and master real-world fintech
            applications. With a strong focus on creating seamless user
            experiences, Jay combines MongoDB, Express, React, and Node.js to
            replicate the performance and reliability of India’s leading trading
            platform. His journey reflects the spirit of innovation and
            problem-solving that drives modern web development.
          </p>
          <p>
            Nitin Kamath (Actual Zerodha Founder) is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
