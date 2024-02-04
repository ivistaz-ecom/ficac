'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const DocumentsList = () => {



    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            // let result = await fetch(`https://ficac.ivistaz.co/wp-json/wp/v2/directors?_embed&per_page=100`);
            let result = await fetch('https://beta.ficacworld.org/wp-json/wp/v2/documents?_embed');

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
                <Row className='px-lg-5 my-4 gap-3'>
                    {data.map((items) => (
                        <div key={items}>
                            {/* <Col className='col-4'></Col> */}
                            <Col className=' mx-lg-5 px-lg-4 d-flex flex-lg-row flex-column flex-wrap justify-content-lg-between justify-content-center align-content-center align-items-center'
                                style={{ fontSize: "23px", color: "#001C79" }}>
                                <p>
                                    <b>{items.title.rendered}</b>
                                </p>

                                {items.acf?.pdf_file?.url && (
                                <a href={items.acf.pdf_file.url} target="_blank" rel="noopener noreferrer">
                                    <p
                                        className='rounded-2 py-2 px-4 px-lg-5 d-inline-block text-white '
                                        style={{ backgroundColor: "#001C79", fontSize: "18px" }}
                                    >
                                        View
                                    </p>
                                </a>
                            )}
                        
                            </Col>
                            {/* <Col className='col-4'></Col> */}
                        </div>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default DocumentsList
