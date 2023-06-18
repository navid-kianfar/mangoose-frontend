import React from "react";
import { FormattedMessage } from "react-intl";
import Wrapper from "./home.style";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper className="home-page-wrapper full-screen">
        <div className="sidebar">
          <div className="box">
            <div className="connections">
              <button>
                <span>New Connection</span>
                <i className="ti ti-caret-down"></i>
              </button>
            </div>
            <div className="databases">
              <div className="label">
                <FormattedMessage id="app.databases" />
              </div>
              <div className="inner"></div>
              <div className="actions">
                <button>
                  <span>
                    <FormattedMessage id="app.create.database" />
                  </span>
                  <i className="ti ti-plus"></i>
                </button>
                <button>
                  <span>
                    <FormattedMessage id="app.refresh.databases" />
                  </span>
                  <i className="ti ti-refresh"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="actions">
              <button>
                <span>
                  <FormattedMessage id="app.dump.and.restore" />
                </span>
                <i className="ti ti-download"></i>
              </button>
              <button>
                <span>
                  <FormattedMessage id="app.compare.and.sync" />
                </span>
                <i className="ti ti-360"></i>
              </button>
              <button>
                <span>
                  <FormattedMessage id="app.node.shell" />
                </span>
                <i className="ti ti-terminal"></i>
              </button>
              <button>
                <span>
                  <FormattedMessage id="app.data.relations" />
                </span>
                <i className="ti ti-terminal"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content"></div>
      </Wrapper>
    );
  }
}

export default HomePage;
