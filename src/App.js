import './App.scss';
import SideNav from "./Components/SideNav";
import Main from "./Components/Main";
import Player from "./Components/Player";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
// import { faHome,faColumns } from '@fortawesome/free-regular-svg-icons';
library.add(fas,far);

function App() {
  return (
    <div className="App">
      <SideNav />
      <Main />
      <Player />
    </div>
  );
}
export default App;
