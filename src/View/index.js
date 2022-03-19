import React from "react";
import EventCard from "../Components/Home-rigth-card";
import ListingCard from "../Components/ListingCards"
import Header from "../Components/Header";
import SectionCards from "./SectionCards";


function Home() {
    return(
<div>
    <Header/>
    <main className="bg-light container-lg margin-header-fix">
        <section className="container">
            <div className="row">
                <aside className="col-md-4 col-lg-3 flex-shrink-2 d-none d-md-block mt-4">
                left cards
                </aside>
                <section className="col-md-8 col-lg-5">
                <SectionCards/>
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