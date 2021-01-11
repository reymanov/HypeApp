import React, { useState, useRef } from "react";

import useOutsideClick from "../scripts/outsiteClick";
import {
  PopupContainer,
  PopupForm,
  Input,
  CancelButton,
  ConfirmButton,
} from "../styles/popupStyles";

export default function Popup(props) {
  const [value, setValue] = useState("");
  const ref = useRef(null);

  function handleSubmit(event) {
    if (localStorage["addEthnicity"]) {
      props.addNewEthnicity(event, value);
      localStorage.removeItem("addEthnicity");
    } else {
      props.addNewProperty(event, value);
    }
    setValue("");
  }

  function handleOnChange(event) {
    setValue(event.target.value);
  }

  useOutsideClick(ref, () => {
    props.handleClosePopup();
  });

  return (
    <PopupContainer>
      <PopupForm onSubmit={(value) => handleSubmit(value)} ref={ref}>
        <Input
          onChange={handleOnChange}
          value={value}
          maxLength="26"
          minLength="3"
          required
          placeholder="Add new property"
        />
        <div>
          <CancelButton onClick={() => props.handleClosePopup()}>
            Cancel
          </CancelButton>
          <ConfirmButton type="submit">Add</ConfirmButton>
        </div>
      </PopupForm>
    </PopupContainer>
  );
}
