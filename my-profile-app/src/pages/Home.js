import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css'

const Home = () => {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <span className="badge bg-success mb-3">Developer (Backend Enthusiast)</span>
                    <h1 className="display-4 fw-bold mb-3">
                        Reyga Marza Ramadhan <br />
                    </h1>
                    <p className="lead text-muted mb-4">
                        Ngoding itu seperti jatuh cinta. Dimulai dengan rasa penasaran, dihiasi tantangan,
                        dan (semoga) berakhir dengan kebahagiaan saat semuanya berjalan lancar.
                    </p>
                    <div className="d-flex gap-3">
                        <Link to="/about" className="btn btn-primary btn-lg">
                            <i className="bi bi-person-circle me-2"></i> Siapa Saya?
                        </Link>
                        <Link to="/projects" className="btn btn-outline-secondary btn-lg">
                            <i className="bi bi-layers me-2"></i> Lihat Proyek
                        </Link>
                    </div>

                    <div className="mt-5 text-center text-md-start">
                        <div className="d-flex gap-3">
                            <a href="https://github.com/reygamarza/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: '#333',
                                    fontSize: '2rem',
                                    transition: 'all 0.3s',
                                }}>
                                <i className="bi bi-github"></i>
                            </a>
                            <a href="https://www.instagram.com/reyga_marza"
                                style={{ color: '#E4405F', fontSize: '2rem' }}>
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="col-md-6 text-center">
                    <div className="position-relative">
                        <div
                            className="bg-primary position-absolute top-0 start-50 translate-middle-x rounded-circle"
                            style={{
                                width: '350px',
                                height: '350px',
                                filter: 'blur(100px)',
                                opacity: '0.5',
                                zIndex: '1'
                            }}
                        ></div>
                        <img src="/images/saya.jpg"
                            alt="Reyga Marza Ramadhan"
                            className="home position-relative img-fluid rounded-circle shadow"
                            style={{
                                maxWidth: '300px',
                                objectFit: 'cover',
                                zIndex: 2,
                                border: '5px solid white',
                                background: 'linear-gradient(135deg, #ff7eb3, #8e44ad)',
                            }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;