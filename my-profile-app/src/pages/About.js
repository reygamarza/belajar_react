import React from 'react';
import { SiPhp, SiJavascript, SiLaravel, SiLivewire, SiReact, SiMysql, SiGit, SiGithub, SiFigma } from 'react-icons/si';
import { BiNetworkChart } from 'react-icons/bi';
import { TbBrandCSharp } from "react-icons/tb";

function About() {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                <div className="col-md-6 text-center">
                    <div className="position-relative">
                        <div className="bg-secondary position-absolute top-0 start-50 translate-middle-x rounded-circle"
                            style={{
                                width: '350px',
                                height: '350px',
                                filter: 'blur(80px)',
                                opacity: '0.5',
                                zIndex: '1'
                            }} ></div>
                        <img
                            src="/images/focus.png"
                            alt="Reyga Marza Ramadhan"
                            className="position-relative img-fluid shadow"
                            style={{
                                maxWidth: '300px',
                                objectFit: 'cover',
                                zIndex: '2',
                                border: '5px solid white'
                            }}
                        />
                    </div>
                </div>

                <div className="col-md-6">
                    <h1 className="display-4 fw-bold mb-3">Tentang Saya</h1>
                    <p className="lead mb-4">Hai!👋😁</p>
                    <p className="lead mb-4">
                        Saya <span className="text-primary fw-bold">Reyga Marza Ramadhan, </span> lahir pada 24 September 2006 di Bandung. 
                        Seorang pelajar yang sangat menyukai posisi <span className="text-warning fw-bold">Backend Developer</span>.
                    </p>
                    <p className="lead mb-4">
                        Saya mulai menyukai coding saat masuk kelas 10 di SMKN 11 Bandung dimana saya mengambil jurusan <span className="text-success fw-bold">Rekayasa Perangkat Lunak</span>. Lalu saya belajar banyak hal disana, mulai dari bahasa pemrograman sampai framework yang dipakai
                    </p>
                    <p className="lead mb-4">
                        Ketika saya sedang bosan, saya suka membaca tentang teknologi baru, mencoba framework, atau sekadar mengutak-atik aplikasi pribadi. Saya juga sangat senang ketika.
                    </p>
                    <p className="lead mb-4">
                        Salam kenal ya!
                    </p>
                </div>
            </div>

            <div className="mt-5">
                <h2 className="text-center fw-bold mb-4">Keahlian dan Tools</h2>
                <div className="d-flex justify-content-center gap-4 flex-wrap">
                    <div className="text-center">
                        <SiPhp className="fs-1 text-primary" />
                        <p className="mt-2 fw-bold">PHP</p>
                    </div>
                    <div className="text-center">
                        <SiJavascript className="fs-1 text-warning" />
                        <p className="mt-2 fw-bold">JavaScript</p>
                    </div>
                    <div className="text-center">
                        <TbBrandCSharp className="fs-1" style={{
                            color: '#6f42c1',
                        }} />
                        <p className="mt-2 fw-bold">C#</p>
                    </div>
                    <div className="text-center">
                        <SiLaravel className="fs-1 text-danger" />
                        <p className="mt-2 fw-bold">Laravel</p>
                    </div>
                    <div className="text-center">
                        <SiLivewire className="fs-1" style={{
                            color: '#d63384',
                        }} />
                        <p className="mt-2 fw-bold">Livewire</p>
                    </div>
                    <div className="text-center">
                        <SiReact className="fs-1 text-info" />
                        <p className="mt-2 fw-bold">React.js</p>
                    </div>
                    <div className="text-center">
                        <SiMysql className="fs-1 text-success" />
                        <p className="mt-2 fw-bold">MySQL</p>
                    </div>
                    <div className="text-center">
                        <SiGit className="fs-1" style={{
                            color: '#fd7e14',
                        }} />
                        <p className="mt-2 fw-bold">Git</p>
                    </div>
                    <div className="text-center">
                        <SiGithub className="fs-1 text-dark" />
                        <p className="mt-2 fw-bold">GitHub</p>
                    </div>
                    <div className="text-center">
                        <BiNetworkChart className="fs-1 text-secondary" />
                        <p className="mt-2 fw-bold">REST API</p>
                    </div>
                    <div className="text-center">
                        <SiFigma className="fs-1 text-danger" />
                        <p className="mt-2 fw-bold">Figma</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
