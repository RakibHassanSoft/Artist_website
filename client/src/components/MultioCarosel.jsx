import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importing CSS directly

const MultioCarosel = () => {
    return (
        <Carousel autoPlay interval={2000} infiniteLoop>
            <div>
                <img src="https://th.bing.com/th/id/OIP.ANyEvkDVDi55VTZ1332eTQHaEK?rs=1&pid=ImgDetMain" alt="Image 1" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="https://th.bing.com/th/id/OIP.ANyEvkDVDi55VTZ1332eTQHaEK?rs=1&pid=ImgDetMain" alt="Image 2" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="https://th.bing.com/th/id/OIP.ANyEvkDVDi55VTZ1332eTQHaEK?rs=1&pid=ImgDetMain" alt="Image 3" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};

export default MultioCarosel;
