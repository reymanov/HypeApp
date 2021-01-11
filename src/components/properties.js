import React, { useRef, useEffect } from "react";

import EthnicityBox from "./ethnicityBox";
import {
  Container,
  Box,
  RemoveButton,
  LeftParagraph,
} from "../styles/propertiesStyles";

export default function Properties(props) {
  const ref = useRef(null);

  useEffect(() => {
    props.calcHeight(ref);
  }, [props, ref]);

  return (
    <Container ref={ref}>
      {props.properties.map((element) => {
        return element.isExpandable ? (
          <EthnicityBox
            handleDeleteProperty={(id) => props.handleDeleteProperty(id)}
            handleOpenPopup={() => props.handleOpenPopup()}
            element={element}
          />
        ) : (
          <Box>
            <LeftParagraph>And</LeftParagraph>
            {element.title}
            <RemoveButton
              onClick={() => props.handleDeleteProperty(element.id)}
            />
          </Box>
        );
      })}
    </Container>
  );
}
