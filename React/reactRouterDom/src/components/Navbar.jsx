import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 h-20 w-full flex items-center gap-5 px-8 top-0 fixed z-999999999">
      <img
        className="h-20 w-20"
        src="https://png.pngtree.com/png-vector/20221228/ourmid/pngtree-online-shopping-logo-desing-png-image_6540923.png"
        alt="logo"
      />

      <Menu to={"/"} page={"Home"} />
      <Menu to={"/products"} page={"Products"} />
    </div>
  );
};

const Menu = ({ to, page }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-[tomato]" : "")}
    >
      <span className="text-lg hover:text-[tomato] transition-all duration-200 ">{page}</span>
    </NavLink>
  );
};

export default Navbar;
