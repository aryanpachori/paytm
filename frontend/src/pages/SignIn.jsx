import { Heading } from "../Components/Heading";
import { SubHeading } from "../Components/SubHeading";
import { InputBox } from "../Components/InputBox";
import { Button } from "../Components/Button";
import { BottomWarning } from "../Components/BottomWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 const navigate = useNavigate();
  return (
    <div className=" bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign In"} />
          <SubHeading label={"Enter your credentials to access the account"} />
          <InputBox
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            label={"Email"}
            placeholder={"example@gmail.com"}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label={"Password"}
            placeholder={"*****"}
          />
        <Button
            onClick={async () => {
              const response = await axios.post(
                "http://localhost:3000/api/v1/user/signin",
                {
                  username,
                  password,
                }
              );
              localStorage.setItem("token", response.data.token);
              navigate("/dashboard");
            }}
            label={"SIGN IN"}
          />
          <BottomWarning
           to={navigate("/signup")}
           label={"New here?"} buttonText={"Create Account"} />
        </div>
      </div>
    </div>
  );
}
