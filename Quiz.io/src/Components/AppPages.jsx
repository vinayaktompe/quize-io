import { NavLink, useLocation } from "react-router-dom";

const AppPages = () => {
  const location = useLocation();

  const pageArr = [
    {
      page: "Home",
      route: "/",
    },
    {
      page: "About",
      route: "/about",
    },
    {
      page: "Features",
      route: "/features",
    },
    {
      page: "Working",
      route: "/working",
    },
    {
      page: "FAQs",
      route: "/faqs",
    },
    {
      page: "Contact",
      route: "/contact",
    },
  ];
  return (
    <ul className="flex-col lg:flex-row flex items-center gap-5  font-semibold text-xl text-gray-500  -2">
      {pageArr.map((elem, idx) => {
        let active = false;
        if (elem.route === "/") {
          active =
            location.pathname === "/" ||
            location.pathname.startsWith("/generate-quiz") ||
            location.pathname.startsWith("/quiz");
        } else {
          active = location.pathname.startsWith(elem.route);
        }

        return (
          <NavLink 
            key={idx}
            to={elem.route}
            
            className={active ? " bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent  font-bold border-b-2 lg:border-0" : "text-gray-500   border-b lg:border-0"}
          >
            {elem.page}
          </NavLink>
        );
      })}
    </ul>
  );
};

export default AppPages;
