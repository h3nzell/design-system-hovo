import React from "react";
import Typography from "../../../components/Basic/Typography";

export default {
  title: "Basic/Typography/Heading 4",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "h6", "h5", "h4", "h3", "h2", "h1"],
      },
    },

    weight: {
      control: {
        type: "select",
        options: ["bold", "semibold", "medium", "normal"],
      },
    },
    text: {
      control: "text",
    },
  },
};

export const NormalText = (args) => <Typography {...args} />;
NormalText.args = {
  weight: "normal",
  size: "h4",
  text: "The quick brown fox jumps over the lazy dog.",
};

export const MediumText = (args) => <Typography {...args} />;
MediumText.args = {
  weight: "medium",
  size: "h4",
  text: "The quick brown fox jumps over the lazy dog.",
};

export const SemiBoldText = (args) => <Typography {...args} />;
SemiBoldText.args = {
  weight: "semibold",
  size: "h4",
  text: "The quick brown fox jumps over the lazy dog.",
};

export const BoldText = (args) => <Typography {...args} />;
BoldText.args = {
  weight: "bold",
  size: "h4",
  text: "The quick brown fox jumps over the lazy dog.",
};
