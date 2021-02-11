import { useState } from "react";
import validator from "validator";
import "./App.css";

function App() {
  const [first, setFirst] = useState("");
  const [firstError, setFirstError] = useState("");
  const [second, setSecond] = useState("");
  const [secondError, setSecondError] = useState("");
  const [third, setThird] = useState("");
  const [thirdError, setThirdError] = useState("");
  const [fourth, setFourth] = useState("");
  const [fourthError, setFourthError] = useState("");
  const [fifth, setFifth] = useState("");
  const [fifthError, setFifthError] = useState("");
  const [sixth, setSixth] = useState("");
  const [sixthError, setSixthError] = useState("");
  function resetForm() {
    setFirst("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (first === "") {
      setFirstError("cannot be blank");
    } else {
      setFirstError("");
    }
    e.preventDefault();
    if (validator.isEmail(second)) {
      setSecondError("");
    } else {
      setSecondError("Please enter a valid email");
    }
    e.preventDefault();
    if (third === "") {
      setThirdError("cannot be blank");
    } else {
      setThirdError("");
    }
    e.preventDefault();
    if (fourth === "") {
      setFourthError("cannot be blank");
    } else {
      setFourthError("");
    }
    e.preventDefault();
    if (fifth === "") {
      setFifthError("cannot be blank");
    } else {
      setFifthError("");
    }
    e.preventDefault();
    if (validator.isURL(sixth)) {
      setSixthError("");
    } else {
      setSixthError("Please enter a valid URL");
    }
  }
  return (
    <div>
      <form className="theForm" onSubmit={handleSubmit}>
        <label
          htmlFor="name"
          className={firstError ? "text-label text-label-red" : "text-label"}
        >
          <h4>Name {firstError}</h4>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Michael"
          onChange={(e) => setFirst(e.target.value)}
        />

        <label
          htmlFor="email"
          className={secondError ? "text-label text-label-red" : "text-label"}
        >
          <h4>Email {secondError}</h4>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="email@test.com"
          onChange={(e) => setSecond(e.target.value)}
        />

        <label
          htmlFor="username"
          className={thirdError ? "text-label text-label-red" : "text-label"}
        >
          <h4>Username {thirdError}</h4>
        </label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="myusername"
          onChange={(e) => setThird(e.target.value)}
        />

        <label
          htmlFor="password"
          className={fourthError ? "text-label text-label-red" : "text-label"}
        >
          <h4>Password {fourthError}</h4>
        </label>
        <input
          id="password"
          type="text"
          name="password"
          onChange={(e) => setFourth(e.target.value)}
        />

        <label
          htmlFor="confirmpassword"
          className={fifthError ? "text-label text-label-red" : "text-label"}
        >
          <h4>Confirm password {fifthError}</h4>
        </label>
        <input
          id="confirm-password"
          type="text"
          name="confirm-password"
          onChange={(e) => setFifth(e.target.value)}
        />

        <label
          htmlFor="website"
          className={sixthError ? "text-label text-label-red" : "text-label"}
        >
          <h4>Website {sixthError}</h4>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Website - Please enter a valid url"
          onChange={(e) => setSixth(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
