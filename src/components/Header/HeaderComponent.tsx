import * as React from "react"
import { Link } from "react-router-dom"
import { slide as Menu } from 'react-burger-menu'

const HeaderComponent = () => {

    const [menuOpen, setMenuOpen] = React.useState(false)

    const handleStateChange = (state: any) => {
        setMenuOpen(state.isOpen)
    }

    const closeMenu = () => {
        console.log('CLOSE MENU')
        setMenuOpen(false)
    }

    return (
        <div id="header">
            <div id="logo">BD</div>
            <ul id="desktop_menu">
                <li><Link to="/"><span>home</span></Link></li>
                <li><Link to="/category/relax"><span>relax</span></Link></li>
                <li><Link to="/category/travel"><span>travel</span></Link></li>
                <li><Link to="/category/sport"><span>sport</span></Link></li>
            </ul>
            <div id="mobile_menu">
                <Menu isOpen={menuOpen} onStateChange={(state) => handleStateChange(state)} disableAutoFocus>
                    <Link onClick={() => closeMenu()} to="/"><span>home</span></Link>
                    <Link onClick={() => closeMenu()} to="/category/relax"><span>relax</span></Link>
                    <Link onClick={() => closeMenu()} to="/category/travel"><span>travel</span></Link>
                    <Link onClick={() => closeMenu()} to="/category/sport"><span>sport</span></Link>
                </Menu>
            </div>
        </div>
    )
}

export default HeaderComponent
