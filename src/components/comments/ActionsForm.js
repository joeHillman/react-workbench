import React, { Component, Fragment } from "react";
import { bool, func, string } from "prop-types";

class ActionsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    }
    this.formElementRef = React.createRef();
  }

  componentDidMount(){
    this.formElementRef.current.focus();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    switch(this.props.name) {
      case "replyForm": this.props.handleReplySubmit(this.props.commentKey, this.state.content)
      break;
      case "blockForm": this.props.handleBlockSubmit(this.props.parentKey, this.props.commentKey, this.state.content);
      break;
      case "reportForm": this.props.handleReportSubmit(this.props.parentKey, this.props.commentKey, this.state.content);
      break;
      default: console.log("DEFAULT");

    }
    this.props.handleCancel();
  }

  handleOnChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  renderReportForm = ({ defaultValue, handleCancel, id, isReported, name }) => {
    return (
        <Fragment>
        <label htmlFor={id}>Reason: </label>
        <select id={id} name={name} onChange={this.handleOnChange} ref={!isReported && this.formElementRef} disabled={isReported}>
          {isReported
            ? <option>This comment has already been reported and is under review.</option>
            : <Fragment>
              <option>Violent</option>
              <option>Racist</option>
              <option>Inappropriate</option>
            </Fragment>
          }
        </select>
        <button type="button" onClick={handleCancel} ref={isReported && this.formElementRef}>Cancel</button>
        <button type="submit" onClick={this.handleSubmit} disabled={isReported}>Submit</button>
        </Fragment>
    )
  }

  render() {
    const { defaultValue, handleCancel, id, isBlocked, label, name, role } = this.props;
    return (
      <div>
        <form>
          {name === "reportForm" ?
          this.renderReportForm(this.props) :
          <Fragment>
            <textarea id={id} name={name} onChange={this.handleOnChange} ref={this.formElementRef} defaultValue={defaultValue}></textarea>
            <button type="button" onClick={handleCancel}>Cancel</button>
            <button type="submit" onClick={this.handleSubmit}>Submit</button>
          </Fragment>
          }
        </form>
      </div>
    );
  }
}

ActionsForm.propTypes = {
  defaultValue: func,
  handleCancel: func,
  id: string,
  isBlocked: bool,
  label: string,
  name: string,
  role: string,
}

export default ActionsForm;
