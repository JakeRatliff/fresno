import React, { Component } from 'react';
import Aux from './hoc/Aux';
import FlashCards from './Containers/FlashCards';

class App extends Component {
  render() {
    return (
      <Aux>
         <FlashCards/>
      </Aux>

    );
  }
}

export default App;
