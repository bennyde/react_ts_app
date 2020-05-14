import * as React from "react"
import { Link } from "react-router-dom"

const FooterComponent = () => {

    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div id="footer_logo">BD</div>
                <ul id="footer_menu">
                    <li><Link to="/"><span>home</span></Link></li>
                    <li><Link to="/category/relax"><span>relax</span></Link></li>
                    <li><Link to="/category/travel"><span>travel</span></Link></li>
                    <li><Link to="/category/sport"><span>sport</span></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default FooterComponent
