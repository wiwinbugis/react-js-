import React from "react";

function Contact() {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Hubungi Kami</h2>
      <form className="col-md-8 offset-md-2">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nama
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Masukkan nama"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="email@domain.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Pesan
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            placeholder="Tulis pesan..."
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Kirim
        </button>
      </form>
    </div>
  );
}

export default Contact;
