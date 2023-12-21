import styled from "styled-components";
import BgImage from '../../Utils/Images/bg-image.png';

export const ContactUsDiv = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url(${BgImage});
    // background-image: url("https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBncmFkaWVudHxlbnwwfHwwfHx8MA%3D%3D");
    background-repeat: no-repeat;
    background-size: cover;
`;
export const ContactUsMessage = styled.p`
    font-size: 4.5rem;
    font-weight: bolder;
    text-align: center;
    color: #FFF;
    margin-top: none;
    margin-bottom: none;
`;
export const ContactUsForm = styled.p`
    font-size: 2rem;
    // font-weight: bolder;
    text-align: center;
    color: black;
    margin-top: none;
`;
export const ContactIcon = styled.p`
font-size: 3rem;
text-align: center;
`;