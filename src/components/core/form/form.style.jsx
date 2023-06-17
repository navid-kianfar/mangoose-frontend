import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .form-element {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    
    .label {
      margin-bottom: 5px;
    }
    
    input {
      background: var(--app-secondary-bg-color);
      border: 1px solid var(--app-primary-color);
      outline: none;
      border-radius: 5px;
      padding: 5px 10px;
      color: var(--app-fg-color);
    }
  }
`

export default Wrapper;