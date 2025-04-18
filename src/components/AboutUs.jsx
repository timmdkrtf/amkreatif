import AdiPhoto from "../assets/image/photo/Frame 14.png"
import HafizPhoto from "../assets/image/photo/Frame 6.png"

export default function AboutUs(){
    return(
        <div className="about-us">
            <div className="title">
                <h2><span className="dewan">Dewan Komisaris</span> dan <span>Direksi</span></h2>
            </div>
            <div className="row">
                <div className="content-left">
                    <div className="cover-image">
                        <img src={AdiPhoto} alt="" />
                    </div>
                    <div className="title">
                        <h4>Iryanto Setiadi</h4>
                        <h5>Komisaris Utama</h5>
                    </div>
                </div>
                <div className="content-right">
                    <div className="cover-image">
                        <img src={HafizPhoto} alt="" />
                    </div>
                    <div className="title">
                        <h4>Muhammad Hafiz Mauludi</h4>
                        <h5>Direktur Utama</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}