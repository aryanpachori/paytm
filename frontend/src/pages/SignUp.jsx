import { Heading } from "../Components/Heading";
import { SubHeading } from "../Components/SubHeading";
import {InputBox} from "../Components/InputBox"
import {Button} from "../Components/Button"
import {BottomWarning} from "../Components/BottomWarning"

export function SignUp() {
  return(
    <div className=" bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
      <Heading label={"Sign Up"}/>
      <SubHeading label={"Enter your information to create an account :)"}/>
       <InputBox label={"First Name"} placeholder={"John"}/>
       <InputBox label={"Last Name"} placeholder={"Doe"}/>
       <InputBox label={"Email"} placeholder={"example@gmail.com"}/>
       <InputBox label={"Password"} placeholder={"*****"}/>
       <Button label={"SIGN UP"}/>
       <BottomWarning label={"Already have an account ?"} buttonText={"Sign In"} />
      </div>

    </div>
   
    </div>
  )
}
