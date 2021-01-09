import React from "react";
import styled from "styled-components";

const Box = styled.div`
  position: relative;
  width: 100%;
  min-height: 10px;
  padding: 1rem 1.6rem;
  margin-bottom: 1.4em;
  border-radius: 8px;
  text-align: left;
  font-size: 1.2em;
  font-weight: 900;
  box-shadow: 0px 0px 25px -14px #7165f0;

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 11px;
    background: linear-gradient(
      180deg,
      rgba(169, 116, 247, 1) 0%,
      rgba(119, 116, 247, 1) 100%
    );
    border-radius: 8px 0 0 8px;
  }
`;

const RemoveButton = styled.button`
  position: ${(props) => (props.ethnicity ? "absolute" : "relative")};
  right: ${(props) => (props.ethnicity ? ".9em" : null)};
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: none;
  font-size: 1.5em;
  font-weight: bold;
  margin-top: ${(props) => (props.mainEthnicity ? ".2em" : null)};
  margin-right: 0.4em;
  color: #fff;
  background: linear-gradient(180deg, #f76b90 0%, #f6668a 100%);
  box-shadow: 0px 0px 10px -2px #f6668a;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.2s ease;

  &:before {
    content: "";
    position: absolute;
    width: 10px;
    height: 3px;
    background: #fff;
    border-radius: 1px;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px 0px #f6668a;
  }
`;

const AddButton = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 50%;
  margin: 10px 0 0 10px;
  background: linear-gradient(
    180deg,
    rgba(43, 231, 163, 1) 0%,
    rgba(48, 232, 222, 1) 100%
  );
  font-size: 1.2em;
  font-weight: bold;
  color: #fff;
  box-shadow: 0px 0px 15px -2px #5fedbc;

  &:hover {
    cursor: pointer;
  }
`;

const TitleBorder = styled.div`
  position: absolute;
  width: 65%;
  padding: 0.3em 0.8em;
  border: 1px lightgrey solid;
  border-radius: 5px;
`;

const EthProps = styled.div`
  margin-top: 3em;
`;

const EthBorder = styled.div`
  width: 100%;
  padding: 0.3em 0.8em;
  border: 1px lightgrey solid;
  border-radius: 5px;
`;

const EthLine = styled.div`
  margin: 0.4em 0 0 3.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function EthnicityBox({
  element,
  handleDeleteProperty,
  handleOpenPopup,
}) {
  function openEthnicitiesPopup() {
    handleOpenPopup();
    localStorage["addEthnicity"] = JSON.stringify(true);
  }

  return (
    <Box>
      <TitleBorder>{element.title}</TitleBorder>
      <RemoveButton
        mainEthnicity
        onClick={() => handleDeleteProperty(element.id)}
      />
      <EthProps>
        {element.ethnicities.map((element) => {
          return (
            <EthLine>
              <EthBorder>{element.title}</EthBorder>
              <RemoveButton
                ethnicity
                onClick={() => handleDeleteProperty(element.id)}
              ></RemoveButton>
            </EthLine>
          );
        })}
      </EthProps>
      <AddButton onClick={openEthnicitiesPopup}>+</AddButton>
    </Box>
  );
}
