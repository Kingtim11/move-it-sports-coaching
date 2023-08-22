import React from "react";
import Logo from "../assets/images/moveit3.jpeg";
import Banner from "../assets/images/bannerImage.jpg"
import Josh from "../assets/images/josh.JPEG";
import Abi from "../assets/images/coachAbi.jpg";
import Neil from "../assets/images/coachNeil.jpg";
import Hollie from "../assets/images/coachHollie.jpeg";
import Robert from "../assets/images/coachRobert.jpg";

//const imagesToPreload = [{image: Logo}, {image: Banner}, {image: Josh}, {image: Abi}, {image: Neil}, {image: Hollie}, {image: Robert}];

export default function PreLoad() {
    /*useEffect(() => {
        imagesToPreload.forEach(image => {
            const img = new Image();
            img.src = image.image;
        });
    }, []);

    return null; */
    const cardImage = [Logo, Banner, Josh, Abi, Neil, Hollie, Robert]

    /*const cardImage = [
        {image: Logo}, {image: Banner}, {image: Josh}, {image: Abi}, {image: Neil}, {image: Hollie}, {image: Robert}]*/
    return (
        cardImage.map((cardImage, index) => (
            <React.Fragment key={index}>
                <img src={cardImage} alt="" style={{display: 'none'}} />
            </React.Fragment>
        ))
    );
}