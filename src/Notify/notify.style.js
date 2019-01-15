import styled from "styled-components";

const Styles = styled.div`
  .message-box {
    color: #353f41;
    background-color: #fff;
    box-shadow: rgba(151, 160, 191, 0.3) 0px 4px 6px 0px;
    border-radius: 4px;
  }

  .text-content {
    display: flex;
    align-items: center;

    p {
      text-align: left;
      margin-left: 20px;
    }
  }

  .progress-bar {
    background: linear-gradient(
      to right,
      rgb(10, 185, 177) 0px,
      rgb(0, 184, 228)
    );
  }

  .error-progress-bar {
    background: #e94119;
  }
`;

export default Styles;
