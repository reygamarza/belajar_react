import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Detail() {
    const { id } = useParams();
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(response => setPhoto(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    return photo ? (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={photo.thumbnailUrl} alt={photo.title} />
            <Card.Body>
                <Card.Title>{photo.title}</Card.Title>
                <Card.Text>Album ID: {photo.albumId}</Card.Text>
            </Card.Body>
        </Card>
    ) : (
        <p>Loading...</p>
    );
}

export default Detail;
