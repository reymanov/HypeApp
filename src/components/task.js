import React, { useState } from "react";
import styled from "styled-components";

import PopupContainer from "./popup";
import Properties from "./properties";

const AppContainer = styled.div`
  width: 600px;
  min-height: 720px;
  padding: 4em 2.5em;
  margin: 2em auto;
  display: flex;
  align-items: flex-start;
  border-radius: 8px;
  background: #fff;
  text-align: center;
  letter-spacing: 0.5px;
  box-shadow: 0px 0px 25px -14px #7165f0;
  zoom: 1.1;
`;

const People = styled.div`
  position: relative;
  width: 220px;
  background: linear-gradient(
    180deg,
    rgba(169, 116, 247, 1) 0%,
    rgba(119, 116, 247, 1) 100%
  );
  border-radius: 6px;
  padding: 0.8em 1em;
  color: #fff;
  font-size: 1.2em;
  font-weight: 900;
  box-shadow: 0px 0px 25px -14px #7165f0;
  z-index: 1;
`;

const MainAddButton = styled.button`
  position: relative;
  width: 70px;
  height: 70px;
  border: 10px #fff solid;
  border-radius: 50%;
  background: ${({ toggleButton }) =>
    !toggleButton
      ? `linear-gradient(
    180deg,
    rgba(43, 231, 163, 1) 0%,
    rgba(48, 232, 222, 1) 100%
  )`
      : "lightgrey"};
  font-size: 2.4em;
  font-weight: bold;
  color: #fff;
  box-shadow: 0px 0px 15px -5px #5fedbc;
  box-shadow: ${({ toggleButton }) =>
    !toggleButton
      ? "0px 0px 15px -5px #5fedbc"
      : "0px 0px 15px -5px lightgrey"};
  z-index: 1;

  &:hover {
    cursor: ${({ toggleButton }) =>
      !toggleButton ? "pointer" : "not-allowed"};
  }
`;

const LeftBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 105%;

  &:after {
    content: "";
    position: absolute;
    z-index: 0;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 1px;
    height: 100%;
    background-color: lightgrey;
  }
`;

export default function Task() {
  const [properties, setProperties] = useState([]);
  const [togglePopup, setTogglePopup] = useState(false);
  const [toggleButton, setToggleButton] = useState(true);

  function handleOpenPopup() {
    setTogglePopup(true);
  }

  function handleClosePopup() {
    setTogglePopup(false);
    localStorage.removeItem("addEthnicity");
  }

  function addNewProperty(event, value) {
    event.preventDefault();

    if (
      value === "Ethnicity" &&
      properties.filter((el) => el.title === value).length >= 1
    ) {
      alert("Ethnicity element already exists");
      handleClosePopup();
    } else {
      setProperties((properties) => [
        ...properties,
        {
          id: Date.now(),
          title: value,
          isExpandable: value === "Ethnicity" ? true : false,
          ethnicities: value === "Ethnicity" ? [] : null,
        },
      ]);
      handleClosePopup();
    }
  }

  function handleDeleteProperty(id) {
    if (id[0] === "e") {
      setProperties(
        properties.map((element) => {
          if (element.title === "Ethnicity") {
            return {
              id: element.id,
              title: element.title,
              isExpandable: true,
              ethnicities: element.ethnicities.filter((prop) => {
                return prop.id !== id;
              }),
            };
          } else {
            return element;
          }
        })
      );
    } else {
      setProperties(
        properties.filter((element) => {
          return element.id !== id;
        })
      );
    }
  }

  function addNewEthnicity(event, value) {
    event.preventDefault();

    properties.forEach((element) => {
      if (element.isExpandable) {
        element.ethnicities.push({
          id: `e_${Date.now()}`,
          title: value,
        });
      }
    });
    handleClosePopup();
  }

  function calcHeight(element) {
    if (element.current.offsetHeight >= 700) {
      setToggleButton(true);
    } else {
      setToggleButton(false);
    }
  }

  return (
    <>
      {togglePopup === true && (
        <PopupContainer
          handleClosePopup={handleClosePopup}
          addNewProperty={addNewProperty}
          addNewEthnicity={addNewEthnicity}
        />
      )}
      <AppContainer>
        <LeftBox>
          <People>People</People>
          <MainAddButton
            toggleButton={toggleButton}
            disabled={toggleButton}
            onClick={handleOpenPopup}
          >
            +
          </MainAddButton>
        </LeftBox>
        <Properties
          properties={properties}
          handleDeleteProperty={handleDeleteProperty}
          handleOpenPopup={handleOpenPopup}
          calcHeight={calcHeight}
        />
      </AppContainer>
    </>
  );
}
