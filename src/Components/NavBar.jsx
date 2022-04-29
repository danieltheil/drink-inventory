import colors from "../utils/Colors";
import PropTypes from "prop-types";

function NavBar({setSearchTerm}) {
  return (
    <div
      className="p-6 text-xl font-semibold grid grid-cols-10"
      style={{ backgroundColor: colors.navBar }}
    >
      <div className="mt-2 ml-5 col-span-3 text-gray-50">H S T</div>

      <input
        type="text"
        placeholder="Search Drink"
        className="p-2 bg-slate-100 col-span-5 rounded-lg"
        name="searchTerm"
        onChange={
          (e) => {
            setSearchTerm(e.target.value)
          }
        }
        style={{
          backgroundColor: colors.darkCardBackground,
          color: colors.lightText,
        }}
      ></input>
    </div>
  );
}

NavBar.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};

export default NavBar;
