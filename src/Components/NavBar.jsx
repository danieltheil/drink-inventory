import colors from "../utils/Colors";

function NavBar(props){
    return(
        <div className="p-6 text-xl font-semibold grid grid-cols-10"
             style={{backgroundColor: colors.navBar}}>
                <div className="mt-2 ml-5 col-span-3 text-gray-50">
                    H S T
                </div>
                <input type="text" placeholder="Search Drink"
                       className="p-2 bg-slate-100 col-span-5 rounded-lg"
                       style={{backgroundColor: colors.darkCardBackground, color: colors.lightText}}>
                </input>
        </div>
    )
}

export default NavBar;