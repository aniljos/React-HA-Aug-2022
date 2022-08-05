import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import {appRoutes} from './routes/routes';

function App() {
  return (
    <Router>
      <div className="container-fluid">
       
       <Header/>

        <main className="col-12">
            <Routes>
              {/* <Route path="/home" element={<Hello message="Hello World" color="slateblue"/>} />
              <Route path="/products" element={<ListProducts/>} />
              <Route path="/counter" element={<Counter initCount={7}/>} />
              <Route path="/search" element={<Search/>} />
              <Route path="/login" element={<Login/>} /> */}

              {appRoutes.map((item, index) => {

                const Component = item.component;

                if(item.secure){
                  return (
                    <Route key={item.path} path={item.path} 
                          element={<ProtectedRoute><Component/></ProtectedRoute>} />
                  )
                }
                else{
                  return (
                    <Route key={item.path} path={item.path} element={<Component/>} />
                  )
                }
                

              })}

            </Routes>
        </main>


      </div>
    </Router>
  );
}

export default App;
