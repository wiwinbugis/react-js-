import React from "react";

function Team() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Tim Kami</h2>
      <div className="row">
        {/* Anggota 1 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/300"
              className="card-img-top"
              alt="Anggota 1"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Ayu Setiawan</h5>
              <p className="card-text">Front-End Developer</p>
            </div>
          </div>
        </div>
        {/* Anggota 2 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/300"
              className="card-img-top"
              alt="Anggota 2"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Budi Hartono</h5>
              <p className="card-text">UI/UX Designer</p>
            </div>
          </div>
        </div>
        {/* Anggota 3 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/300"
              className="card-img-top"
              alt="Anggota 3"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Citra Ananda</h5>
              <p className="card-text">Back-End Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
