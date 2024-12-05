import React from "react";
import { FaEnvelope, FaGithub, FaMapMarkerAlt, FaInstagramSquare } from "react-icons/fa";

function Contact() {
    return (
        <div className="container my-5">
            <h1 className="text-center display-4 fw-bold mb-5">
                Kontak Saya
            </h1>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h2 className="fw-bold mb-4" style={{ color: "#3f3d56" }}>Media Sosial</h2>
                    <ul className="list-unstyled lead">
                        <li className="mb-3 d-flex align-items-center">
                            <FaEnvelope className="me-3 fs-3 text-primary" />
                            <span className="fw-bold text-muted">marzareyga@gmail.com</span>
                        </li>
                        <li className="mb-3 d-flex align-items-center">
                            <FaGithub className="me-3 fs-3 text-black" />
                            <span className="fw-bold text-muted">reygamarza</span>
                        </li>
                        <li className="mb-3 d-flex align-items-center">
                            <FaInstagramSquare className="me-3 fs-3" style={{ color: '#E4405F' }} />
                            <span className="fw-bold text-muted">@reyga_marza</span>
                        </li>
                        <li className="d-flex align-items-center">
                            <FaMapMarkerAlt className="me-3 fs-3 text-danger" />
                            <span className="fw-bold text-muted">Bandung, Indonesia</span>
                        </li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h2 className="fw-bold mb-4" style={{ color: "#3f3d56" }}>Kirim Pesan</h2>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label fw-bold text-muted">Nama Anda</label>
                            <input
                                type="text"
                                id="name"
                                className="form-control shadow-sm"
                                placeholder="Masukkan nama Anda"
                                style={{ borderRadius: "10px" }}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-bold text-muted">Email Anda</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control shadow-sm"
                                placeholder="Masukkan email Anda"
                                style={{ borderRadius: "10px" }}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label fw-bold text-muted">Pesan</label>
                            <textarea
                                id="message"
                                className="form-control shadow-sm"
                                rows="5"
                                placeholder="Tulis pesan Anda di sini"
                                style={{ borderRadius: "10px" }}
                                required
                            ></textarea>
                        </div>
                        <button className="btn w-100 fw-bold"
                            style={{
                                background: 'linear-gradient(90deg, #0d6efd, #1a73e8)',
                                color: "white",
                                borderRadius: "50px",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                            }}>
                            Kirim Pesan
                        </button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
