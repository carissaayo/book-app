import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { currencyHandler } from "../../context/jobsContext";

import "./Converter.css";
const Converter = () => {
  const [flag, setFlag] = useState(
    "https://tera-media.s3-eu-west-1.amazonaws.com/currency-flag/webp/nigeria.webp"
  );
  const [currency, setCurrency] = useState({});

  let jobsState = useSelector((state) => state.jobs);
  let dispatch = useDispatch();
  const { currencies, singleCurrency } = jobsState;
  console.log(singleCurrency);
useEffect(()=>{
dispatch(currencyHandler( currency ));
},[currency])
  return (
    <section className="converter">
      <div>
        <img
          src={singleCurrency[0]?.flag_url ? singleCurrency[0].flag_url : flag}
          alt="currency_flag"
        />
      </div>
      <select
        onChange={(e) => {
          setCurrency(
            currencies.filter((item) => item.name === e.target.value)
          );
          
        }}
      >
        {currencies &&
          currencies.map((currency, i) => {
                       return (
              <option value={currency.name} key={i}>
                {currency.name}
              </option>
            );
          })}
      </select>
    </section>
  );
};

export default Converter;
