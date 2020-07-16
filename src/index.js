import React, { Component } from "react";
import "./style.scss";

export default class ReactJsAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.status,
    };
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.status != this.props.status) {
      if (this.props.status == true) {
        this.setState({
          status: true,
        });
        setTimeout(() => {
          this.setState({
            status: false,
          });
          this.props.Close(false);
        }, 3000);
      }
    }
  }
  async closeModal() {
    this.props.Close(false);
    this.setState({
      status: false,
    });
  }
  render() {
    const props = this.props;
    let bgColor = "#00b0ff";
    if (props.type === "error") {
      bgColor = props.color ? props.color : "#de1327";
    } else if (props.type === "success") {
      bgColor = props.color ? props.color : "#00c12c";
    } else if (props.type === "warning") {
      bgColor = props.color ? props.color : "#ff9900";
    } else if (props.type === "info") {
      bgColor = props.color ? props.color : "#00b0ff";
    }
    return (
      <div
        className={this.state.status ? "myAlert show" : "myAlert"}
        aria-labelledby="myAlertTitle"
        aria-hidden="true"
      >
        <div className="myAlertModal" role="document">
          <div className="alert-modal-content">
            <div id="alertWrapper" className="alert-wrapper">
              <button
                className="alert-close-icon"
                onClick={() => this.closeModal()}
              >
                ×
              </button>
              <div className="alert-dialogue">
                <h3 className="alert-text">
                  {props.title
                    ? props.title
                    : "Something went wrong. Please try again!"}
                </h3>
                <p className="alert-quote mb-0">
                  {props.quote
                    ? props.quote
                    : "I hated being careful, too - or wanted to, at least."}
                </p>

                <button
                  type="button"
                  className="close-alert-btn"
                  onClick={() => this.closeModal()}
                  style={{ backgroundColor: bgColor }}
                >
                  Okay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
