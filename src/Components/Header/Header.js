import './Header.css'

export default function Header() {
    return (
        // <div >
        //     <ul>
        //         <li>
        //             <a href='/'>Home</a>
        //         </li>
        //         <li>
        //             <a href='/About'>About the Club</a>
        //         </li>
        //         <li>
        //             <a href='/Coaches'>Our Coaches</a>
        //         </li>
        //         <li>
        //             <a href='/Sport'>The Sport</a>
        //         </li>
        //         <li>
        //             <a href='/FAQ'>FAQ</a>
        //         </li>
        //         <li>
        //             <a href='/Policies'>Covid Policies</a>
        //         </li>
        //         <li>
        //             <a href='/Calendar'>Calendar</a>
        //         </li>
        //     </ul>
        // </div>
        <div id="Header">
            <div id="Header_o" class="Header">
                <div id="Hero_Image">
                    <div id="Hero_Image_q">
                        {/* <img id="HeroImage" src="HeroImage.png" srcset="HeroImage.png 1x, HeroImage@2x.png 2x"> */}

                    </div>
                    <div id="Logo__Text">
                        <div id="Fencing">
                            <span>Fenc·ing</span>
                        </div>
                        <div id="fen-sing">
                            <span>[fen-sing]</span>
                        </div>
                        <div id="noun_the_art_practice_or_sport">
                            <span>noun<br />the art, practice, or sport in which an épée, foil, or saber is used for defense and attack</span>
                        </div>
                        {/* <img id="MFA_Logo_Original" src="MFA_Logo_Original.png" srcset="MFA_Logo_Original.png 1x, MFA_Logo_Original@2x.png 2x"> */}

                    </div>
                </div>
                <div id="Join_Button">
                    <svg class="JoinBackground">
                        <rect id="JoinBackground" rx="0" ry="0" x="0" y="0" width="170" height="63">
                        </rect>
                    </svg>
                    <div id="Join_Us">
                        <span>Join Us</span>
                    </div>
                </div>
                <div id="Nav_Bar">
                    <svg class="NavBarDevider" viewBox="0 0 1920 10">
                        <path id="NavBarDevider" d="M 0 0 L 1920 0">
                        </path>
                    </svg>
                    <svg class="NavBar_Background">
                        <rect id="NavBar_Background" rx="0" ry="0" x="0" y="0" width="1920" height="66">
                        </rect>
                    </svg>
                    <div onclick="application.goToTargetView(event)" id="Home" class="Home">
                        <div id="Home_">
                            <span>Home</span>
                        </div>
                    </div>
                    <div onclick="application.goToTargetView(event)" id="About_the_Club" class="About_the_Club">
                        <div id="About_the_Club_">
                            <span>About the Club</span>
                        </div>
                    </div>
                    <div onclick="application.goToTargetView(event)" id="Our_Coaches" class="Our_Coaches">
                        <div id="Our_Coaches_">
                            <span>Our Coaches</span>
                        </div>
                    </div>
                    <div onclick="application.goToTargetView(event)" id="The_Sport" class="The_Sport">
                        <div id="The_Sport_ba">
                            <span>The Sport</span>
                        </div>
                    </div>
                    <div onclick="application.goToTargetView(event)" id="FAQ" class="FAQ">
                        <div id="FAQ_bc">
                            <span>FAQ</span>
                        </div>
                    </div>
                    <div onclick="application.goToTargetView(event)" id="Covid_Policies" class="Covid_Policies">
                        <div id="Covid_Policies_be">
                            <span>Covid Policies</span>
                        </div>
                    </div>
                    <div onclick="application.goToTargetView(event)" id="Calendar" class="Calendar">
                        <div id="Calendar_bg">
                            <span>Calendar</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}