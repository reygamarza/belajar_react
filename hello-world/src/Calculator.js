import React, { useState } from 'react';

function Calculator() {
    const [input1, setInput1] = useState();
    const [input2, setInput2] = useState();
    const [hasil, setHasil] = useState(0);

    const handleClick = (e) => {
        e.preventDefault(); // Mencegah halaman untuk reload saat form disubmit
        setHasil(parseFloat(input1) + parseFloat(input2) + '👍'); // Menambahkan kedua angka
    }

    return (
        <div className="Calculator">
            <div>
                <h2>Calculator</h2>
                <form>
                    <div>
                        <label htmlFor="input1">Input 1: </label>
                        <input
                            id="input1"
                            value={input1}
                            onChange={(e) => setInput1(e.target.value)}
                            type="number"
                            placeholder="Masukan angka pertama"
                        />
                    </div>
                    <div>
                        <label htmlFor="input1">Input 2: </label>
                        <input
                            id="input2"
                            value={input2}
                            onChange={(e) => setInput2(e.target.value)}
                            type="number"
                            placeholder="Masukan angka kedua"
                        />
                    </div>
                    <div className='submit'>
                        <div>
                            <h2>Hasil: {hasil}</h2>
                        </div>
                        <button onClick={handleClick}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Calculator;