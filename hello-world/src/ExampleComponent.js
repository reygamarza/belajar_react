import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [message, setMessage] = useState("Hello, world!");

  // Efek yang hanya dijalankan saat pertama kali komponen dimuat
  useEffect(() => {
    console.log("Komponen ExampleComponent sudah dirender!");
    // Cleanup function yang dijalankan saat komponen di-unmount
    return () => {
      console.log("Komponen ExampleComponent akan di-unmount!");
    };
  }, []); // Menggunakan array kosong agar hanya dijalankan sekali pada mount dan unmount

  // Efek yang dijalankan ketika nilai message berubah
  useEffect(() => {
    console.log("State message berubah:", message);
  }, [message]);

  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setMessage("Hello, React!")}>Ubah Pesan</button>
    </div>
  );
}
export default ExampleComponent;
