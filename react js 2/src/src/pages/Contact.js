import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <h2>Hubungi Kami</h2>
      <form>
        <input type="text" placeholder="Nama" required />
        <br />
        <input type="email" placeholder="Email" required />
        <br />
        <textarea placeholder="Pesan" required></textarea>
        <br />
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
};

export default Contact;
