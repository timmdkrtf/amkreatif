import AdiPhoto from "../assets/image/photo/photo-ustad.png"
import HafizPhoto from "../assets/image/photo/Photo-hafiz.png"

export default function AboutUs(){
    return(
        <div className="about-us">
            <div className="row">
                <div className="content-left">
                    <div className="cover-image">
                        <img src={AdiPhoto} alt="" />
                    </div>
                    <div className="title">
                        <h4>Irianto Setiadi</h4>
                        <h5>Dewan Komisaris</h5>
                    </div>
                </div>
                <div className="content-center">
                    <div className="title">
                        <h2>
                            Dewan Komisaris
                            <br/>
                            <span>&</span>
                            <br/>
                            Direksi Utama
                        </h2>
                    </div>
                </div>
                <div className="content-right">
                    <div className="cover-image">
                        <img src={HafizPhoto} alt="" />
                    </div>
                    <div className="title">
                        <h4>Muhammad Hafiz Mauludi</h4>
                        <h5>Direksi Utama</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}