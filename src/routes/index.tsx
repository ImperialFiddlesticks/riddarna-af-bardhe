import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="main-container">
      <div className="top-image">
        <h1>Riddarna af Bardhe</h1>
      </div>
      <div className="info-container">
        <div className="info-box">
          <div className="info-content">
            <img alt="riddare" src="/riddare.jpg" className="info-img" />
            <div className="info-text">
              <h2>Föreningen</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div className="info-content">
            <div className="info-text">
              <h2>Tornerspel</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
            <img alt="riddare" src="/riddare2.jpg" className="info-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
