import React from "react";
import { FormattedMessage } from "react-intl";
import Wrapper from "./home.style";
import {
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Paper,
} from "@mui/material";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      achoreEl: null,
      connectionsPlate: false,
    };
  }

  toggleConnectionPlate(state, e) {
    const patch = { ...this.state };
    if (e && !patch.achoreEl) {
      patch.achoreEl = e.target;
    }
    patch.connectionsPlate = state;
    this.setState(patch);
  }

  render() {
    return (
      <Wrapper className="home-page-wrapper full-screen">
        <div className="sidebar">
          <div className="box">
            <div className="connections">
              <button onClick={(e) => this.toggleConnectionPlate(true, e)}>
                <span>New Connection</span>
                <i className="ti ti-caret-down"></i>
              </button>

              <Menu
                anchorEl={this.state.achoreEl}
                open={this.state.connectionsPlate}
                onClose={() => this.toggleConnectionPlate(false)}
              >
                <MenuList>
                  <MenuItem>
                    <ListItemIcon>
                      <i className="ti ti-affiliate"></i>
                    </ListItemIcon>
                    <ListItemText>
                      <FormattedMessage id="app.new.project" />
                    </ListItemText>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <i className="ti ti-plug-connected"></i>
                    </ListItemIcon>
                    <ListItemText>localhost</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <i className="ti ti-check"></i>
                    </ListItemIcon>
                    <ListItemText>
                      <FormattedMessage id="app.new.connection" />
                    </ListItemText>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <i className="ti ti-settings"></i>
                    </ListItemIcon>
                    <ListItemText>
                      <FormattedMessage id="app.manage.connections" />
                    </ListItemText>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
            <div className="databases">
              <div className="label">
                <FormattedMessage id="app.databases" />
              </div>
              <div className="actions db-wrapper">
                <button className="selected">
                  <span>Database 1</span>
                  <i className="ti ti-database"></i>
                </button>
                <button>
                  <span>Database 2</span>
                  <i className="ti ti-database"></i>
                </button>
                <button>
                  <span>Database 3</span>
                  <i className="ti ti-database"></i>
                </button>
              </div>
              <div className="sep"></div>
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
                <i className="ti ti-git-compare"></i>
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
                <i className="ti ti-affiliate"></i>
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
