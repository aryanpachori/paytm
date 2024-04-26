import { Appbar } from "../Components/Appbar";
import { Balance } from "../Components/Balance";
import { Users } from "../Components/Users";
export function DashBoard() {
  return (
    <div>
      <Appbar />
      <div className="m-8">
        <Balance value={10000} />
        <Users />
      </div>
    </div>
  );
}
