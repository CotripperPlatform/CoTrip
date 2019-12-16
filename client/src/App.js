import React, { Component } from "react";
import { Route } from "react-router-dom";
import SplashPage from "./pages/SplashPage/SplashPage";
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faHeart, faTable, faComment, faCaretRight, faCaretLeft, faSearch, faAngleLeft, faAngleRight, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fab, far, fas, faCheckSquare, faHeart, faTable, faComment, faCaretRight, faCaretLeft, faSearch, faAngleLeft, faAngleRight, faCommentDots  )

class App extends Component {
  
  splash = () => {
    return (
      <div className='splash'>
        <h1>Welcome to CoTrip</h1>
        <SplashPage />
      </div>
    );
  };

  login = () => {
    return (
      <LoginPage />
    );
  }

  render() {
    return (
      <div className='App'>
        {/* <nav>
          <Link to="/">Splash</Link>
          <Link to="/login">Login</Link>
        </nav> */}
        <main>
          <Route path="/" exact render={this.splash}></Route>
          <Route path="/login" exact render={this.login}></Route>
        </main>
      </div>
    );
  }
}

export default App;
