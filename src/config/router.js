import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import HomeScreen from '../Screens/Home'
  
  function AppRouter() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
       
        </Routes>
      </BrowserRouter>
    );
  }
  export default AppRouter;