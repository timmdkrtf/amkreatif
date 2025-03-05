import MdkrtfLogo from "../assets/image/logo/mdkrtf.png"

export default function Brand(){
    return(
        <div className="brand" id="brand">
            <div className="container">
                <div className="row">
                    <div className="title">
                        <h2>Brand Kami</h2>
                    </div>
                    <div className="content">
                        <a href="https://mdkrtf.co.id" target="_blank">
                            <img src={MdkrtfLogo} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}