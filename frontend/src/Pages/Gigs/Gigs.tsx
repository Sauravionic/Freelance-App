import { useState } from "react";
import "./Gigs.scss";
import GigCard from "../../Components/GigCard/GigCard";
import { gigs } from "../../data.tsx";

const Gigs = () => {

    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState("sales");

    const reSort = (type) => {
        setSort(type);
        setOpen(false);
    }
    return (
        <div className="gigs">
            <div className="container">
                <span className="breadcrumbs">Freelance {">"} Graphics & Design {">"} </span>
                <h1>AI Artists</h1>
                <p>Explore the boundaries of art and technology with Freelance's AI artists</p>
                <div className="menu">
                    <div className="left">
                        <span>Budget</span>
                        <input type="text" placeholder="min" />
                        <input type="text" placeholder="max" />
                        <button>Apply</button>
                    </div>
                    <div className="right">
                        <span className="sortby">Sort By: </span>
                        <span className="sorttype">{sort === "sales" ? "Best Selling" : "Newest"}</span>
                        <img src="./Images/down.png" alt="" onClick={() => {setOpen(!open)}}/>
                        {open && <div className="rightmenu">
                            {
                                sort === "sales" ?
                                    (<span onClick={() => reSort("createdAt")}>Newest</span>) :
                                    (<span onClick={() => reSort("sales")}>Best Selling</span>)
                            }
                        </div>}
                    </div>
                </div>
                <div className="cards">
                    {
                        gigs.map(gig => (
                            <GigCard key={gig.id} item={gig} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Gigs