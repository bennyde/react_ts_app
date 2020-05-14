import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom"

import HomeComponent from "./Home/HomeComponent";
import ArticleComponent from "./Article/ArticleComponent";
import CategoryComponent from "./Category/CategoryComponent";
import SearchComponent from "./Search/SearchComponent";
import ToolBar from "./ToolBar/ToolBar";
import HeaderComponent from "./Header/HeaderComponent";
import FooterComponent from "./Footer/FooterComponent";
import LoginComponent from "./Login/LoginComponent";

const App = () => {

    const [theme, setTheme] = React.useState('theme-santafe')

    const toggleTheme = (color: string) => {
        color === 'tussock' ? setTheme('theme-tussock') : setTheme('theme-santafe')
    }

    return (
        <Router>
            <div id="main" className={theme}>
                <HeaderComponent />
                <div className="container">
                    <div className="section">
                        <ToolBar toggleTheme={toggleTheme} />
                    </div>
                    <Switch>
                        <Route exact path="/" component={HomeComponent}></Route>
                        <Route path="/article/:id" component={ArticleComponent}></Route>
                        <Route path="/category/:category" component={CategoryComponent}></Route>
                        <Route path="/search" component={SearchComponent}></Route>
                        <Route path="/login" component={LoginComponent}></Route>
                    </Switch>
                </div>
                <FooterComponent />
            </div>
        </Router>
    )
}

export default App
