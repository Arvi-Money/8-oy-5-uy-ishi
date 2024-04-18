import React, { useEffect, useState, useRef } from "react"; 
import "../index.css"; 

import convert from "../../assets/currency.svg";
import convertFocus from "../../assets/currencyFocus.svg";
import convertHover from "../../assets/currencyHover.svg";
import send from "../../assets/send.svg";
import sendHover from "../../assets/sendHover.svg";
import sendFocus from "../../assets/sendFocus.svg";
import charts from "../../assets/charts.svg";
import chartsHover from "../../assets/chartsHover.svg";
import chartsFocus from "../../assets/chartsFocus.svg";
import alert from "../../assets/alert.svg";
import alertHover from "../../assets/alertHover.svg";
import alertFocus from "../../assets/alertFocus.svg";
import arrow from "../../assets/arrow.svg";
import Data from "../../data/data.json";
import infoCircle from "../../assets/infoCircle.svg";

const Card: React.FC = () => {
  
  const [hovered, setHovered] = useState<string>("");
  const [clicked, setClicked] = useState<string>("");
  const [data, setData] = useState<any[]>([]);
  const [selectedCurrencyFrom, setSelectedCurrencyFrom] = useState<string>('USD - US Dollar');
  const [selectedCurrencyTo, setSelectedCurrencyTo] = useState<string>('UZS - Uzbekistan Som');
  const selectFromRef = useRef<HTMLSelectElement>(null);
  const selectToRef = useRef<HTMLSelectElement>(null);
  const amountRef = useRef<any>(1);
  const [isConverted, setIsConverted] = useState<Boolean>(false)
  const [selectedEl, setSelectedEl] = useState<any[]>([])

  useEffect(() => {
    setData(Data);
  }, []);

  function handleArrow() {
    setSelectedCurrencyFrom(selectedCurrencyTo);
    setSelectedCurrencyTo(selectedCurrencyFrom);
    
  }

  const findSelectedEl = () => {
    const selected = data.filter((currency) => currency.code == selectedCurrencyFrom)
    setSelectedEl(selected);
    console.log(selectedEl);
    
  }
  
  
  
useEffect(() => {
  findSelectedEl();
}, [])

  
  const   handleConvert = () => {
   setIsConverted(true)
  }

  return (
    <div className="card-wrapper shadow mb-5 bg-body-tertiary rounded">
      <ul className="d-flex list-wrapper">
        {/* Convert */}
        <li
          className="convert"
          onMouseEnter={() => setHovered("convert")}
          onMouseLeave={() => setHovered("")}
          onClick={() => setClicked("convert")}
          style={clicked === "convert"
            ? { backgroundColor: "white", color:"#7eb6f3" } : { backgroundColor: "#f0f5fa" }}
        >
          <img
            src={
              hovered === "convert"
                ? convertHover
                : clicked === "convert"
                ? convertFocus
                : convert
            }
            alt="Convert"
          />
          Convert
        </li>

        {/* Send */}
        <li
          onMouseEnter={() => setHovered("send")}
          onMouseLeave={() => setHovered("")}
          onClick={() => setClicked("send")}
          style={clicked === "send"
            ? {backgroundColor:"white", color:"#7eb6f3"} : {backgroundColor:"#f0f5fa"}}
        >
          <img
            src={
              hovered === "send"
                ? sendHover
                : clicked === "send"
                ? sendFocus
                : send
            }
            alt="Send"
          />
          Send
        </li>

        {/* Charts */}
        <li
          onMouseEnter={() => setHovered("charts")}
          onMouseLeave={() => setHovered("")}
          onClick={() => setClicked("charts")}
          style={clicked === "charts"
            ? {backgroundColor:"white", color:"#7eb6f3"} : {backgroundColor:"#f0f5fa"}}
        >
          <img
            src={
              hovered === "charts"
                ? chartsHover
                : clicked === "charts"
                ? chartsFocus
                : charts
            }
            alt="Charts"
          />
          Charts
        </li>

        {/* Alert */}
        <li
          className="alert"
          onMouseEnter={() => setHovered("alert")}
          onMouseLeave={() => setHovered("")}
          onClick={() => setClicked("alert")}
          style={clicked === "alert"
            ? {backgroundColor:"white", color:"#7eb6f3"} : {backgroundColor:"#f0f5fa"}}
        >
          <img
            src={
              hovered === "alert"
                ? alertHover
                : clicked === "alert"
                ? alertFocus
                : alert
            }
            alt="Alert"
          />
          Alert
        </li>
      </ul>
      <div className=" main-wrapper d-flex flex-column">
        <div className="d-flex amount-wrapper">
          <div className="d-flex flex-column inputArea">
            <label htmlFor="amount">Amount</label>
            <input ref={amountRef} id="amount" type="text" />
          </div>
          <div className="d-flex flex-column inputArea">
            <label htmlFor="from">From</label>
            <select
              name=""
              id=""
              ref={selectFromRef}
              onChange={(event) => {
                setSelectedCurrencyFrom(event.target.value);
              }}
              value={selectedCurrencyFrom}
            >
              {data &&
                data.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    <img src={currency.flag} alt="" />
                    <span className="span2">{currency.code}</span> -{" "}
                    <span className="span3">{currency.name}</span>
                  </option>
                ))}
            </select>
          </div>
          <div>
            <div style={{ width: "49.6px", height: "24px" }}></div>
            <div onClick={handleArrow} className="arrow-wrapper">
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="d-flex flex-column inputArea">
            <label htmlFor="to">To</label>
            <select
              name=""
              id=""
              ref={selectToRef}
              onChange={(event) => {
                setSelectedCurrencyTo(event.target.value);
              }}
              value={selectedCurrencyTo}
            >
              {data &&
                data.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    <img src={currency.flag} alt="" />
                    <span className="span2">{currency.code}</span> -{" "}
                    <span className="span3">{currency.name}</span>
                  </option>
                ))}
            </select>
          </div>
        </div>
        {
         isConverted&& (
            <div className="converted">
              <h3>{amountRef.current?.value} {selectedEl} = </h3>
              <h2>3,216.2807 Tanzanian Shillings</h2>
              <p>1 TZS = 0.000310918 GBP</p>
            </div>
          )
        }
        <div className="infoBtn">
          <div className="infoWrapp">
            <img src={infoCircle} alt="" />
            <p style={{color:"#5c667b"}}>
              We use the mid-market rate for our Converter. This is for informational purposes only. You won’t receive this rate when sending money.
              <span style={{color:"#2f93e8"}}>Login to view send rates</span>
            </p>
          </div>
          <button onClick={handleConvert} className="convertBtn">Convert</button>
        </div>
      </div>
    </div>
  );
};

export default Card