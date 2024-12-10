import { Table } from 'react-bootstrap';
function Fasilitas() {
    return (
        <div>
            <div className="text-center">
                <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Fasilitas Rumah Sakit Sehat Sejahtera</h1>
            </div>
            <div>
                <h4 style={{ color: "#4D7C0F" }}><i>Fasilitas</i></h4>
                <div className="mx-5" style={{ fontSize: "24px" }}>
                    <p>•	Unit Gawat Darurat 24 jam dengan penanganan kasus darurat jantung dan stroke.</p>
                    <p>•	Ruang operasi modern dengan standar internasional.</p>
                    <p>•	Laboratorium diagnostik lengkap.</p>
                    <p>•	Fasilitas rawat inap nyaman dengan berbagai kelas.</p>
                    <p>•	Klinik rawat jalan dengan layanan konsultasi spesialis.</p>
                </div>
            </div>
            <div>
                <h4 style={{ color: "#4D7C0F" }}><i>Keunggulan</i></h4>
                <div className="mx-5" style={{ fontSize: "24px" }}>
                    <p>•	Mengutamakan teknologi medis terkini seperti MRI, CT Scan, dan EKG untuk diagnosa cepat dan akurat.</p>
                    <p>•	Tim dokter spesialis jantung dan saraf berpengalaman lebih dari 10 tahun.</p>
                    <p>•	Program edukasi kesehatan untuk masyarakat seputar pencegahan penyakit jantung dan stroke.</p>
                </div>
            </div>
            <div>
                <h4 style={{ color: "#4D7C0F" }}><i>Kamar</i></h4>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Kelas 1</th>
                            <th>Executive</th>
                            <th>VIP</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img style={{ width: '100%', height: '300px' }} src={'images/kelas1.jpg'} alt="kelas1" />
                            </td>
                            <td>
                                <img style={{ width: '100%', height: '300px' }} src={'images/exe.jpeg'} alt="exe" />
                            </td>
                            <td>
                                <img style={{ width: '100%', height: '300px' }} src={'images/vip.jpg'} alt="vip" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>•	1 tempat tidur pasien dengan kenyamanan premium (1 Kamar besisi 2 Pasien).</p>
                                <p>•	Ruangan ber-AC.</p>
                                <p>•	Kamar mandi dengan pemanas air </p>
                                <p>•	TV LED 32 inci</p>
                                <p>•	Lemari pakaian kecil.</p>
                                <p>•	Makanan sehat 3 kali sehari (sesuai rekomendasi gizi).</p>
                            </td>
                            <td>
                                <p>•	1  tempat tidur pasien elektrik dengan pengaturan otomatis (1 Kamar 1 pasien)</p>
                                <p>•	Ruangan ber-AC </p>
                                <p>•	Kamar mandi dengan pemanas air</p>
                                <p>•	TV LED 42 inci dengan saluran kabel.</p>
                                <p>•	Sofa untuk pendamping.</p>
                                <p>•	Wi-Fi gratis.</p>
                                <p>•	Makanan bisa disesuaikan dengan preferensi).</p>
                            </td>
                            <td>
                                <p>•	Kamar luas dengan desain mewah</p>
                                <p>•	1  tempat tidur pasien elektrik dengan pengaturan otomatis (1 Kamar 1 pasien)</p>
                                <p>•	Ruangan ber-AC dengan tata interior modern.</p>
                                <p>•	Kamar mandi dengan pemanas air</p>
                                <p>•	TV LED 50 inci dengan saluran premium.</p>
                                <p>•	Sofa bed dan kursi tambahan untuk keluarga/pengunjung.</p>
                                <p>•	Lemari pakaian besar dan meja kerja eksklusif.</p>
                                <p>•	Mini kulkas, pantry, dan fasilitas pembuat teh/kopi.</p>
                                <p>•	Makanan premium dengan pilihan menu harian.</p>
                                <p>•	Parkir khusus untuk pasien VIP.</p>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Fasilitas;