import React, { useState } from "react";

function InputNama() {
    const [nama, setNama] = useState('');

    return (
        <div className="inputNama">
            <h2>Input Nama Kamu</h2>
            <form>
                <div>
                    <label htmlFor="nama">Nama Kamu: </label>
                    <input
                        id="nama"
                        value={nama}
                        type="text"
                        onChange={(e) => setNama(e.target.value)}
                        placeholder="Masukan Nama Kamu"
                    />
                </div>
            </form>
            <div className="hasilNama">
            {nama && (
                <div>
                    <h3>Halo Bro, {nama}! 👋</h3>
                </div>
            )}
            </div>
        </div>
    )
}

export default InputNama;