import {Input, TextField} from "@mui/material";
import Wrapper from "./form.style";
import {FormattedMessage} from "react-intl";
import {useState} from "react";

const FormComponent = ({ form, disabled, wating, onModelChange }) => {
  const [state, setState] = useState(form.model);

  const updateField = (field, value) => {
      const patch = {
          ...state,
          [field]: value
      };
      setState(patch);
      onModelChange(patch);
  };

  console.log(form);

  return (
      <Wrapper className="form-element-wrapper">
        { form.elements.map(e => (
            <div key={e.key} className="form-element">
              { e.config?.label?.length > 0 && (
                  <span className="label">
                      <FormattedMessage id={e.config.label} />
                  </span>
              ) }

              { e.element === 'text' && (
                  <input type={e.params.password? 'password' : 'text'}
                         value={state[e.config.field]}
                         onChange={(ev) =>
                             updateField(e.config.field, ev.target.value)}
                         disabled={disabled || wating}
                         placeholder={e.params.placeholder} />
              ) }

            </div>
        )) }
      </Wrapper>
  );
};
export default FormComponent;
