"use client";
import React, { useState, useEffect } from "react";
import { Col, Row, Image, Container, Button } from "react-bootstrap";

import "../../app/globals.css";

const CentralCommittiees = () => {
  const [posts, setPosts] = useState([]);
  const [isPopupShow, setIsPopupShow] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const background = {
    backgroundImage: "url('/central_banner.png')",
    height: "90vh",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const loopBg = {
    background: "#810100",
  };

  const closePopup = () => {
    setIsPopupShow(false);
    setSelectedPost(null);
  };

  const fetchPosts = async () => {
    try {
      const result = await fetch(
        "https://beta.ficacworld.org/wp-json/wp/v2/committiee?categories=7&per_page=100&_embed"
      );
      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);
      }
      const postsData = await result.json();
      setPosts(postsData);
    } catch (error) {
      console.error("Error fetching posts", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const openPopup = (post) => {
    setSelectedPost(post);
    setIsPopupShow(true);
  };

  return (
    <>
      <Container fluid className="container-padding">
        {/* <Container fluid className="p-0" style={background}></Container> */}
        <Container>
          {/* <Col className="w-100 m-0"></Col>

          <Col className="banner-text-container text-white">
            <p className="mb-0">
              FICAC
              <br />
              Committees
            </p>
            <p style={{ fontSize: "30px", fontWeight: "lighter" }}>
              Central Committees
            </p>
          </Col> */}

          <Col className="d-flex flex-column gap-4 my-5 mt-5">
            {posts.map((post) => (
              <Row key={post.id} style={loopBg} className="ms-lg-5 py-0 px-4 px-lg-0 py-lg-4 d-flex flex-lg-row flex-column custom-mobile-post">
                <Col className="ms-5 custom-commite-loop-post p-0 d-flex flex-row align-items-center py-lg-3" lg={4}>
                  <Image
                    src={post._embedded["wp:featuredmedia"][0].source_url}
                    alt={post.title.rendered}
                    fluid
                  />
                </Col>

                <Col className="p-0 pb-3 pb-lg-0">
                  <p className="text-white" style={{ fontSize: "24px" }}
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}>
                  </p>

                  <p className="text-white" style={{ fontSize: "18px" }}>
                    <div
                      dangerouslySetInnerHTML={{ __html: post.acf.honorary }}
                    />
                  </p>

                  <p className="text-white" style={{ fontSize: "18px" }}>
                    <div dangerouslySetInnerHTML={{ __html: post.acf.name }} />
                  </p>

                  <p className="text-white" style={{ fontSize: "18px" }}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.acf.excerpt_committee,
                      }}
                    />
                  </p>
                  {/* <Col className="text-align-center justify-content-lg-start justify-content-center d-flex">
                  <Button
                    onClick={() => openPopup(post)}
                    className="bg-white border-0 "
                    style={{ color: "#001C79" }}
                  >
                    Read More
                  </Button>
                  </Col> */}
                </Col>
              </Row>
            ))}
          </Col>

          {isPopupShow && selectedPost && (
            <Container
              fluid
              className="d-flex align-items-center justify-content-center position-fixed top-0 bottom-0 start-0 end-0 bg-black bg-opacity-50"
              style={{ zIndex: 3 }}
              onClick={closePopup}
            >
              <Container className="position-relative p-0 overflow-y-scroll" style={{maxHeight: "90vh"}}>
                <Col 
                className="position-absolute top-0 end-0 p-2"
                 >
                  <i
                    class="bi bi-x-circle d-flex flex-row justify-content-end fs-2 text-white"
                  ></i>
                </Col>
                <div
                  className="p-4"
                  onClick={(e) => e.stopPropagation()}
                  style={{ backgroundColor: "#810100" }}
                >
                  <span onClick={closePopup} className="text-white"></span>
                  <Col className="text-white">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: selectedPost.content.rendered,
                      }}
                    />
                  </Col>
                </div>
              </Container>
            </Container>
          )}
        </Container>
      </Container>
    </>
  );
};

export default CentralCommittiees;
