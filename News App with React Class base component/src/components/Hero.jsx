import React from 'react';

export default function Hero() {
    return (
        <>
            <div id="carouselExampleDark" className="carousel carousel-dark slide ">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="https://plus.unsplash.com/premium_photo-1707080369554-359143c6aa0b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 img-fluid" alt="..." style={{ maxHeight: '500px', objectFit: 'cover' }} />
                        {/* <div className="carousel-caption d-none d-md-block text-white" style={{ top: '50%', transform: 'translateY(-50%)' }}>
                            <h1 style={{ fontSize: '3rem' }}>TechNews</h1>
                            <p style={{ fontSize: '1.2rem' }}>Stay updated with the latest trends, innovations, and breaking news in the tech world. Your go-to source for everything tech!</p>
                        </div> */}
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 img-fluid" alt="..." style={{ maxHeight: '500px', objectFit: 'cover' }} />
                        {/* <div className="carousel-caption d-none d-md-block text-white" style={{ top: '50%', transform: 'translateY(-50%)' }}>
                            <h1 style={{ fontSize: '3rem' }}>TechNews</h1>
                            <p style={{ fontSize: '1.2rem' }}>Innovations and trends at your fingertips. Discover the future of technology with us!</p>
                        </div> */}
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 img-fluid" alt="..." style={{ maxHeight: '500px', objectFit: 'cover' }} />
                        {/* <div className="carousel-caption d-none d-md-block text-white" style={{ top: '50%', transform: 'translateY(-50%)' }}>
                            <h1 style={{ fontSize: '3rem' }}>TechNews</h1>
                            <p style={{ fontSize: '1.2rem' }}>Your source for all things tech. Join us in exploring the endless possibilities of technology!</p>
                        </div> */}
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" style={{ filter: 'invert(1)'  }}></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" style={{ filter: 'invert(1)' }}></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}
