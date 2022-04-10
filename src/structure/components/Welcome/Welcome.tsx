import React from "react" 
import Image from "next/image"
import WelcomeBanner from "./style"
import WelcomePage from "@assets/welcome.png"
const Welcome = () => {
    return(
        <WelcomeBanner>
            <Image 
            src={WelcomePage}
            alt=""
            />
            <h1>Welcome back, master!</h1>
        </WelcomeBanner>
    )
}

export default Welcome