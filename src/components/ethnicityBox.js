import React from "react";

import {
  Box,
  RemoveButton,
  AddButton,
  AddButtonDisabled,
  TitleBorder,
  EthProps,
  EthBorder,
  EthLine,
  LeftParagraph,
} from "../styles/ethnicityBoxStyles";

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
      <LeftParagraph>And</LeftParagraph>
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
      {element.ethnicities.length < 2 ? (
        <AddButton onClick={openEthnicitiesPopup}>+</AddButton>
      ) : (
        <AddButtonDisabled>+</AddButtonDisabled>
      )}
    </Box>
  );
}
