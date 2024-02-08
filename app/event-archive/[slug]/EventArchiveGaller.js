'use client'
import React, { useState, useEffect } from 'react';
import configData from '../../../config.json';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';

const EventArchiveGallery = ({ slug }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${configData.SERVER_URL}events_archive?slug=${slug}&_embed`);
                if (!res.ok) {
                    throw new Error(`Failed to fetch data. Status: ${res.status}`);
                }
                const result = await res.json();
                setData(result);
                setLoading(false);
                console.log(result)
            } catch (error) {
                console.error('Error fetching data:', error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    if (loading) {
        return <p>Please wait...</p>;
    }

    return (
        <Container>

            <Row className='d-flex flex-lg-row flex-column flex-wrap'>
                {data.acf.photo_gallery.gallery_1[0].map((photo, index) => (
                    <Col key={index} md={3}>
                        <Image
                            src={photo.full_image_url}
                            alt=""
                            width={300}
                            height={200}
                            style={{ objectFit: 'cover' }}
                        />
                    </Col>
                ))}
            </Row>

        </Container >
    );
};

export default EventArchiveGallery;
