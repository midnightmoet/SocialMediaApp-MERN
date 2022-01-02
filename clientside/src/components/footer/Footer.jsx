import "./footer.css";


export default function Footer() {
    return (
        <div className="footer">
        <div className="footerItem">
        <span className="footerTitle">FOLLOW ME!</span>
        <div className="footerSocial">
            <ul className="footerList">
                <li><a href="https://www.facebook.com/lisa.miner2010"><i className="footerIcon"></i></a> Facebook</li>
             
                <li><a href="https://www.instagram.com/lisa.miner/"><i className="footerIcon"></i></a>Instagram</li>
                
                <li><a href="https://www.twitter.com/midnightmoet"><i className="footerIcon"></i></a>Twitter</li>

                <li><a href="https://www.github.com/midnightmoet"><i className="footerIcon"></i></a>GitHub</li>

                <li><a href="https://www.linkedin.com/in/lisachampagne/"><i className="footerIcon"></i></a>LinkedIn</li>
            </ul>
        </div>
        </div>
        </div>
    )
}


