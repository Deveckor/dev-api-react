import React from "react";
import EventCard from "../Components/Home-rigth-card";
import ListingCard from "../Components/ListingCards"
function Home() {
    return(
<div>
    <header>navbar</header>
    <main style={{ display: 'flex', justifyContent: "space-between", border: '1px solid red' }}>
        <div>left cards</div>
        <div>middle</div>
        <div><EventCard /> <ListingCard /> </div>
    </main>
</div>
    )
}

export default Home