import React, { Component } from "react";
import "./style.css";

const SVG_PATHS = {
  error: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z",
  success: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z",
  warning: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.31 7.526c-.099-.807.528-1.526 1.348-1.526.771 0 1.377.676 1.28 1.451l-.757 6.053c-.035.283-.276.496-.561.496s-.526-.213-.562-.496l-.748-5.978zm1.31 10.724c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z",
  info: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z",
  critical: "M12 2l10 18h-20l10-18zm0 3.465l-7.533 13.535h15.066l-7.533-13.535zm-.75 5.785h1.5v5h-1.5v-5zm0 7h1.5v1.5h-1.5v-1.5z",
  confirm: "M21.216 8h-2.216v-1.75l1-3.095v-3.155h-5.246c-2.158 6.369-4.252 9.992-6.754 10v-1h-8v13h8v-1h2l2.507 2h8.461l3.032-2.926v-10.261l-2.784-1.813zm.784 11.225l-1.839 1.775h-6.954l-2.507-2h-2.7v-7c3.781 0 6.727-5.674 8.189-10h1.811v.791l-1 3.095v4.114h3.623l1.377.897v8.328z",
  notice: "m2 4v16.002c0 .385.22.735.567.902.346.166.758.119 1.058-.121l4.725-3.781h12.65c.552 0 1-.448 1-1v-12.002c0-.552-.448-1-1-1h-18c-.552 0-1 .448-1 1zm18.5 11.502h-12.677l-4.323 3.46v-14.462h17zm-8.502-6.5c.414 0 .75.336.75.75v3.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-3.5c0-.414.336-.75.75-.75zm.002-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z",
};

const DEFAULT_COLORS = {
  error: "#de1327",
  success: "#00c12c",
  warning: "#ff9900",
  info: "#00b0ff",
  critical: "#a71d31",
  confirm: "#2a8a2e",
  notice: "#51bfd0"
};

export default class ReactJsAlert extends Component {
  constructor(props) {
    super(props);
    this.state = { status: false };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status && this.props.status) {
      this.setState({ status: true });

      setTimeout(() => {
        this.setState({ status: false });
        this.props.Close(false);
      }, this.props.autoCloseIn || 3000);
    }
  }

  closeModal = () => {
    this.setState({ status: false });
    this.props.Close(false);
  };

  render() {
    const { type = "info", color, title, isQuotes, quote, button } = this.props;
    const bgColor = color || DEFAULT_COLORS[type];
    const svgPath = SVG_PATHS[type];

    return (
      <div
        className={`__myAlert ${this.state.status ? "show" : ""}`}
        aria-labelledby="__myAlertTitle"
        aria-hidden="true"
      >
        <div className="__myAlertModal" role="document">
          <div className="alert-modal-content">
            <div id="alertWrapper" className="alert-wrapper">
              <div className="d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill={bgColor}
                  className="alert-status-icon"
                >
                  <path d={svgPath} />
                </svg>
                {title && <h3 className="__alert-text">{title || "Something went wrong!"}</h3>}
                </div>
                <div className="__alert-dialogue">
                  {isQuotes && (
                    <p className="__alert-quote">
                      {quote || ""}
                    </p>
                  )}

                  <button
                    type="button"
                    className="__close-alert-btn"
                    onClick={this.closeModal}
                    style={{ backgroundColor: bgColor }}
                  >
                    {button || "Okay"}
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
