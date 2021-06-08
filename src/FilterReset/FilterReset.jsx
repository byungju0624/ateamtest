import React from "react";
import "./FilterReset.scss";
const FilterReset = ({
  setMaterial,
  setProcessing,
  materialSelectRef,
  processingSelectRef,
}) => {
  const onClick = () => {
    setMaterial("");
    setProcessing("");
    materialSelectRef.current.options.selectedIndex = "0";
    processingSelectRef.current.options.selectedIndex = "0";
  };
  return (
    <div className="filterReset_container" onClick={onClick}>
      <img
        className="filterReset_icon"
        src={require("../image/refresh_24px.png").default}
        alt="reset"
      />
      <div className="filterReset_text">필터링 리셋</div>
    </div>
  );
};

export default FilterReset;
