
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Footer from './component/Footer';
import SideBar from './component/SideBar';
import Createpost from './component/Createpost';
import PostList from './component/PostList';
import { useState } from 'react';
import PostListProvider from './store/pos-list-store';
function App() {
  const [selectedTab, setselctedTab] = useState("Home");

  return (
    <>
      <PostListProvider>
        <div className="app-container">


          <SideBar selectedTab={selectedTab} setselectedTab={setselctedTab}></SideBar>

          <div className="content">
            <Header></Header>
            {selectedTab === "Home" ? (<PostList></PostList>) : (
              <Createpost></Createpost>
            )}

            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  )
};

export default App
