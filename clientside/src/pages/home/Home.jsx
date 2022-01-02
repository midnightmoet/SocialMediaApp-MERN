import Feed from '../../components/feed/Feed';
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Footer from "../../components/footer/Footer";
import "./home.css";


export default function Home() {
    return( 
        <div>
            <Topbar/>
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <Rightbar/>
            </div>
            <Footer />
        </div>
    )
}