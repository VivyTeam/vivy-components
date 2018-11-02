import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import checkbox from "../../public/images/checkbox-empty.svg";

const SelectStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  label {
    padding: 0;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.38;
    letter-spacing: normal;
    color: #353f41;
  }

  .checkbox {
    width: 20px;
    height: 20px;
    display: block;
    background: url(${checkbox});
  }

  input[type="checkbox"] {
    position: relative;
    z-index: -9999;

    &:checked + span {
      background: url("link_to_another_image");
    }
  }

  input[type="radio"] {
    &:focus {
      outline: none;
      box-shadow: none;
    }
    &:checked {
      border: 5px solid #0dff92;
    }
  }

  .optional {
    font-size: 14px;
    font-weight: normal;
    line-height: 1.29;
    letter-spacing: normal;
    color: #7b7b7b;
    padding-left: 3px;
    vertical-align: super;
  }
`;

export default function Select({ id, children, value, name, type, optional }) {
  return (
    <SelectStyles>
      <label id={id} htmlFor={id}>
        <input id={id} name={name} type={type} value={value} />
        <span className="checkbox" />
        {children}
        {optional ? <span className="optional">*optional</span> : null}
      </label>
    </SelectStyles>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  optional: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string
};

Select.defaultProps = {
  optional: true,
  value: "",
  name: "",
  type: "checkbox"
};
