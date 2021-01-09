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
  border-radius: 8px;
  background: #fff;
  text-align: center;
  letter-spacing: 0.5px;
  box-shadow: 0px 0px 25px -14px #7165f0;
`;

const People = styled.div`
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
`;

const MainAddButton = styled.button`
  width: 70px;
  height: 70px;
  margin-top: 350px;
  border: 10px #fff solid;
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    rgba(43, 231, 163, 1) 0%,
    rgba(48, 232, 222, 1) 100%
  );
  font-size: 2.4em;
  font-weight: bold;
  color: #fff;
  box-shadow: 0px 0px 15px -5px #5fedbc;

  &:hover {
    cursor: pointer;
  }
`;

export default function Task() {
  const [properties, setProperties] = useState([]);
  const [togglePopup, setTogglePopup] = useState(false);

  function handleOpenPopup() {
    setTogglePopup(true);
  }

  function handleClosePopup() {
    setTogglePopup(false);
    localStorage.removeItem("addEthnicity");
  }

  function addNewProperty(event, value) {
    event.preventDefault();
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
        <div>
          <People id="one">People</People>
          <MainAddButton id="two" onClick={handleOpenPopup}>
            +
          </MainAddButton>
        </div>
        <Properties
          properties={properties}
          handleDeleteProperty={handleDeleteProperty}
          handleOpenPopup={handleOpenPopup}
        />
      </AppContainer>
    </>
  );
}
