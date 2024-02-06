'use client'
import React, { useState, useEffect } from 'react';
import configData from '../../../config.json';
import { Col, Container } from 'react-bootstrap';
import Image from 'next/image';

const EventArchiveGallery = ({ slug }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${configData.SERVER_URL}events_gallery?categories=27&slug=${slug}`);
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
            <Col>
                {data.map((post) => (
                    <div key={post.id}>
                        {/* <Image key={index} src={image.url} alt={image.alt} width={200} height={200} /> */}
                        {post.acf.photo_gallery[0]}
                    </div>
                ))}
            </Col>
        </Container>
    );
};

export default EventArchiveGallery;
