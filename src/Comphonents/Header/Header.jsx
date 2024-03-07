import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
        <img src="" alt="" />
      <div className="navbar bg-base-100 shadow-xl mb-10 flex justify-between p-3">
        <div className="flex-1">
   
          <a className="" href="">
        
            <img
              className="w-32 md:w-40 "
              src={`https://i.ibb.co/g9G0tNd/Logo.png`}
              alt=""
            />
          </a>
        </div>
        <div className="flex-none">
          <div className="menu menu-horizontal px-1 text-xl flex gap-3  md:gap-6 font-bold ">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending "
                  : isActive
                  ? "active underline text-red-500 "
                  : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending "
                  : isActive
                  ? "active underline text-red-500 "
                  : ""
              }
            >
              Donation
            </NavLink>
            <NavLink
              to="/statistic"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active underline text-red-500 "
                  : ""
              }
            >
              Statistic
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

// export part
export default Header;
