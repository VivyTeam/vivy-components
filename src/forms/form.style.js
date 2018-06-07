import styled from 'styled-components';

export const FormStyles = styled.div` 
  .form-item {
    padding: 25px;
  }
`;

export const InputStyles = styled.div`
  label {
    color: #898988;
    font-weight: 400;
  }

  input {
    border-width: 0 0 1px;
    border-color: rgba(0,0,0,.12);
    outline: 0;
    resize: none;
    font-size: 1em;
    color: #575756;
    width: 100%;
    padding: 3px 7px;
    margin-top: 10px;
  }

  input::placeholder {
    color: #bfbfbf;
  }

  #required {
    font-size: 0.9em;
    padding-left: 10px;
    color: #e94119;
  }
`;

