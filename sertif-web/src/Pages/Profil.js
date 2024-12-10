function Profil() {
    return (
        <div>
            <div className="text-center">
                <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Profil Rumah Sakit Sehat Sejahtera</h1>
            </div>
            <div>
                <h4 style={{ color: "#4D7C0F", fontWeight: "bold" }}><i>Visi</i></h4>
                <p style={{ fontSize: "24px" }} >Menjadi rumah sakit terkemuka dalam layanan kesehatan spesialis jantung dan saraf yang terpercaya dengan berbasis teknologi modern.</p>
            </div>
            <div>
                <h4 style={{ color: "#4D7C0F", fontWeight: "bold" }}><i>Misi</i></h4>
                <div className="mx-5" style={{ fontSize: "24px" }}>
                    <p>1.	Memberikan pelayanan kesehatan berkualitas tinggi yang berpusat pada kebutuhan pasien.</p>
                    <p>2.	Mengembangkan teknologi medis terkini untuk mendukung diagnosa dan perawatan.</p>
                    <p>3.	Menyediakan tenaga medis dan paramedis profesional serta berpengalaman.</p>
                    <p>4.	Membangun lingkungan yang nyaman dan aman bagi pasien dan keluarga.</p>
                </div>
            </div>
            <div className="mb-5">
                <h4 className="mb-4" style={{ color: "#4D7C0F", fontWeight: "bold" }}><i>Layanan Unggulan</i></h4>
                <div style={{ fontSize: "24px" }}>
                    <div>
                        <p className="mx-5"><b>1. Spesialis Jantung:</b></p>
                        <div style={{ marginLeft: "150px", marginRight: "150px" }}>
                            <p>o	Layanan kateterisasi jantung (Cath Lab).</p>
                            <p>o	Pemeriksaan dan perawatan penyakit jantung koroner.</p>
                            <p>o	Rehabilitasi jantung pascaoperasi.</p>
                        </div>
                    </div>
                    <div>
                        <p className="mx-5"><b>2.	Spesialis Saraf:</b></p>
                        <div style={{ marginLeft: "150px", marginRight: "150px" }}>
                            <p>o	Diagnosa dan pengobatan stroke.</p>
                            <p>o	Layanan neurologi komprehensif, termasuk rehabilitasi saraf.</p>
                            <p>o	Penanganan penyakit neurodegeneratif seperti Parkinson dan Alzheimer.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5">
                <h4 className="mb-3 mt-5" style={{ color: "#4D7C0F", fontWeight: "bold" }}><i>"Kesehatan Anda, Prioritas Kami"</i></h4>
                <p style={{ fontSize: "24px" }}><i>Dengan dedikasi selama 10 tahun dalam memberikan layanan kesehatan, Rumah Sakit Sejahtera terus berkomitmen untuk menjadi pilihan utama dalam layanan spesialis jantung dan saraf.</i></p>
            </div>
        </div>
    )
}

export default Profil;