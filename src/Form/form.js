import "./form.css";
import { useRef, useState } from "react";
import { validateEmail, getIsFormValid, clearForm } from "./utils";
import { DatePicker } from "react-date-picker";


function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
 
  const [Trade, setTrade] = useState("");
  const [idProof, setIdProof] = useState(null);

  const [setDate] = useState("");
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const clear= () => {
    
    clearForm(setFirstName, setLastName, setEmail, setPhoneNumber, setTrade);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName && lastName && email && Trade !== "") {
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
      firstName && validateEmail(email) && phoneNumber && Trade !== "Trade"
    );
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Employee Registration Form</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="First name"
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Last name"
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
              Date <sup>*</sup>
            </label>
            <input type="date" onChange={handleChange} ref={dateInputRef} />
          </div>

          <div className="Field">
            <label>
              Trade <sup>*</sup>
            </label>
            <select value={Trade} onChange={(e) => setTrade(e.target.value)}>
              <option disabled value="">
                Select your trade
              </option>
              <option value="Painter">Painter</option>
              <option value="Plumber">Plumber</option>
              <option value="Fitter">Fitter</option>
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
