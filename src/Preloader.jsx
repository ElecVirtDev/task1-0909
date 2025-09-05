export default function Preloader() {
  return (
    <div className="preloader" style={{ display: "none" }}>
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-icon">
          <img src="public/favicon.png" alt="TechPro" />
        </div>
      </div>
    </div>
  );
}
