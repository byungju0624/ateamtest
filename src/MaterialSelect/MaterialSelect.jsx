import React, { useRef, useState } from "react";
import "./materialSelect.scss";
const MaterialSelect = ({ setMaterial, materialSelectRef }) => {
  const onChange = (e) => {
    setMaterial(e.target.value);
  };

  return (
    <select
      onChange={onChange}
      className="materialSelect_container"
      ref={materialSelectRef}
    >
      <option value="">재료</option>
      <option value="알루미늄">알루미늄</option>
      <option value="탄소강">탄소강</option>
      <option value="구리">구리</option>
      <option value="합금강">합금강</option>
      <option value="강철">강철</option>
    </select>
  );
};

export default MaterialSelect;
