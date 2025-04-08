import Navbar from "../components/Navbar"
import Cover from "../components/Cover"
import AboutPT from "../components/AboutPT"
import AboutUs from "../components/AboutUs"
import Brand from "../components/Brand"
import Footer from "../components/Footer"

// import AMKLogo from "../assets/image/logo/AMK (P).png"

export default function Landing(){
    return(
        <>
            <Navbar />
            <Cover />
            <AboutPT />
            <AboutUs />
            <Brand />
            <Footer />

            {/* <div className="landing">
                <div className="content">
                    <img src={AMKLogo} alt="" />
                    <h3>Under Maintenance</h3>
                </div>
            </div> */}
        </>
    );
}