import React, { useRef, useState } from "react";
import "./request.scss";
import ChatButton from "../Chatbutton/chatButton";
import RequestButton from "../Requestbutton/requestButton.jsx";
import RequestHeader from "../Requestheader/requestHeader";
import MaterialSelect from "../MaterialSelect/MaterialSelect";
import ProcessSelect from "../ProcessSelect/processSelect";
import FilterReset from "../FilterReset/FilterReset";
const Request = ({ data }) => {
  const [material, setMaterial] = useState("");
  const [processing, setProcessing] = useState("");
  const materialSelectRef = useRef();
  const processingSelectRef = useRef();
  return (
    <div style={{ display: "table", marginLeft: "auto", marginRight: "auto" }}>
      <div>
        <RequestHeader />
      </div>
      <div className="request_Select">
        <ProcessSelect
          setProcessing={setProcessing}
          processingSelectRef={processingSelectRef}
        />
        <MaterialSelect
          setMaterial={setMaterial}
          materialSelectRef={materialSelectRef}
        />
        <FilterReset
          setMaterial={setMaterial}
          setProcessing={setProcessing}
          processingSelectRef={processingSelectRef}
          materialSelectRef={materialSelectRef}
        />
      </div>
      <div className="request">
        {data?.map((items) => {
          return (
            <>
              {processing === items.method[0] ||
              processing === items.method[1] ? (
                material === items.material[0] ||
                material === items.material[1] ? (
                  <div className="request_Container">
                    <header className="request_Header">
                      <div className="request_headerDetail">
                        <div>
                          <div className="request_Title">{items.title}</div>
                          <div className="request_client">{items.client}</div>
                        </div>

                        {items.status === "상담중" && (
                          <div>
                            <div className="request_status">{items.status}</div>
                          </div>
                        )}
                      </div>
                      <div className="request_due">{items.due}</div>
                    </header>
                    <div>
                      <div className="request_drawing">
                        <div className="request_drawingTitle">도면개수</div>
                        <div className="request_drawingCount">
                          {items.count}개
                        </div>
                      </div>
                      <div className="request_amount">
                        <div className="request_amountTitle">총 수량</div>
                        <div className="request_amountCount">
                          {items.amount}개
                        </div>
                      </div>
                      <div className="request_processing">
                        <div className="request_processingTitle">가공방식</div>
                        <div className="request_processingMethod">
                          {items.method.length > 1 ? (
                            <>
                              {items.method[0]}
                              {", "}
                              {items.method[1]}
                            </>
                          ) : (
                            <>{items.method}</>
                          )}
                        </div>
                      </div>
                      <div className="request_material">
                        <div className="request_materialTitle">재료</div>
                        <div className="request_materialList">
                          {items.material.length > 1 ? (
                            <>
                              {items.material[0]}
                              {", "}
                              {items.material[1]}
                            </>
                          ) : (
                            <>{items.material}</>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="request_button">
                      <RequestButton>요청 내역 보기</RequestButton>
                      <ChatButton>채팅하기</ChatButton>
                    </div>
                  </div>
                ) : (
                  material === "" && (
                    <div className="request_Container">
                      <header className="request_Header">
                        <div className="request_headerDetail">
                          <div>
                            <div className="request_Title">{items.title}</div>
                            <div className="request_client">{items.client}</div>
                          </div>
                          {items.status === "상담중" && (
                            <div>
                              <div className="request_status">
                                {items.status}
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="request_due">{items.due}</div>
                      </header>
                      <div>
                        <div className="request_drawing">
                          <div className="request_drawingTitle">도면개수</div>
                          <div className="request_drawingCount">
                            {items.count}개
                          </div>
                        </div>
                        <div className="request_amount">
                          <div className="request_amountTitle">총 수량</div>
                          <div className="request_amountCount">
                            {items.amount}개
                          </div>
                        </div>
                        <div className="request_processing">
                          <div className="request_processingTitle">
                            가공방식
                          </div>
                          <div className="request_processingMethod">
                            {items.method.length > 1 ? (
                              <>
                                {items.method[0]}
                                {", "}
                                {items.method[1]}
                              </>
                            ) : (
                              <>{items.method}</>
                            )}
                          </div>
                        </div>
                        <div className="request_material">
                          <div className="request_materialTitle">재료</div>
                          <div className="request_materialList">
                            {items.material.length > 1 ? (
                              <>
                                {items.material[0]}
                                {", "}
                                {items.material[1]}
                              </>
                            ) : (
                              <>{items.material}</>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="request_button">
                        <RequestButton>요청 내역 보기</RequestButton>
                        <ChatButton>채팅하기</ChatButton>
                      </div>
                    </div>
                  )
                )
              ) : (
                processing === "" && (
                  <div className="request_Container">
                    <header className="request_Header">
                      <div className="request_headerDetail">
                        <div>
                          <div className="request_Title">{items.title}</div>
                          <div className="request_client">{items.client}</div>
                        </div>
                        {items.status === "상담중" && (
                          <div>
                            <div className="request_status">{items.status}</div>
                          </div>
                        )}
                      </div>
                      <div className="request_due">{items.due}</div>
                    </header>
                    <div>
                      <div className="request_drawing">
                        <div className="request_drawingTitle">도면개수</div>
                        <div className="request_drawingCount">
                          {items.count}개
                        </div>
                      </div>
                      <div className="request_amount">
                        <div className="request_amountTitle">총 수량</div>
                        <div className="request_amountCount">
                          {items.amount}개
                        </div>
                      </div>
                      <div className="request_processing">
                        <div className="request_processingTitle">가공방식</div>
                        <div className="request_processingMethod">
                          {items.method.length > 1 ? (
                            <>
                              {items.method[0]}
                              {", "}
                              {items.method[1]}
                            </>
                          ) : (
                            <>{items.method}</>
                          )}
                        </div>
                      </div>
                      <div className="request_material">
                        <div className="request_materialTitle">재료</div>
                        <div className="request_materialList">
                          {items.material.length > 1 ? (
                            <>
                              {items.material[0]}
                              {", "}
                              {items.material[1]}
                            </>
                          ) : (
                            <>{items.material}</>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="request_button">
                      <RequestButton>요청 내역 보기</RequestButton>
                      <ChatButton>채팅하기</ChatButton>
                    </div>
                  </div>
                )
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Request;
