export default function Navbar(){
    return(
        <div className="navbar">
            <span className="Logo">Rohan Chat</span>
            <div className="user">
                <img src="https://images.pexels.com/photos/1472761/pexels-photo-1472761.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <span>Rishi</span>
                <button id="button-navbar">Logout</button>
            </div>
        </div>
    );
}