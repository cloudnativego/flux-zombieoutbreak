import React from 'react';
import OutbreakActions from '../actions/OutbreakActions';


export default class OutbreakReport extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }

  // Master function for rendering, chooses render mode(s).
  render() {
    if (this.state.editing) {
      return this.renderEdit();
    }

    return this.renderOutbreakReport();
  }

  // Renders the control in edit mode.
  renderEdit = () => {
    return (
        <div>
          <div className="date">{this.props.outbreak.date}</div>
          <div className="origin">{this.props.outbreak.origin}</div>
          <div><br/></div>
          <div className="severity">{this.props.outbreak.severity}</div>
          <div className="description">
            <input type="text"
                ref={
                    (e) => e ? e.selectionStart = this.props.outbreak.description.length : null
                  }
                  autoFocus={true}
                  defaultValue={this.props.outbreak.description}
                  onBlur={this.finishEdit}
                  onKeyPress={this.checkEnter} />
          </div>
        </div>
      );
  }

  // Switch the control into edit mode. Does NOT invoke a store-changing action.
  edit = () => {
    console.log('Switching to edit mode.');
    this.setState({
      editing: true
    });
  };

  checkEnter = (e) => {
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  };

  // Blurred out of edit control. Commit changes to store via Action.
  finishEdit = (e) => {
    console.log('Exited edit')
    const value = e.target.value;
    //this.props.onEdit(value);
    this.setState({
      editing: false
    });
    if(!value.trim()) {
     return;
   }
   this.props.outbreak.description = value;
   OutbreakActions.changeOutbreak(this.props.outbreak);
  }

  // Invoke delete action to modify store.
  onDelete = (e) => {
    console.log('Clicked delete');
    OutbreakActions.deleteOutbreak(this.props.outbreak);
  }

  // Renders read-only version of report.
  renderOutbreakReport = () => {
    const onDelete = this.props.onDelete;

    return (
      <div>
        <div className="date">{this.props.outbreak.date}</div>
        <div className="origin">{this.props.outbreak.origin}</div>
        <div><br/></div>
        <div className="severity">{this.props.outbreak.severity}</div>
        <div className="description" onClick={this.edit}>{this.props.outbreak.description}</div>
        {this.renderDelete()}
      </div>
    );
  }

  renderDelete = () => {
    return <button
      className="delete-outbreak" onClick={this.onDelete}>X</button>;
  }
}
