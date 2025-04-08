// import Image1 from "../../assets/ads-1.png";

export const Learding = () => {
  return (
    <div>
      {/* Main Content */}
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-2 d-none d-md-block">
            {/* Adverting */}
            <img src="../../assets/ads-1.png" alt="Adverting" />
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Flyway + Spring Boot</h5>
                <p className="card-text text-center">
                  Study spring boot just 2 hours change changes your life
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2 d-none d-md-block">
            {/* Adverting */}
            <img src="../../assets/ads-1.png" alt="Adverting" />
          </div>
        </div>
      </div>
      {/* Footer */}
    </div>
  );
};
