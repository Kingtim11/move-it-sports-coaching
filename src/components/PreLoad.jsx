import React from "react";
import Logo from "../assets/images/moveit3.jpeg";
import Banner from "../assets/images/bannerMin.jpg"
import Josh from "../assets/images/josh.JPEG";
import Abi from "../assets/images/coachAbi.jpg";
import Neil from "../assets/images/coachNeilMin.jpg";
import Hollie from "../assets/images/coachHollieMin.jpg";
import Robert from "../assets/images/coachRobertMin.jpg";

const images = [Logo, Banner, Josh, Abi, Neil, Hollie, Robert];

export default function PreLoad() {
    return (
        <>
            {images.map((image, index) => (
                <img key={index} src={image} alt="" style={{ display: 'none' }} />
            ))}
        </>
    );
}