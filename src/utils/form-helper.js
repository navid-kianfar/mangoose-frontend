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
const dropdownConfig = {
  ...defaultConfig,
  params: {
    model: "",
    items: [],
    textField: "",
    valueField: "",
  },
};
const fileConfig = {
  ...defaultConfig,
  params: {
    model: null,
    placeholder: "",
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
const createDropdownElement = (config = dropdownConfig) => {
  const params = {
    ...dropdownConfig,
    ...config,
    element: "dropdown",
  };

  params.params.textField = params.params.textField || "text";
  params.params.valueField = params.params.valueField || "value";

  return params;
};
const createFileElement = (config = fileConfig) => {
  return {
    ...fileConfig,
    ...config,
    element: "file",
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
  createDropdownElement,
  createFileElement,
};
