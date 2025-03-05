import Navbar from "../components/Navbar"
import Cover from "../components/Cover"
import AboutPT from "../components/AboutPT"
import Brand from "../components/Brand"
import Footer from "../components/Footer"

export default function Landing(){
    return(
        <div className="Landing">
            <Navbar />
            <Cover />
            <AboutPT />
            <Brand />
            <Footer />
        </div>
    );
}