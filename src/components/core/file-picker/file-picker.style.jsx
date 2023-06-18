import styled from "styled-components";

const Wrapper = styled.div`
  .inner {
    position: relative;
    input {
      padding-right: 40px;
      width: calc(100% - 56px);
    }

    i {
      position: absolute;
      right: 9px;
      top: 15px;
      font-size: 20px;
      cursor: pointer;
    }
  }
`;

export default Wrapper;
