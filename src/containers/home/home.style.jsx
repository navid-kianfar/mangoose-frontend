import styled from "styled-components";
const Wrapper = styled.div`
  flex-direction: row;
  .sidebar {
    max-width: 300px;
    min-width: 300px;
    display: flex;
    height: 100vh;
    background: var(--app-secondary-bg-color);
    border-inline-end: 2px solid var(--app-border-color);
    flex-direction: column;
    justify-content: space-between;

    .box {
      display: flex;
      flex-direction: column;
      padding: 10px;

      .actions {
        display: flex;
        flex-direction: column;

        button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 5px;
          background: none;
          border: none;
          color: var(--app-fg-color);
          margin-bottom: 10px;
          cursor: pointer;
        }
      }
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`;

export default Wrapper;
