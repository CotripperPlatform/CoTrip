import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faHeart, faTable, faComment, faCaretRight, faCaretLeft, faSearch, faAngleLeft, faAngleRight, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fab, far, fas, faCheckSquare, faHeart, faTable, faComment, faCaretRight, faCaretLeft, faSearch, faAngleLeft, faAngleRight, faCommentDots  )

class App extends Component {
  home = () => {
    return (
      <div className="App">
        <h1>Welcome to CoTrip</h1>
      </div>
    );
  };
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <main>
          <Route path="/" exact render={this.home}></Route>
        </main>
      </div>
    );
  }
}

export default App;
