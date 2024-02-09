'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import configData from "../../config.json";

const DocumentsList = () => {



    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            let result = await fetch(`${configData.SERVER_URL}documents?productions=${configData.SERVER}&_embed`);

            result = await result.json();
            setData(result);
            // console.log(result);
        } catch {
            // console.log('Error fetching data');
        }
    }

    useEffect(() => {
        fetchData();
    })

    return (
        <>
            <Container className='py-3'>
                {data.map((items, index) => (
                    <Row className='border-2 my-3 p-2 d-flex flex-lg-row flex-column text-center text-lg-start' key={index}>
                        <Col lg={8}>
                            <h2 className='fs-4 fw-400'>{items.title.rendered}</h2></Col>
                        <Col lg={4}>
                            {items.acf?.pdf_file?.url && (
                                <Link href={items.acf.pdf_file.url} className='btn btn-primary border-0 wbg-blue px-5 py-2 fs-6 fw-300' target='_blank'>View</Link>
                            )}
                        </Col>
                    </Row>

                ))}
            </Container>
        </>
    )
}

export default DocumentsList
