import React from 'react';
import Outbreaks from "./Outbreaks"
import OutbreakStore from '../stores/OutbreakStore'
import OutbreakActions from '../actions/OutbreakActions'

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = OutbreakStore.getState();
  }

  componentDidMount() {
   OutbreakStore.listen(this.storeChanged);
   OutbreakStore.fetchOutbreak();
 }
 componentWillUnmount() {
   OutbreakStore.unlisten(this.storeChanged);
 }

 storeChanged = (state) => {   
   this.setState(state);
 };

 addOutbreak = (event) => {
   OutbreakActions.addOutbreak();
 }

  render() {
    const outbreaks = this.state.outbreaks;

    return (
      <div>
        <button onClick={this.addOutbreak}>New Report</button>
        <Outbreaks outbreaks={outbreaks}/>
      </div>
    );
  }
}
