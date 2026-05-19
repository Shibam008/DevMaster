import { useState } from "react";
import "./App.css";

function App() {
  const [gender, setGender] = useState("");
  // console.log(gender);

  const countries = ["India", "China", "Russia", "Iran"];
  const [selectedCountry, setSelectedCountry] = useState("");
  // console.log(selectedCountry);

  // Q. when user select any payment mode we have to show the info
  const payments = [
    { id: "UPI", info: "Pay using gpay" },
    { id: "Card", info: "Offer applied os ICICI credit card" },
    { id: "COD", info: "Cash on delivery selected" },
  ];

  const [paymentMode, setPaymentMode] = useState({});
  console.log(paymentMode);

  return (
    <>
      <div>
        <label htmlFor="male">
          <input
            type="radio"
            name="genderRadio"
            id="male"
            value={"male"}
            checked={gender === "male"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
          Male
        </label>
        <label htmlFor="female">
          <input
            type="radio"
            name="genderRadio"
            id="female"
            value={"female"}
            checked={gender === "female"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
          Female
        </label>
        <label htmlFor="others">
          <input
            type="radio"
            name="genderRadio"
            id="others"
            value={"others"}
            checked={gender === "others"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
          Others
        </label>
      </div>

      {/* Production ready practice */}
      <div>
        {countries.map((country, idx) => (
          <label htmlFor={country} key={idx}>
            <input
              type="radio"
              name="countryRadio"
              id={country}
              value={country}
              checked={selectedCountry === country}
              onChange={(e) => {
                setSelectedCountry(e.target.value);
              }}
            />
            {country}
          </label>
        ))}
      </div>

      {/* mini project */}
      <div>
        {payments.map((payment, idx) => (
          <div key={idx}>
            <label htmlFor={payment.id}>
              <input
                type="radio"
                name="paymentOptions"
                id={payment.id}
                value={payment.id}
                checked={paymentMode.id === payment.id}
                onChange={() => setPaymentMode(payment)}
              />
              {payment.id}
              <br />
            </label>
          </div>
        ))}

        <div>
          <h2>Selected Payment Mode : {paymentMode.id}</h2>
          <p>Details : {paymentMode.info}</p>
        </div>
      </div>
    </>
  );
}

export default App;
