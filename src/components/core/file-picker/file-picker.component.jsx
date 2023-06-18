import Wrapper from "./file-picker.style";
import { useRef, useState } from "react";

const FilePickerComponent = ({
  current,
  disabled,
  placeholder,
  value,
  onChange,
}) => {
  const [text, setText] = useState(current || "");

  const handleOnChange = (e) => {
    if (disabled) return;
    const picked = e.target.files.item(0);
    setText(picked ? picked.name : "");
    onChange(e);
  };
  const triggerFileOpen = () => {
    if (disabled) return;
    fileRef.current?.click();
  };
  const fileRef = useRef();

  return (
    <Wrapper className="file-picker-wrapper">
      <div className="inner">
        <input
          type="text"
          value={text}
          onChange={() => {}}
          readOnly={true}
          disabled={disabled}
          placeholder={placeholder}
        />
        <i onClick={triggerFileOpen} className="ti ti-folder-search"></i>
      </div>

      <input
        type="file"
        ref={fileRef}
        hidden={true}
        multiple={false}
        onChange={handleOnChange}
      />
    </Wrapper>
  );
};
export default FilePickerComponent;
