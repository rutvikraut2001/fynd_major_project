import React from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import BackToTop from './back-to-top';
import {
    DivMainHome,
    DivMainHomeCarousel,
    ImgCarousel,
    DivBodyHome,
    PHomeTaglineGL1,
    PHomeTaglineGL2,
    PHomeTagDescription,
    PHomeTaglineGL2Letters,
} from "./home.style";
import corousel1 from "../../Utils/Images/Corousel-1.jpg";
import corousel2 from "../../Utils/Images/Corousel-2.jpg";
import corousel3 from "../../Utils/Images/Corousel-3.jpg";

const Home = () => {
    const headingGL = ["E", "M", "S", " ", "P", "r", "o", "v", "i", "d", "e", "r"];
    const carousal = [
        {
            'src': corousel1,
            'class': "d-block w-100",
            'alt': "Image not Available"
        },
        {
            'src': corousel2,
            'class': "d-block w-100",
            'alt': "Image not Available"
        },
        {
            'src': corousel3,
            'class': "d-block w-100",
            'alt': "Image not Available"
        }
    ]

    const carousButton = [
        {
            'type': "button",
            'data-bs-target': "#carouselExampleCaptions",
            'data-bs-slide-to': "0",
            'class': "active",
            'aria-current': "true",
            'aria-label': "Slide 1"
        },
        {
            'type': "button",
            'data-bs-target': "#carouselExampleCaptions",
            'data-bs-slide-to': "1",
            'aria-label': "Slide 2"
        },
        {
            'type': "button",
            'data-bs-target': "#carouselExampleCaptions",
            'data-bs-slide-to': "2",
            'aria-label': "Slide 3"
        }
    ]
    return (
        <>
            <Navbar />
            <DivMainHome>
                <DivMainHomeCarousel>
                    <div
                        id="carouselExampleCaptions"
                        class="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div class="carousel-indicators">
                            {carousButton.map((cbtn) => (
                                <button {...cbtn}></button>
                            ))}
                        </div>

                        <div class="carousel-inner">
                            {carousal.map((car, index) => (
                                <div
                                    class={index === 0 ? "carousel-item active" : "carousel-item"}
                                    data-bs-interval="5000">
                                    <ImgCarousel {...car} />
                                </div>
                            ))}
                        </div>
                    </div>
                </DivMainHomeCarousel>
                <DivBodyHome>
                    <PHomeTaglineGL1>

                        We are &nbsp;
                    </PHomeTaglineGL1>
                    <PHomeTaglineGL2>

                        {headingGL.map((letter) => (
                            <PHomeTaglineGL2Letters>
                                {letter}
                            </PHomeTaglineGL2Letters>
                        ))}

                    </PHomeTaglineGL2>
                    <PHomeTagDescription>
                        Welcome to Employee Management System, where efficiency meets simplicity in the 
                        realm of workforce administration. At Employee Management System, we understand 
                        the pivotal role that streamlined operations play in the success of any organization.
                         With a commitment to revolutionizing the way businesses manage their human resources,
                          we proudly present a comprehensive suite of functionalities designed to enhance your 
                          company's operational prowess.Our cutting-edge platform is tailored to meet the diverse 
                          needs of modern enterprises, providing a seamless and integrated solution for six key 
                          aspects of employee management. 
                    </PHomeTagDescription>
                </DivBodyHome>
            </DivMainHome>
            <Footer />
            <BackToTop />
        </>
    )
}

export default Home