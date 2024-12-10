import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Image } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Home() {
    const [photos, setPhotos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                setPhotos(response.data.slice(0, 5));
            }).catch(error => console.error(error))
    }, []);

    useEffect(() => {
        console.log(photos);
    }, [photos]);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Photo</th>
                </tr>
            </thead>
            <tbody>
                {photos.map(photo => (
                    <tr key={photo.id} onClick={() => navigate(`/detail/${photo.id}`)}>
                        <td>{photo.title}</td>
                        <td>
                            <Image src={photo.thumbnailUrl} width={'100px'} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default Home;