import React from "react";
import "./processSelect.scss";
const ProcessSelect = ({ setProcessing, processingSelectRef }) => {
  const onChange = (e) => {
    setProcessing(e.target.value);
  };

  return (
    <select
      onChange={onChange}
      className="processingSelect_container"
      ref={processingSelectRef}
    >
      <option value="">가공방식</option>
      <option value="밀링">밀링</option>
      <option value="선반">선반</option>
    </select>
  );
};

export default ProcessSelect;
