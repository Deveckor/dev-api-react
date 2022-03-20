import React, {useState} from "react";
import EventCard from "../Components/Home-rigth-card";
import ListingCard from "../Components/ListingCards"
import Header from "../Components/Header";
import SectionCards from "./SectionCards";
import Login from "../Components/Login"


function Home(props) {

    const [isLogin, setIsLogin] = useState(false)
    const [token, setToken] = useState('');
    const [buttonlogin, setbuttonlogin] = useState(false);

    return(
<div>
    <Header
    setbuttonlogin = {setbuttonlogin}
    token = {token}
    setToken = {setToken}
    buttonlogin = {buttonlogin}
    />
    <main className="container-lg margin-header-fix">
        <section className="container">
            <div className="row">
                <aside className="col-md-4 col-lg-3 flex-shrink-2 d-none d-md-block mt-4">
                left cards
                </aside>
                <section className="col-md-8 col-lg-5">
                    {!token ? null: <SectionCards
                    token={token}
                />}
                {!buttonlogin ? null:<Login
                    setToken = {setToken}
                    setIsLogin={setIsLogin}
                    setbuttonlogin = {setbuttonlogin}
                />}
                
                </section>

        <div className="d-none d-lg-block col-lg-1 mt-4">
            <EventCard /> 
            <ListingCard /> 
            
        </div>
            </div>
        </section>
        
       
    </main>
</div>
    )
}

export default Home