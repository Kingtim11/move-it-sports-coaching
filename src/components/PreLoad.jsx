import React from "react";
import Logo from "../assets/images/moveit3.jpeg";
import Banner from "../assets/images/bannerMin.jpg"
import Josh from "../assets/images/josh.JPEG";
import Abi from "../assets/images/coachAbi.jpg";
import Neil from "../assets/images/coachNeilMin.jpg";
import Hollie from "../assets/images/coachHollieMin.jpg";
import Robert from "../assets/images/coachRobertMin.jpg";

export default function PreLoad() {
    const cardImage = [Logo, Banner, Josh, Abi, Neil, Hollie, Robert]

    return (
        cardImage.map((cardImage, index) => (
            <React.Fragment key={index}>
                <img src={cardImage} alt="" style={{display: 'none'}} />
            </React.Fragment>
        ))
    );
}