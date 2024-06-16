import React from "react";
import { Container } from "react-bootstrap";
import { useThemeContext } from "../context/themeContext";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Description from "../components/homepage/description";
import Introduction from "../components/homepage/introduction";
import DescrBar from "../components/homepage/descrBar";
import ImageIntro from "../components/homepage/imageIntro";

const HomePage = () => {

    const { pageTheme } = useThemeContext()

    return (<Container fluid className={`homepage ${pageTheme}`}>
        <NavBar />

        <ImageIntro />

        <section className={pageTheme === 'lightmode' ?
            'selfIntro-lightmode-section' : 'selfIntro-darkmode-section'}>

            <DescrBar />

            <div style={{ whiteSpace: 'pre-line' }}>

                <Introduction />

                <Description />

            </div>

        </section>



        <Footer />

    </Container >
    )
}
export default HomePage;