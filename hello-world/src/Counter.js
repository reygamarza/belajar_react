// src/Counter.js
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0); // state untuk menyimpan nilai counter

    const handleClick = () => {
        setCount(count + 1); // update nilai counter
    }

    return (
        <div className='counter'>
            <h2>Pahala Kamu: { count } ✍️</h2> {/* Menampilkan nilai counter */}
            <button onClick={handleClick}>Tambah Pahala</button> {/* Tombol untuk menambah nilai */}
            <p>(Satu klik satu pahala 🙏)</p>
        </div>
    );
}

export default Counter;