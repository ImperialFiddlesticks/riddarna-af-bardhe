import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/om-oss/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="main-container">
      <div className="top-image">
        <h1>Om oss</h1>
      </div>
      <div className="history-container">
        <div className="history-box">
          <div className="history-text">
            <h2>Vår Historia</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
          </div>
          <img
            alt="Riddare på hästar"
            className="history-img"
            src="/public/föreningen.jpg"
          />
        </div>
      </div>

      <div className="knight-container">
        <img
          alt="torn paper edge"
          className="torn-edge-dark"
          src="/torn-edge-dark.png"
        />

        <div className="knight-box">
          <h1 className="section-headline">Riddare</h1>
          <div className="knight-wrapper">
            <div className="knight">
              <img
                src="/stormanåhl.jpg"
                alt="Storman Åhl"
                className="knight-img"
              />
              <div className="knight-text">
                <h2>Storman Åhl</h2>
                <p>Lorem ipsum dolor sit amet.</p>
                <ul>
                  <li>Namn: Rickard Åhl</li>
                  <li>Favoritvapen: Svärd</li>
                </ul>
              </div>
            </div>
            <div className="knight">
              <img
                src="/riddareapalle.jpg"
                alt="Riddaren af Apalle"
                className="knight-img"
              />
              <div className="knight-text">
                <h2>Riddaren af Apalle</h2>
                <p>Lorem ipsum dolor sit amet.</p>
                <ul>
                  <li>Namn: Camilla Åhl</li>
                  <li>Favoritvapen: Svärd</li>
                </ul>
              </div>
            </div>
            <div className="knight">
              <img
                src="/korpenöga.jpeg"
                alt="Korp Enöga"
                className="knight-img"
              />
              <div className="knight-text">
                <h2>Riddare Korp Enöga</h2>
                <p>Ett öga räcker – resten är överkurs!</p>
                <ul>
                  <li>Namn: Susanne Henriksson</li>
                  <li>Favoritvapen: Svärd</li>
                </ul>
              </div>
            </div>
            <div className="knight">
              <img
                src="/lejonetfrånnorden.jpg"
                alt="Lejonet Från Norden"
                className="knight-img"
              />
              <div className="knight-text">
                <h2>Lejonet från Norden</h2>
                <p>Lorem ipsum dolor sit amet.</p>
                <ul>
                  <li>Namn: Kim Andersen</li>
                  <li>Favoritvapen: Svärd</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
