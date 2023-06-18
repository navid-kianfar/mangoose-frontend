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

      .connections {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        button {
          padding: 20px;
          background: var(--app-third-bg-color);
          border: none;
          color: var(--app-fg-color);
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
        }
      }

      .label {
        font-weight: 700;
        margin-bottom: 10px;
      }

      .db-wrapper {
        max-height: calc(100vh - 400px);
        overflow-y: auto;
      }

      .sep {
        height: 1px;
        display: flex;
        background: var(--app-border-color);
        margin: 10px 0;
      }

      .actions {
        display: flex;
        flex-direction: column;

        button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 7px 10px;
          background: none;
          border: none;
          color: var(--app-fg-color);
          margin-bottom: 10px;
          cursor: pointer;
          border-radius: 5px;

          i {
            font-size: 17px;
          }
          span {
            font-size: 12px;
          }

          &.selected,
          &:hover {
            background: var(--app-third-bg-color);
          }
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
