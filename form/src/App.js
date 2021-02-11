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
    if (second === "") {
      setSecondError("cannot be blank");
    } else {
      setSecondError("");
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
    if (sixth === "") {
      setSixthError("cannot be blank");
    } else {
      setSixthError("");
    }
  }
  return (
    <div className="theForm">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="name"
          className={firstError ? "text-label text-label-red" : "text-label"}
        >
          Name {firstError}
        </label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={(e) => setFirst(e.target.value)}
        />

        <label
          htmlFor="email"
          className={secondError ? "text-label text-label-red" : "text-label"}
        >
          Email {secondError}
        </label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={(e) => setSecond(e.target.value)}
        />

        <label
          htmlFor="username"
          className={thirdError ? "text-label text-label-red" : "text-label"}
        >
          Username {thirdError}
        </label>
        <input
          id="username"
          type="text"
          name="username"
          onChange={(e) => setThird(e.target.value)}
        />

        <label
          htmlFor="password"
          className={fourthError ? "text-label text-label-red" : "text-label"}
        >
          Password {fourthError}
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
          Confirm password {fifthError}
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
          Website {sixthError}
        </label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={(e) => setSixth(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
