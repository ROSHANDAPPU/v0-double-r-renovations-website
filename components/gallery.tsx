
'use client'
import React, { useState } from 'react';
import './gallery.css';
import Image from 'next/image';

const images = [
    { id: 1, src: '/images/arts-and-crafts-cottage-kitchen-renovation-vintage.jpg', title: 'Arts and Crafts Kitchen' },
    { id: 2, src: '/images/colonial-home-interior-classic-elegant-entryway-st.jpg', title: 'Colonial Home Entryway' },
    { id: 3, src: '/images/craftsman-restoring-vintage-wooden-staircase-1920s.jpg', title: 'Craftsman Staircase' },
    { id: 4, src: '/images/elegant-1920s-craftsman-home-interior-with-rich-wo.jpg', title: '1920s Craftsman Interior' },
    { id: 5, src: '/images/elegant-1920s-craftsman-home-interior-woodwork.jpg', title: '1920s Craftsman Woodwork' },
    { id: 6, src: '/images/elegant-craftsman-home-interior-with-wood-details-.jpg', title: 'Craftsman Home Interior' },
    { id: 7, src: '/images/farmhouse-interior-rustic-beams-white-walls-modern.jpg', title: 'Farmhouse Interior' },
    { id: 8, src: '/images/georgian-colonial-home-grand-staircase-restoration.jpg', title: 'Georgian Colonial Staircase' },
    { id: 9, src: '/images/prairie-style-home-restoration-living-room-firepla.jpg', title: 'Prairie Style Living Room' },
    { id: 10, src: '/images/restored-1920s-craftsman-bungalow-exterior-white-t.jpg', title: '1920s Craftsman Bungalow' },
    { id: 11, src: '/images/spanish-colonial-home-courtyard-renovation.jpg', title: 'Spanish Colonial Courtyard' },
    { id: 12, src: '/images/tudor-revival-home-renovation-elegant-interior.jpg', title: 'Tudor Revival Interior' },
    { id: 13, src: '/images/victorian-home-interior-elegant-living-room-firepl.jpg', title: 'Victorian Living Room' },
  ];
  

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div className="gallery-container">
            <h1 className="gallery-title">Our Gallery</h1>
            <div className="gallery-grid">
                {images.map((image) => (
                    <div key={image.id} className="gallery-item" onClick={() => setSelectedImg(image.src)}>
                        <Image src={image.src} alt={image.title} width={500} height={500} />
                        <div className="gallery-item-overlay">
                            <p>{image.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImg && (
                <div className="lightbox" onClick={() => setSelectedImg(null)}>
                    <span className="close-button">&times;</span>
                    <img src={selectedImg} alt="Enlarged view" className="lightbox-content" />
                </div>
            )}
        </div>
    );
};

export default Gallery;
