import { Checkbox, FormControlLabel, MenuItem, Select } from "@mui/material";
import Wrapper from "./form.style";
import { FormattedMessage, useIntl } from "react-intl";
import { useState } from "react";
import ColorPickerComponent from "../color-picker/color-picker.component";
import FilePickerComponent from "../file-picker/file-picker.component";

const FormComponent = ({ form, disabled, waiting, onModelChange }) => {
  const intl = useIntl();
  const [state, setState] = useState(form.model);
  const updateField = (field, value) => {
    const patch = {
      ...state,
      [field]: value,
    };
    setState(patch);
    onModelChange(patch);
  };

  return (
    <Wrapper className="form-element-wrapper">
      <div className="container">
        {form.def.map((section) => (
          <div
            className={"form-column col col-" + (section.size || 12)}
            key={section.key}
          >
            {section.elements.map((e) => (
              <div key={e.key} className="form-element">
                {e.config?.label?.length > 0 && (
                  <span className="label">
                    <FormattedMessage id={e.config.label} />
                  </span>
                )}

                {e.element === "text" && (
                  <input
                    type={e.params.password ? "password" : "text"}
                    autoComplete="off"
                    value={state[e.config.field]}
                    onChange={(ev) =>
                      updateField(e.config.field, ev.target.value)
                    }
                    disabled={disabled || waiting}
                    placeholder={
                      e.params.placeholder?.length > 0
                        ? intl.formatMessage({ id: e.params.placeholder })
                        : ""
                    }
                  />
                )}

                {e.element === "color-picker" && (
                  <ColorPickerComponent
                    value={state[e.config.field]}
                    onChange={(ev) =>
                      updateField(e.config.field, ev.target.value)
                    }
                    disabled={disabled || waiting}
                  />
                )}

                {e.element === "file" && (
                  <FilePickerComponent
                    placeholder={
                      e.params.placeholder?.length > 0
                        ? intl.formatMessage({ id: e.params.placeholder })
                        : ""
                    }
                    value={state[e.config.field]}
                    onChange={(ev) =>
                      updateField(e.config.field, ev.target.value)
                    }
                    disabled={disabled || waiting}
                  />
                )}

                {e.element === "dropdown" && (
                  <Select
                    value={state[e.config.field]}
                    onChange={(ev) =>
                      updateField(e.config.field, ev.target.value)
                    }
                    disabled={disabled || waiting}
                  >
                    {e.params.items.map((item, index) => (
                      <MenuItem key={index} value={item[e.params.valueField]}>
                        <FormattedMessage id={item[e.params.textField]} />
                      </MenuItem>
                    ))}
                  </Select>
                )}

                {e.element === "icon-preview" && (
                  <i className={"icon-preview " + e.params.model}></i>
                )}

                {e.element === "checkbox" && (
                  <FormControlLabel
                    label={intl.formatMessage({ id: e.params.label })}
                    control={
                      <Checkbox
                        value={state[e.config.field]}
                        onChange={(ev) =>
                          updateField(e.config.field, ev.target.value)
                        }
                        disabled={disabled || waiting}
                      />
                    }
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
export default FormComponent;
