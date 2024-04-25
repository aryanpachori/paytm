import { Heading } from "../Components/Heading";
import { SubHeading } from "../Components/SubHeading";
import {InputBox} from "../Components/InputBox"
import {Button} from "../Components/Button"
import {BottomWarning} from "../Components/BottomWarning"

export function SignIn() {
  return(
    <div className=" bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
      <Heading label={"Sign In"}/>
      <SubHeading label={"Enter your credentials to access the account"}/>
       <InputBox label={"Email"} placeholder={"example@gmail.com"}/>
       <InputBox label={"Password"} placeholder={"*****"}/>
       <Button label={"SIGN IN"}/>
       <BottomWarning label={"New here?"} buttonText={"Create Account"} />
      </div>

    </div>
   
    </div>
  )
}