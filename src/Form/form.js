import "./form.css";
import { useRef, useState } from "react";
import { validateEmail, getIsFormValid, clearForm } from "./utils";
import { DatePicker } from "react-date-picker";


function App() {
  const [CompanyName, setCompanyName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [TimePeriod, setTimePeriod] = useState("");
 
  const [Trade, setTrade] = useState("");
  const [Wages, setWages] = useState("");
  const [idProof, setIdProof] = useState(null);

  const [setDate] = useState("");
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const clear= () => {
    
    clearForm(setCompanyName, setLastName, setEmail, setPhoneNumber, setTrade, setTimePeriod);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (CompanyName && lastName && email && Trade !== "") {
      alert("Please upload a valid ID proof.");
    } else {
      alert("Please fill out all details.");
    }
  };

  const handleIDProofUpload = (e) => {
    const file = e.target.files[0];
    setIdProof(file);
  };

  const getIsFormValid = () => {
    return (
      CompanyName && validateEmail(email) && phoneNumber && Trade !== "Trade"
    );
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Company Registration Form</h2>
          <div className="Field">
            <label>
              Company name <sup>*</sup>
            </label>
            <input
              value={CompanyName}
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
              placeholder="Company name"
            />
          </div>
          <div className="Field">
            <label>Owner <sup>*</sup></label>
            <input
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Owner name"
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email address"
            />
          </div>

          <div className="Field">
            <label>
              Phone number <sup>*</sup>
            </label>
            <input
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              placeholder="Phone number"
            />
          </div>


          <div className="Field">
            <label>
              Time Period <sup>*</sup>
            </label>
            <input
              value={TimePeriod}
              onChange={(e) => {
                setTimePeriod(e.target.value);
              }}
              placeholder="Enter time period"
            />
          </div>

          {/* <div className="Field">
            <label>
              Date <sup>*</sup>
            </label>
            <input type="date" onChange={handleChange} ref={dateInputRef} />
          </div> */}

          <div className="Field">
            <label>
              Required Trade <sup>*</sup>
            </label>
            <select value={Trade} onChange={(e) => setTrade(e.target.value)}>
              <option disabled value="">
                Select required trade
              </option>
              <option value="Painter">Painter</option>
              <option value="Plumber">Plumber</option>
              <option value="Fitter">Fitter</option>
            </select>
          </div>

          <div className="Field">
            <label>
              Minimum Wages <sup>*</sup>
            </label>
            <select value={Wages} onChange={(e) => setWages(e.target.value)}>
              <option disabled value="">
                Select Minimum Wages
              </option>
              <option value="Rs.5000-Rs.7000">Rs.5000-Rs.7000</option>
              <option value="Rs.7000-Rs.9000">Rs.7000-Rs.9000</option>
              <option value="Rs.9000-Rs.12000">Rs.9000-Rs.12000</option>
            </select>
          </div>

          <div className="Field">
            <label>
              Upload valid ID proof <sup>*</sup>
            </label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleIDProofUpload}
            />
          </div>

          <button type="submit" disabled={!getIsFormValid()}>
            Proceed to Payment
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
