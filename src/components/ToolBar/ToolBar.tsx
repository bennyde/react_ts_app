import * as React from "react"
import { Link } from "react-router-dom"

const ToolBar = (props: any) => {

    const search = () => {
        event.preventDefault();
        console.log('SEARCH')
    }

    return (
        <div className="toolbar">
            <form className="form" id="searchForm" onSubmit={search}>
                <input
                    type="text"
                    className="input"
                    id="search"
                    placeholder="Search"
                />
                <input type="submit" value="OK" />
            </form>
            <div className="theme-switch">
                <button id="button_tussock" onClick={() => props.toggleTheme('tussock')}></button>
                <button id="button_santafe" onClick={() => props.toggleTheme('santafe')}></button>
            </div>
            <div className="login-link">
                <Link to={`/login`}>Sign in</Link>
            </div>
        </div>
    )
}

export default ToolBar