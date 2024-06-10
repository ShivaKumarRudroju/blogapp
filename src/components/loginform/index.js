import { useState } from "react";

const Loginform = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Corrected spelling
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDetails = { name, password };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    try {
      const response = await fetch("http://localhost:4000/loginform", options);
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(`${e.message}`);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="checkbox">
          Show Password{" "}
          <input
            type="checkbox"
            id="checkbox"
            onClick={handlePassword}
            suggested="current-password"
          />
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default Loginform;
