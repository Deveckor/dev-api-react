import { Routes, Route } from "react-router-dom"
import EventCard from "../Components/Home-rigth-card";
import ListingCard from "../Components/ListingCards";
import NavMain from "../Components/NavMain"
import Header from "../Components/Header";
import SectionCards from "../CRUD/SectionCards";
import Login from "../Components/Login";
import CreateAccount from "../Components/CreateAccount";
import DevCommunityCard from "../Components/DevCommunityCard";
import CodeNewbieCard from "../Components/CodeNewbieCard";
import DevRunsCard from "../Components/DevRunsCard";
import HomeListGroup from "../Components/HomeListGroup";
import OtherListGroup from "../Components/OtherListGroup";
import MyTagsListGroup from "../Components/MyTagsListGroup";
import CreatePost from "../Components/CreatePost";
import SectionWriters from '../CRUD/SectionWriters'

function Layout(props) {
  const {token,setToken, isLogin, setIsLogin} = props;
  
  if (localStorage.getItem('token')) {
    
    setIsLogin(true);
    setToken(localStorage.getItem('token'));
  }
  
  
  
 

  return (
    <div>
      <Header
       isLogin={isLogin}
       setIsLogin={setIsLogin}
       setToken={setToken}
      />
      
        <section className="container">
          <div className="row"
            <aside className="col-md-4 col-lg-3  d-none d-md-block mt-4">
            
              
              <DevCommunityCard />
              <HomeListGroup />
              <OtherListGroup />
              <MyTagsListGroup />
              <CodeNewbieCard />
              <DevRunsCard />
              {/*<Routes>
                <Route path="DevCommunityCard" element={<DevCommunityCard/> }/> 
                <Route path="HomeListGroup" element={<HomeListGroup/> }/>
                <Route path="therListGroup" element={<OtherListGroup/> }/>
                <Route path="MyTagsListGroup" element={<MyTagsListGroup/> }/>
                <Route path="CodeNewbieCard" element={<CodeNewbieCard/> }/>
                <Route path="DevRunsCard" element={<DevRunsCard/> }/> 
              </Routes>*/}
            
            </aside>
            <section className="col-md-8 col-lg-5">
                {!isLogin ? null : <NavMain/>}
                <Routes>
                  <Route 
                  path="/"
                  element={!isLogin ? <h2 className="mt-4">Inicie sesion</h2> :null}
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
                  token={token}
                  setToken={setToken}
                  setIsLogin={setIsLogin}
                  />}
                  />
                  <Route
                  path= '*'
                  element= {<h2>Error connect</h2>}
                  />
                  <Route
                  path='writers'
                  element={<SectionWriters/>}
                  />
                  <Route
                  path="CreatePost"
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
