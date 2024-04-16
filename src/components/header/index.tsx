import { NavLink } from "react-router-dom";
import { Container } from "@containers";
import logotip from "@images/teslalogo.svg"
import "./style.scss";

const index = () => {
  
  return (
    <header className="bg-black">
      <Container>
        <nav className="flex items-center h-[70px] my-[30px]">
          <NavLink to="/">
            <img src={logotip} alt="logo" className="mr-[100px]" />
          </NavLink>
          <ul className="flex gap-x-8">
            <ul className="flex items-center gap-[10px]">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "activeHome text-white font-medium text-[16px] py-[4px] px-[16px]"
                    : "text-white font-medium text-[16px] py-[4px] px-[16px]"
                }
                to={"/"}
              >
                Model S
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "activeModel3 text-white font-medium text-[16px] py-[4px] px-[16px]"
                    : "text-white font-medium text-[16px] py-[4px] px-[16px]"
                }
                to={"/model-3"}
              >
                Model 3
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "activeModelx text-white font-medium text-[16px] py-[4px] px-[16px]"
                    : "text-white font-medium text-[16px] py-[4px] px-[16px]"
                }
                to={"/model-x"}
              >
                Model X
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "activeModely text-white font-medium text-[16px] py-[4px] px-[16px]"
                    : "text-white font-medium text-[16px] py-[4px] px-[16px]"
                }
                to={"/model-y"}
              >
                Model Y
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "activeModely text-white font-medium text-[16px] py-[4px] px-[16px]"
                    : "text-white font-medium text-[16px] py-[4px] px-[16px]"
                }
                to={"/solar-roof"}
              >
                Solar Roof
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "activeModely text-white font-medium text-[16px] py-[4px] px-[16px]"
                    : "text-white font-medium text-[16px] py-[4px] px-[16px]"
                }
                to={"/solar-panels"}
              >
                Solar Panels
              </NavLink>
            </ul>
          </ul>

          <div className="buttonWrapper">
            <button className="searchButton">
              <i className="bi bi-search"></i> Search
            </button>

            <button className="btnHead">
              <i className="bi bi-person"></i>
            </button>

            <button className="btnHead">
              <i className="bi bi-list"></i>
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default index;
