import React, { useState, createContext } from 'react';

// <---------- Stone Work -------->
import StoneBf from '../images/manning-landscape-images/stoneWork/1.jpg';
import StoneAf from '../images/manning-landscape-images/stoneWork/2.jpg';
import Stone3 from '../images/manning-landscape-images/stoneWork/3.jpg'
import Stone4 from '../images/manning-landscape-images/stoneWork/4.jpg'
import Stone5 from '../images/manning-landscape-images/stoneWork/5.jpg'
import Stone6 from '../images/manning-landscape-images/stoneWork/6.jpg'
import Stone7 from '../images/manning-landscape-images/stoneWork/7.jpg'
import Stone8 from '../images/manning-landscape-images/stoneWork/8.jpg'
import Stone9 from '../images/manning-landscape-images/stoneWork/9.jpg'
import Stone10 from '../images/manning-landscape-images/stoneWork/10.jpg'
import Stone11 from '../images/manning-landscape-images/stoneWork/11.jpg'


// <---------- CONCRETE HOUSE -------->
import ConcreteBf from '../images/manning-landscape-images/concreteWork/1.jpg';
import ConcreteAf from '../images/manning-landscape-images/concreteWork/2.jpg';
import Concrete3 from '../images/manning-landscape-images/concreteWork/3.jpg';
import Concrete4 from '../images/manning-landscape-images/concreteWork/4.jpg';
import Concrete5 from '../images/manning-landscape-images/concreteWork/5.jpg';
import Concrete6 from '../images/manning-landscape-images/concreteWork/6.jpg';
import Concrete7 from '../images/manning-landscape-images/concreteWork/7.jpg';
import Concrete8 from '../images/manning-landscape-images/concreteWork/8.jpg';

// <---------- WALLS -------->
import WallBf from '../images/manning-landscape-images/walls/1.jpg';
import WallAf from '../images/manning-landscape-images/walls/2.jpg';
import Wall3 from '../images/manning-landscape-images/walls/3.jpg';
import Wall4 from '../images/manning-landscape-images/walls/4.jpg';
import Wall5 from '../images/manning-landscape-images/walls/5.jpg';
import Wall6 from '../images/manning-landscape-images/walls/6.png';
import Wall7 from '../images/manning-landscape-images/walls/7.jpg';

// <---------- LANDSCAPE -------->
import ScapedBf from '../images/manning-landscape-images/landscape/1.jpg';
import ScapedAf from '../images/manning-landscape-images/landscape/2.jpg';
import Scaped3 from '../images/manning-landscape-images/landscape/3.jpg';
import Scaped4 from '../images/manning-landscape-images/landscape/4.jpg';
import Scaped5 from '../images/manning-landscape-images/landscape/5.jpg';

// <---------- BRICK WORK -------->
import BrickBf from '../images/manning-landscape-images/brickWork/1.jpg';
import BrickAf from '../images/manning-landscape-images/brickWork/2.png';
import Brick3 from '../images/manning-landscape-images/brickWork/3.jpg';
import Brick4 from '../images/manning-landscape-images/brickWork/4.jpg';
import Brick5 from '../images/manning-landscape-images/brickWork/5.jpg';
import Brick6 from '../images/manning-landscape-images/brickWork/6.jpg';

// <---------- LARGE ROCK -------->
import RocksBf from '../images/manning-landscape-images/largeRockScape/1.jpg';
import RocksAf from '../images/manning-landscape-images/largeRockScape/2.jpg';
import Rocks3 from '../images/manning-landscape-images/largeRockScape/3.jpg';

// <---------- WATER FEATURES -------->
import WaterFeatureBf from '../images/manning-landscape-images/waterFeatures/1.jpg';
import WaterFeatureAf from '../images/manning-landscape-images/waterFeatures/2.jpg';
import WaterFeature3 from '../images/manning-landscape-images/waterFeatures/3.jpg';
import WaterFeature4 from '../images/manning-landscape-images/waterFeatures/4.jpg';
import WaterFeature5 from '../images/manning-landscape-images/waterFeatures/5.jpg';
import WaterFeature6 from '../images/manning-landscape-images/waterFeatures/6.jpg';







export const ProjectContext = createContext();

export const ProjectProvider = (props) => {

    const [project, setProject] = useState([
        {
            id: 1,
            title: 'Stone Work',
            altImg: 'landScaped hill side of house',
            beforeImage: StoneBf,
            afterImage: StoneAf,
            aboutText: 'From Stone design to complete landscape installation, our skilled artisans transform urban landscapes.',
            buttonText: 'view brick house',
            linkUrl: '',
            imageGallory: [
                {

                    id: 2,
                    imgUrl: StoneAf,
                    alt: 'brick house landscape'
                },
                {
                    id: 3,
                    imgUrl: Stone3
                },
                {
                    id: 4,
                    imgUrl: Stone4
                },
                {
                    id: 5,
                    imgUrl: Stone5
                },
                {
                    id: 6,
                    imgUrl: Stone6
                },
                {
                    id: 7,
                    imgUrl: Stone7
                },
                {
                    id: 8,
                    imgUrl: Stone8
                },
                {
                    id: 9,
                    imgUrl: Stone9
                },
                {
                    id: 10,
                    imgUrl: Stone10
                },
                {
                    id: 11,
                    imgUrl: Stone11
                },


            ]
        },
        {
            title: 'Concrete Work',
            altImg: 'hardScape',
            beforeImage: ConcreteBf,
            afterImage: ConcreteAf,
            aboutText: 'skilled artisans transform urban landscapes.',
            buttonText: 'view hardscape',
            id: 2,
            linkUrl: '',
            imageGallory: [
                {
                    id: 2,
                    imgUrl: ConcreteAf,
                    alt: 'brick house landscape'
                },
                {
                    id: 3,
                    imgUrl: Concrete3
                },
                {
                    id: 4,
                    imgUrl: Concrete4
                },
                {
                    id: 5,
                    imgUrl: Concrete5
                },
                {
                    id: 6,
                    imgUrl: Concrete6
                },
                {
                    id: 7,
                    imgUrl: Concrete7
                },
                {
                    id: 8,
                    imgUrl: Concrete8
                }

            ]
        },
        {
            title: 'Large Rock Scape',
            altImg: 'beatiful yard',
            beforeImage: RocksBf,
            afterImage: RocksAf,
            aboutText: 'skilled artisans transform urban landscapes.',
            buttonText: 'view yard',
            id: 3,
            linkUrl: '',
            imageGallory: [
                {
                    id: 2,
                    imgUrl: RocksAf,
                    alt: 'brick house landscape'
                },
                {
                    id: 3,
                    imgUrl: Rocks3,
                    alt: 'brick house landscape'
                }
            ]
        },
        {
            title: 'Landscape',
            altImg: 'landscaped yard',
            beforeImage: ScapedBf,
            afterImage: ScapedAf,
            aboutText: 'skilled artisans transform yard landscapes.',
            buttonText: 'view Landscape',
            id: 4,
            linkUrl: '',
            imageGallory: [
                {
                    id: 2,
                    imgUrl: ScapedAf,
                    alt: 'brick house landscape'
                },
                {
                    id: 3,
                    imgUrl: Scaped3
                },
                {
                    id: 4,
                    imgUrl: Scaped4
                },
                {
                    id: 5,
                    imgUrl: Scaped5
                },


            ]
        },
        {
            title: "Brick Work",
            altImg: 'patios and pathways',
            beforeImage: BrickBf,
            afterImage: BrickAf,
            aboutText: 'beautiful landscaped patios and pathways transform your yard to something you love.',
            buttonText: 'view Patios',
            id: 5,
            linkUrl: '',
            imageGallory: [
                {
                    id: 2,
                    imgUrl: BrickAf,
                    alt: 'brick house landscape'
                },
                {
                    id: 3,
                    imgUrl: Brick3,
                    alt: 'brick house landscape'
                },
                {
                    id: 4,
                    imgUrl: Brick4,
                    alt: 'brick house landscape'
                }, {
                    id: 5,
                    imgUrl: Brick5,
                    alt: 'brick house landscape'
                }, {
                    id: 6,
                    imgUrl: Brick6,
                    alt: 'brick house landscape'
                },

            ]
        },
        {
            title: "walls",
            altImg: 'concrete block wall',
            beforeImage: WallBf,
            afterImage: WallAf,
            aboutText: 'Add usable space to your yard of level that slop yard so kids can play.',
            buttonText: 'VIEW WALLS',
            id: 6,
            linkUrl: '',
            imageGallory: [
                {
                    id: 2,
                    imgUrl: WallAf,
                    alt: 'brick house landscape'
                },
                {
                    id: 3,
                    imgUrl: Wall3
                },
                {
                    id: 4,
                    imgUrl: Wall4
                },
                {
                    id: 5,
                    imgUrl: Wall5
                },
                {
                    id: 6,
                    imgUrl: Wall6
                },
                {
                    id: 7,
                    imgUrl: Wall7
                }

            ]
        },
        {
            title: "water features",
            altImg: 'water feature',
            beforeImage: WaterFeatureBf,
            afterImage: WaterFeatureAf,
            aboutText: 'Add some traquility to your life enjoy a pleasent water feature to your ',
            buttonText: 'view Water Features',
            id: 7,
            linkUrl: '',
            imageGallory: [
                {
                    id: 2,
                    imgUrl: WaterFeatureAf,
                    alt: 'brick house landscape'
                },
                {
                    id: 3,
                    imgUrl: WaterFeature3,
                    alt: 'brick house landscape'
                },
                {
                    id: 4,
                    imgUrl: WaterFeature4,
                    alt: 'brick house landscape'
                },
                {
                    id: 5,
                    imgUrl: WaterFeature5,
                    alt: 'brick house landscape'
                },
                {
                    id: 6,
                    imgUrl: WaterFeature6,
                    alt: 'brick house landscape'
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
