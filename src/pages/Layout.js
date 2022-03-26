import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"
import EventCard from "../Components/Home-rigth-card";
import ListingCard from "../Components/ListingCards";
import NavMain from "../Components/NavMain"
import Header from "../Components/Header";
import SectionCards from "../View/SectionCards";
import Login from "../Components/Login";
import CreateAccount from "../Components/CreateAccount";
import DevCommunityCard from "../Components/DevCommunityCard";
import CodeNewbieCard from "../Components/CodeNewbieCard";
import DevRunsCard from "../Components/DevRunsCard";
import HomeListGroup from "../Components/HomeListGroup";
import OtherListGroup from "../Components/OtherListGroup";
import MyTagsListGroup from "../Components/MyTagsListGroup";
import CreatePost from "../Components/CreatePost"

function Layout() {
  const [isLogin, setIsLogin] = useState(false);
  
  const [token, setToken] = useState("");
  

  return (
    <div>
      <Header
       isLogin={isLogin}
       setIsLogin={setIsLogin}
       token={token}
       setToken={setToken}
      />
      
        <section className="container">
          <div className="row">
            <aside className="col-md-4 col-lg-3 flex-shrink-2 d-none d-md-block mt-4">
            <div className="d-none d-lg-block mt-4">
            <DevCommunityCard/>
            <HomeListGroup/>
            <OtherListGroup/>      
            <MyTagsListGroup/>
            <CodeNewbieCard/>
            <DevRunsCard/>          
              {/*<Routes>
                <Route path="DevCommunityCard" element={<DevCommunityCard/> }/> 
                <Route path="HomeListGroup" element={<HomeListGroup/> }/>
                <Route path="therListGroup" element={<OtherListGroup/> }/>
                <Route path="MyTagsListGroup" element={<MyTagsListGroup/> }/>
                <Route path="CodeNewbieCard" element={<CodeNewbieCard/> }/>
                <Route path="DevRunsCard" element={<DevRunsCard/> }/> 
              </Routes>*/}
            </div>
            </aside>
            <section className="col-md-8 col-lg-5">
                {!isLogin ? null : <NavMain/>}
                <Routes>
                  <Route 
                  path="/"
                  element={!isLogin ? <h2>Por favor inicie sesion</h2> : null}
                  />
                  <Route
                  path="post"
                  element=
                  {!isLogin? null: <SectionCards
                  token={token}
                  />}
                  />
                  <Route
                  path='CreateAccount'
                  element={<CreateAccount/>}
                  />
                  <Route
                  path='login'
                  element={<Login
                  isLogin={isLogin}
                  setToken={setToken}
                  setIsLogin={setIsLogin}
                  />}
                  />
                  <Route
                  path= 'notFound'
                  element= {<h2>Error connect</h2>}
                  />
                  <Route
                  path='/writer'
                  />
                  <Route
                  path="/CreatePost"
                  element={<CreatePost
                  token={token}
                  />}
                  />
                </Routes>
              
            </section>

            <div className="d-none d-lg-block col-lg-1 mt-4">
              <EventCard />
              <ListingCard />
            </div>
          </div>
        </section>
      
    </div>
  );
}

export default Layout;
