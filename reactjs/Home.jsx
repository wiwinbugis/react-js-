import React from "react";

function Home() {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-3">Selamat Datang di Website Kami</h1>
      <p className="lead">Kami membangun web ini dengan React & Bootstrap</p>
      <img
        src="https://via.placeholder.com/800x400"
        alt="Hero"
        className="img-fluid rounded shadow"
      />
    </div>
  );
}

export default Home;
