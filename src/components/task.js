import React, { useState } from "react";

import PopupContainer from "./popup";
import Properties from "./properties";

import {
  AppContainer,
  People,
  MainAddButton,
  LeftBox,
} from "../styles/taskStyles";

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
