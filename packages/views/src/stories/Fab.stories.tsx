import React from "react";
import { action } from "@storybook/addon-actions";
import { Fab } from "../components/FAB/Fab";
import { Container } from "../components/Container/Container";

const onButtonPressed = action("Clicked on button");

export const CreateActionFab = () => (
  <Container>
    <Fab onPress={onButtonPressed} />
  </Container>
);

export default {
  title: "FAB",
};
