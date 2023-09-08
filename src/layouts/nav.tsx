import { NavBtn } from "@/components/buttons";
import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav className='p-2 flex gap-4'>
      <NavLink
        to={"/"}
        end
        className={"navLink"}
      >
        <NavBtn>電腦</NavBtn>
      </NavLink>
      <NavLink
        to={"phone"}
        end
        className={"navLink"}
      >
        <NavBtn>手機</NavBtn>
      </NavLink>
    </nav>
  );
}
