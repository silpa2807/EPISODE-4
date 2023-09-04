import React from "react";
import ReactDOM from "react-dom/client";
import { resObj, resList } from "./constants";

// Header
// -->logo
// --> Nav items

// Body
// -->Search
// -->Restaurant Container
//    Contains restaurant cards
// each res card has image, name of restaurant,star rating, cusine, delievry time

// Footer
// -->Copy Right
// -->Links
// -->Address
// -->Contact

//creates an AppLayout compoennt first
//Build header first
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

//inline styling using javascript objeects
const styleCard = {
    backgroundColor: "#f0f0f0",
};
const RestaurantCardInlineStyling = () => {
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <h3>Meghana Foods</h3>
        </div>
    );
};

//Destructuring props

// const RestaurantCard = ({resName, cusine}) => {
//     return (
//         <div className="res-card" style={styleCard}>
//             <img
//                 className="res-logo"
//                 alt="res-logo"
//                 src="https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//             />
//             <h3>{resName}</h3>
//             <h4>{cusine}</h4>
//             <h4>4.4</h4>
//             <h4>38 minutes ETA</h4>
//         </div>
//     );
// };

// const RestaurantCard = (props) => {
//     const { resName, cusine } = props;
//     return (
//         <div className="res-card" style={styleCard}>
//             <img
//                 className="res-logo"
//                 alt="res-logo"
//                 src="https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//             />
//             <h3>{resName}</h3>
//             <h4>{cusine}</h4>
//             <h4>4.4</h4>
//             <h4>38 minutes ETA</h4>
//         </div>
//     );
// };

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, cloudinaryImageId, avgRating, costForTwo, deliveryTime } =
        resData?.data;
    console.log("resData is ", resData);
    return (
        <div className="res-card" style={styleCard}>
            <img
                className="res-logo"
                alt="res-logo"
                src={
                    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                    cloudinaryImageId
                }
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>₹{costForTwo / 100} for two</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};


// whenevr u are looping a resList, you have to give a key for each item in list
// beacuse
const Body = () => {
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                {/* <RestaurantCard resName="KFC Foods" cusine="Burger, Fast Food" /> */}
                {/* <RestaurantCard resData={resList[0]} /> */}
                {resList && resList.map((restaurant) => <RestaurantCard key={restaurant.data.id} resData={restaurant} />)}
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
