import Featured from "../../Components/Featured/Featured";
import Slide from "../../Components/Slide/Slide";
import TrustedBy from "../../Components/TrustedBy/TrustedBy";
import "./Home.scss";
import { cards, projects } from "../../data.tsx";
import CatCard from "../../Components/CatCard/CatCard.tsx";
import ProjectCard from "../../Components/ProjectCard/ProjectCard.tsx";

const Home = () => {
    return (
        <div className="home">
            <Featured />
            <TrustedBy />
            <Slide slidesToShow={5} arrowsScroll={5} swipe={true} centerMode={true}>
                {cards.map(card => (
                    <CatCard item={card} key={card.id}/>
                ))}
            </Slide>
            <div className="features">
                <div className="container">
                    <div className="item">
                        <h1>A whole world of freelance talent at your fingertips.</h1>
                        <div className="title">
                            <img src="./Images/check.png" alt="" />
                            The best for every budget
                        </div>
                        <p>
                            Find the right service for every price point. No hourly rates, just project-based pricing.
                        </p>
                        <div className="title">
                            <img src="./Images/check.png" alt="" />
                            Get quality work done quickly
                        </div>
                        <p>
                            Hand your project over to a talented freelancer in minutes, get long-lasting results.
                        </p>
                        <div className="title">
                            <img src="./Images/check.png" alt="" />
                            Count on 24/7 support
                        </div>
                        <p>
                            Our round-the-clock support team is available to help anytime, anywhere.
                        </p>
                    </div>
                    <div className="item">
                        <video src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7" controls></video>
                    </div>
                </div>
            </div>
            <div className="features dark">
                <div className="container">
                    <div className="item">
                        <h1><b>freelance</b> business.</h1>
                        <h1>A solution built for <i>business</i></h1>
                        <p>Upgrade to a curated experience to access vetted talent and exclusive tools</p>
                        <div className="title">
                            <img src="./Images/check.png"></img>
                            Talent matching
                        </div>
                        <div className="title">
                            <img src="./Images/check.png"></img>
                            Dedicated account management    
                        </div>
                        <div className="title">
                            <img src="./Images/check.png"></img>
                            Team collaboration tools
                        </div>
                        <div className="title">
                            <img src="./Images/check.png"></img>
                            Business payment solutions
                        </div>
                        <button>Explore Freelance Business</button>
                    </div>
                    <div className="item">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" />
                    </div>
                </div>
            </div>
            <div className="projectheading">
                <h1>Inspiring work on freelance.</h1>
            </div>
            <Slide slidesToShow={4} arrowsScroll={4} swipe={true} centerMode={true}>
                {projects.map(project => (
                    <ProjectCard item={project} key={project.id}/>
                ))}
            </Slide>
            <hr/>
        </div>
    )
}

export default Home