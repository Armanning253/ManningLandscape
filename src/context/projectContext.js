import React, { useState, createContext } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {

    const [project, setProject] = useState([
        {
            id: 1,
            title: 'brick house',
            altImg: 'landScaped hill side of house',
            beforeImage: '/manning-landscape-images/brick/before.jpg',
            afterImage: '/images/manning-landscape-images/Brick-House/2b.jpg',
            aboutText: 'From Brick design to complete landscape installation, our skilled artisans transform urban landscapes.',
            buttonText: 'view brick house',
            linkUrl: '',
            imageGallory: [
                {

                    id: 1,
                    imgUrl: '/manning-landscape-images/brick/before.jpg',
                    alt: 'brick house landscape'
                },
                {
                    id: 2,
                    imgUrl: '/manning-landscape-images/brick/before2.jpg'
                },
                {
                    id: 3,
                    imgUrl: '/manning-landscape-images/brick/main.jpg'
                },
                {
                    id: 4,
                    imgUrl: '/manning-landscape-images/brick/main2.jpg'
                },
                {
                    id: 5,
                    imgUrl: '/manning-landscape-images/brick/flowerBed1.jpg'
                },
                {
                    id: 6,
                    imgUrl: '/manning-landscape-images/brick/flowerBed2.jpg'
                }
            ]
        },
        {
            title: 'Concrete house',
            altImg: 'hardScape',
            beforeImage: '/manning-landscape-images/concrete-house/before.jpg',
            afterImage: '/manning-landscape-images/concrete-house/main.jpg',
            aboutText: 'skilled artisans transform urban landscapes.',
            buttonText: 'view hardscape',
            id: 2,
            linkUrl: '',
            imageGallory: [
                {
                    id: 11,
                    imgUrl: '/manning-landscape-images/concrete-house/before.jpg',
                    alt: 'brick house landscape'
                },
                {
                    id: 12,
                    imgUrl: '/manning-landscape-images/concrete-house/C1a.jpg'
                },
                {
                    id: 13,
                    imgUrl: '/manning-landscape-images/concrete-house/C2a.jpg'
                },
                {
                    id: 14,
                    imgUrl: '/manning-landscape-images/concrete-house/C2c.jpg'
                },
                {
                    id: 15,
                    imgUrl: '/manning-landscape-images/concrete-house/C3.jpg'
                },
                {
                    id: 16,
                    imgUrl: '/manning-landscape-images/concrete-house/main.jpg'
                }
            ]
        },
        {
            title: 'Gig Harbor house',
            altImg: 'beatiful yard',
            beforeImage: '/manning-landscape-images/gig-harbor-house/before.jpg',
            afterImage: '/manning-landscape-images/gig-harbor-house/main.jpg',
            aboutText: 'skilled artisans transform urban landscapes.',
            buttonText: 'view yard',
            id: 3,
            linkUrl: '',
            imageGallory: [
                {
                    id: 21,
                    imgUrl: '/manning-landscape-images/gig-harbor-house/before.jpg',
                    alt: 'brick house landscape'
                },
                {
                    id: 22,
                    imgUrl: '/manning-landscape-images/gig-harbor-house/main.jpg'
                },
                {
                    id: 23,
                    imgUrl: '/manning-landscape-images/gig-harbor-house/1a.jpg'
                },
                {
                    id: 24,
                    imgUrl: '/manning-landscape-images/gig-harbor-house/1c.jpg'
                },
                {
                    id: 25,
                    imgUrl: '/manning-landscape-images/gig-harbor-house/3.jpg'
                },
                {
                    id: 26,
                    imgUrl: '/manning-landscape-images/gig-harbor-house/4.jpg'
                },
                {
                    id: 27,
                    imgUrl: '/manning-landscape-images/gig-harbor-house/5.jpg'
                },
                {
                    id: 28,
                    imgUrl: '/manning-landscape-images/gig-harbor-house/6.jpg'
                },
                {
                    id: 29,
                    imgUrl: '/manning-landscape-images/gig-harbor-house/7.jpg'
                },
                {
                    id: 30,
                    imgUrl: '/manning-landscape-images/gig-harbor-house/8.jpg'
                },
                {
                    id: 31,
                    imgUrl: '/manning-landscape-images/gig-harbor-house/10.jpg'
                }
            ]
        },
        {
            title: 'Landscape house',
            altImg: 'landscaped yard',
            beforeImage: '/manning-landscape-images/landscape/before2.jpg',
            afterImage: '/manning-landscape-images/landscape/main2.jpg',
            aboutText: 'skilled artisans transform yard landscapes.',
            buttonText: 'view Landscape',
            id: 4,
            linkUrl: '',
            imageGallory: [
                {
                    id: 11,
                    imgUrl: '/manning-landscape-images/landscape/before.jpg',
                    alt: 'brick house landscape'
                },
                {
                    id: 12,
                    imgUrl: '/manning-landscape-images/landscape/before2.jpg'
                },
                {
                    id: 13,
                    imgUrl: '/manning-landscape-images/landscape/main.jpg'
                },
                {
                    id: 14,
                    imgUrl: '/manning-landscape-images/landscape/main2.jpg'
                },
                {
                    id: 15,
                    imgUrl: '/manning-landscape-images/landscape/L1a.jpg'
                },
                {
                    id: 16,
                    imgUrl: '/manning-landscape-images/landscape/L1b.jpg'
                },
                {
                    id: 17,
                    imgUrl: '/manning-landscape-images/landscape/L2.jpg'
                },
                {
                    id: 18,
                    imgUrl: '/manning-landscape-images/landscape/L4b.jpg'
                },
                {
                    id: 19,
                    imgUrl: '/manning-landscape-images/landscape/L4c.jpg'
                },
                {
                    id: 20,
                    imgUrl: '/manning-landscape-images/landscape/L6.jpg'
                }
            ]
        },
        {
            title: "patios and pathways",
            altImg: 'patios and pathways',
            beforeImage: '/manning-landscape-images/patio-pathway/before.jpg',
            afterImage: '/manning-landscape-images/patio-pathway/main.png',
            aboutText: 'beautiful landscaped patios and pathways transform your yard to something you love.',
            buttonText: 'view Patios',
            id: 5,
            linkUrl: '',
            imageGallory: [
                {
                    id: 11,
                    imgUrl: '/manning-landscape-images/patio-pathway/before.jpg',
                    alt: 'brick house landscape'
                },
                {
                    id: 12,
                    imgUrl: '/manning-landscape-images/patio-pathway/main.png'
                },
                {
                    id: 13,
                    imgUrl: '/manning-landscape-images/patio-pathway/p2.jpg'
                },
                {
                    id: 14,
                    imgUrl: '/manning-landscape-images/patio-pathway/p3.jpg'
                },
                {
                    id: 15,
                    imgUrl: '/manning-landscape-images/patio-pathway/p4.jpg'
                },
                {
                    id: 16,
                    imgUrl: '/manning-landscape-images/patio-pathway/p5.jpg'
                },
                {
                    id: 17,
                    imgUrl: '/manning-landscape-images/patio-pathway/p6a.jpg'
                },
                {
                    id: 18,
                    imgUrl: '/manning-landscape-images/patio-pathway/p6b.jpg'
                },
                {
                    id: 19,
                    imgUrl: '/manning-landscape-images/patio-pathway/p7a.jpg'
                },
                {
                    id: 20,
                    imgUrl: '/manning-landscape-images/patio-pathway/p7b.jpg'
                },
                {
                    id: 21,
                    imgUrl: '/manning-landscape-images/patio-pathway/p8c.jpg'
                },
                {
                    id: 22,
                    imgUrl: '/manning-landscape-images/patio-pathway/p8d.jpg'
                }
            ]
        },
        {
            title: "walls",
            altImg: 'concrete block wall',
            beforeImage: '/manning-landscape-images/wall/before.jpg',
            afterImage: '/manning-landscape-images/wall/main.jpg',
            aboutText: 'Add usable space to your yard of level that slop yard so kids can play.',
            buttonText: 'VIEW WALLS',
            id: 6,
            linkUrl: '',
            imageGallory: [
                {
                    id: 11,
                    imgUrl: '/manning-landscape-images/wall/before.jpg',
                    alt: 'brick house landscape'
                },
                {
                    id: 12,
                    imgUrl: '/manning-landscape-images/wall/main.jpg'
                },
                {
                    id: 13,
                    imgUrl: '/manning-landscape-images/wall/1a.jpg'
                },
                {
                    id: 14,
                    imgUrl: '/manning-landscape-images/wall/1b.jpg'
                },
                {
                    id: 15,
                    imgUrl: '/manning-landscape-images/wall/2a.jpg'
                },
                {
                    id: 16,
                    imgUrl: '/manning-landscape-images/wall/2b.png'
                }
            ]
        },
        {
            title: "water features",
            altImg: 'water feature',
            beforeImage: '/manning-landscape-images/water-features/before.jpg',
            afterImage: '/manning-landscape-images/water-features/main.jpg',
            aboutText: 'Add some traquility to your life enjoy a pleasent water feature to your ',
            buttonText: 'view Water Features',
            id: 7,
            linkUrl: '',
            imageGallory: [
                {
                    id: 11,
                    imgUrl: '/manning-landscape-images/water-features/before.jpg',
                    alt: 'brick house landscape'
                },
                {
                    id: 12,
                    imgUrl: '/manning-landscape-images/water-features/main.jpg'
                },
                {
                    id: 13,
                    imgUrl: '/manning-landscape-images/water-features/6.jpg'
                },
                {
                    id: 14,
                    imgUrl: '/manning-landscape-images/water-features/w2.jpg'
                },
                {
                    id: 15,
                    imgUrl: '/manning-landscape-images/water-features/w3.jpg'
                },
                {
                    id: 16,
                    imgUrl: '/manning-landscape-images/water-features/w4.jpg'
                }
            ]
        }
    ]);
    return (
        <ProjectContext.Provider value={[project, setProject]}>
            {props.children}
        </ProjectContext.Provider>
    );
}
