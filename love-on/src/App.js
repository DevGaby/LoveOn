import React, { Component } from 'react';
import { Header, Footer, Description, Coaching, ListStories} from './components';

class App extends Component {
  render() {
    return (
      <div className="App d-flex flex-column">
       <Header />
       <div className="d-flex flex-column flex-fill">
        <Description />
        <Coaching />
        <ListStories />
       </div>
       <Footer />
     </div>
    )
  }
}

export default App;
