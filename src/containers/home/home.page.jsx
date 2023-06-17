import React from "react";
import { FormattedMessage } from "react-intl";
import Wrapper from "./hotel.style";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Wrapper className="home-page-wrapper full-screen"></Wrapper>;
  }
}

export default HomePage;
