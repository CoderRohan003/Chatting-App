import Cam from '../images/camera1.png';
import Add from '../images/person.png';
import More from '../images/more.png';
import Messages from './Messages';
import Input from './Input';



export default function Chat(){
    return(
        <div className="chat">
            <div className="chatInfo">
                <span>Rishi</span>
                <div className="chatIcon">
                    <img src={Cam} alt="" />
                    <img src={Add} alt="" />
                    <img src={More} alt="" />
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    );
}