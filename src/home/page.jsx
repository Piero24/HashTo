import HomeSection1 from "./HomeSection1"; // Importing HomeSection1 component for use

const Home = () => {

    return (
        <div>
            {/* Wrapper for the Home section */}
            <div className="">
                {/* Rendering the HomeSection1 component inside the Home page */}
                <HomeSection1 />
            </div>
        </div>
    );
};

export default Home;