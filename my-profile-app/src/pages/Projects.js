import React from "react";

function Projects() {
    return (
        <div className="container my-5">
            <h1 className="text-center display-4 fw-bold mb-5">Proyek Saya</h1>
            <div className="row g-4">
                <div className="col-md-4">
                    <div className="card shadow-sm h-100">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title fw-bold">Aplikasi Travel</h5>
                            <p className="card-text text-secondary">
                                Merancang aplikasi untuk pengguna travel menggunakan PHP Native.
                            </p>
                            <div className="mt-auto">
                                <p className="text-muted">
                                    <strong>Posisi:</strong> Full-stack Developer
                                </p>
                                <p className="text-muted">
                                    <strong>Teknologi:</strong> PHP
                                </p>
                                {/* <a href=""
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary w-100 fw-bold">
                                    Lihat Proyek
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow-sm h-100">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title fw-bold">Website Produk Game</h5>
                            <p className="card-text text-secondary">
                                Merancang aplikasi e-commerce tentang penjualan produk game menggunakan Laravel.
                            </p>
                            <div className="mt-auto">
                                <p className="text-muted">
                                    <strong>Posisi:</strong> Full-stack Developer
                                </p>
                                <p className="text-muted">
                                    <strong>Teknologi:</strong> Laravel
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow-sm h-100">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title fw-bold">Website Tefa RPL</h5>
                            <p className="card-text text-secondary">
                                Merancang website Tefa RPL menggunakan Wordpress.
                            </p>
                            <div className="mt-auto">
                                <p className="text-muted">
                                    <strong>Posisi:</strong> Full-stack Developer
                                </p>
                                <p className="text-muted">
                                    <strong>Teknologi:</strong> Wordpress
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow-sm h-100">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title fw-bold">Sistem Absensi Sekolah</h5>
                            <p className="card-text text-secondary">
                                Aplikasi berbasis web untuk mengelola absensi siswa dengan fitur geolokasi dan face detection.
                            </p>
                            <div className="mt-auto">
                                <p className="text-muted">
                                    <strong>Teknologi:</strong> Laravel, Livewire, Leaflet.js
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow-sm h-100">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title fw-bold">Website Portofolio</h5>
                            <p className="card-text text-secondary">
                                Portofolio pribadi yang menampilkan proyek, pengalaman, dan informasi kontak.
                            </p>
                            <div className="mt-auto">
                                <p className="text-muted">
                                    <strong>Teknologi:</strong> React, Bootstrap, CSS
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
