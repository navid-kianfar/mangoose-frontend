import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;

  .form-element {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    .label {
      margin-bottom: 10px;
    }

    input {
      background: var(--app-secondary-bg-color);
      border: 1px solid var(--app-border-color);
      outline: none;
      border-radius: 5px;
      padding: 16px;
      color: var(--app-fg-color);

      &:focus {
        border-color: var(--app-primary-color);
      }
    }

    .icon-preview {
      font-size: 40px;
    }
  }
`;

export default Wrapper;
