'use client'
import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'

import configData from '../.../../../config.json'
import Link from 'next/link'

const EventArchiveList = () => {

    const [data, setData] = useState([]);

    const Acf_URL = `${configData.SERVER_URL}events_archive?productions=${configData.SERVER}&_embed`;

    const fetchPosts = async () => {
        try {
            const result = await fetch(Acf_URL);
            if (!result.ok) {
                throw new Error(`HTTP error! Status: ${result.status}`);
            }
            const postsData = await result.json();
            // console.log('API Response:', postsData);
            console.log(postsData);

            if (typeof postsData === 'object') {
                setData(postsData);
            }
        } catch (error) {
            console.error('Error fetching posts', error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <>
            <Container>
                {data.map((item, index) => (
                    <div class="card mb-3 rounded-3 btn-border" key={index}>
                        <div class="row g-0 p-0 p-3">
                            <div class="col-md-10">
                                <div class="card-body">
                                    <h5 class="card-title fs-5 fw-500" dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                                    <p class="card-text fs-6 fw-300" >{item.acf.date}</p>
                                </div>
                            </div>
                            <div class="col-md-2 justify-content-center align-self-center text-center">
                                <Link
                                    href={`/event-archive/${item.slug}`}
                                    className='btn btn-primary border-0 px-3 py-2 fs-5 fw-300'
                                    style={{ backgroundColor: '#001CAA' }}
                                >
                                    View Photos
                                </Link>
                                {/* <Link href="" className='btn btn-primary border-0 px-3 py-2 fs-5 fw-300' style={{ backgroundColor: '#001CAA' }}>View Photos</Link> */}
                            </div>
                        </div>
                    </div>
                ))}
            </Container>
        </>
    )
}

export default EventArchiveList