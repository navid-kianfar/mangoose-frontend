import { v4 as Guid } from "uuid";

const defaultConfig = {
  config: {
    field: "",
    label: "",
  },
  validation: {
    required: {
      value: false,
      message: "",
    },
  },
};
const textConfig = {
  ...defaultConfig,
  params: {
    model: "",
    placeholder: "",
    password: false,
    textarea: false,
  },
};
const checkBoxConfig = {
  ...defaultConfig,
  params: {
    model: false,
    label: "",
  },
};

const createTextElement = (config = textConfig) => {
  return {
    ...textConfig,
    ...config,
    element: "text",
  };
};

const createCheckBoxElement = (config = checkBoxConfig) => {
  return {
    ...checkBoxConfig,
    ...config,
    element: "checkbox",
  };
};

const createFormElement = (elements = []) => {
  const form = {
    id: Guid(),
    elements,
    model: {},
  };

  elements.forEach((e) => {
    e.key = Guid();
    form.model[e.config.field] = e.params?.model;
  });

  return form;
};

export { createTextElement, createCheckBoxElement, createFormElement };
