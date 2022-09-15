import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import videoPokemon from "./videoPokemon.mp4";

function LandingPage() {

    return (
        <div className='myvideo'>
            <h1 className={styles.title}>Welcome to Pokemon App!</h1>
            <Link to="/home">
                <button className={styles.button}>Enter to site</button>
            </Link>
            <video src={videoPokemon} autoPlay loop muted />
        </div>
    );
}

export default LandingPage;