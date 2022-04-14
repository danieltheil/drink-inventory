import colors from './utils/Colors'

import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import AlcCardView from './Components/DesktopViews/AlcCardView';
import MobileAlcCardView from './Components/MobileViews/MobileAlcCardView';
import MobileMixCardView from './Components/MobileViews/MobileMixCardView';
import MixCardView from './Components/DesktopViews/MixCardView';

import viewStates from './utils/ViewStates';
import { useState } from 'react';
import { isMobile } from 'react-device-detect';

function App() {
  document.body.style.backgroundColor = colors.background;
  const [viewState, setViewState] = useState(viewStates.alcoholView);

  return (
    <div className="App h-screen">
      <NavBar />
      <div className='content-container grid grid-cols-12 h-full w-full' style={{backgroundColor: colors.background}}>
        { isMobile ?
          null :
          (<SideBar cols="col-span-1" viewState={viewState} setViewState={setViewState}/>) 
        }
        <div className='card-conainer grid grid-cols-10 grid-rows-10 col-span-11 grid-flow-row '>
          { isMobile ? (
              viewState === viewStates.alcoholView ? 
              (<MobileAlcCardView isMobile={isMobile} setViewState={setViewState}/>) :
              (<MobileMixCardView isMobile={isMobile} setViewState={setViewState}/>)
            ) : (
              viewState === viewStates.alcoholView ? 
              (<AlcCardView  setViewState={setViewState}/>) :
              (<MixCardView  setViewState={setViewState} />)
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;