import colors from "../utils/Colors";
import viewStates from "../utils/ViewStates";

function SideBar(props){
    return (
        <div className={`${props.cols} ${props.height}`} style={{backgroundColor: colors.navBar}}>
            <div className="tab-Container grid grid-rows-10">

            <button onClick={() => props.setViewState(viewStates.alcoholView)}
                    className="row-span-2 text-2xl pt-4 pb-4 font-semibold" 
                    style={{backgroundColor: props.viewState === viewStates.alcoholView ? colors.darkCardBackground : colors.cardBackground,
                            color: colors.lightText}
                          }
            >
                Alcohol Drinks 
            </button>

            <button onClick={() => props.setViewState(viewStates.mixView)}
                    className="row-span-2 text-2xl pt-8 pb-8 font-semibold"
                    style={{backgroundColor: props.viewState === viewStates.mixView ? colors.darkCardBackground : colors.cardBackground,
                            color: colors.lightText}
                          }
            >
                Mix Drinks 
            </button>
            </div>
        </div>
    )
}

export default SideBar;