import Navbar from "../components/Navbar"
import Cover from "../components/Cover"
import AboutPT from "../components/AboutPT"

export default function Landing(){
    return(
        <div className="Landing">
            <Navbar />
            <Cover />
            <AboutPT />
        </div>
    );
}