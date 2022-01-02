import Feed from '../../components/feed/Feed';
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
// import Footer from "../../components/footer/Footer";
import './profile.css';

export default function Profile() {
    const PF = process.env.REACT_APP_PF;

    return (
        <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img className="profileCoverImg" src={`${PF}post/3.jpeg` }alt="" />
                        <img className="profileUserImg" src={`${PF}person/9.jpeg`} alt=""  />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Lisa Miner</h4>
                        <span className="profileInfoDesc">Author to my own book, writer of my own story</span>
                    </div>

                </div>
                <div className="profileRightBottom">
                    <Feed/>
                    <Rightbar profile />
                </div>
            </div>
        </div>
        </>
    );
}