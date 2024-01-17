import Img from '../images/image.png'

export default function Message(){
    return(
        <div className="message owner">
            <div className="messageInfo">
                <img src={Img} alt="" />
                <span>just now</span>
            </div>
            <div className="messageContent">
            <p>hello</p>
            <img src={Img} alt="" />
            </div>
        </div>
    );
}