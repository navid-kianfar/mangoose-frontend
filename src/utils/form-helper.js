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
const colorPickerConfig = {
  ...defaultConfig,
  params: {
    model: "",
  },
};
const iconPreviewConfig = {
  ...defaultConfig,
  config: {
    label: "",
  },
  params: {
    model: "",
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
const createColorPickerElement = (config = colorPickerConfig) => {
  return {
    ...colorPickerConfig,
    ...config,
    element: "color-picker",
  };
};
const createIconPreviewElement = (config = iconPreviewConfig) => {
  return {
    ...iconPreviewConfig,
    ...config,
    element: "icon-preview",
  };
};
const createFormElement = (formDef = []) => {
  const form = {
    id: Guid(),
    model: {},
    def: formDef,
  };

  formDef.forEach((frm) => {
    frm.key = Guid();
    frm.elements.forEach((e) => {
      e.key = Guid();
      form.model[e.config.field] = e.params?.model;
    });
  });

  return form;
};

export {
  createTextElement,
  createCheckBoxElement,
  createFormElement,
  createColorPickerElement,
  createIconPreviewElement,
};
