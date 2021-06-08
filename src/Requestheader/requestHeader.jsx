import React from "react";
import "./requestHeader.scss";
const RequestHeader = (props) => {
  return (
    <div className="requestHeader_container">
      <div className="requestHeader_first">들어온 요청</div>
      <div className="requestHeader_second">
        파트너님에게 딱 맞는 요청서를 찾아보세요.
      </div>
    </div>
  );
};

export default RequestHeader;
