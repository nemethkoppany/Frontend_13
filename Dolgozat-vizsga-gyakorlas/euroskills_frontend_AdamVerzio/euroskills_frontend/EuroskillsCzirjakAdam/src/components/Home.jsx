import nyitokep from "../../../forrasok/nyitokep.webp"
import { Link, Form, useRouteLoaderData } from "react-router-dom";

export default function Home(){

    const user = useRouteLoaderData("root");
    return(
        <>
            <main>
                <header className="text-center">
                    <h1>EuroSkills Budapest 2018</h1>
                </header>
                <section className="text-center">
                    <p>
                        Ünnepélyes záró ceremónia keretében hirdették ki a EuroSkills Budapest 2018 győzteseit a Papp László Budapest Sportarénában 2018. szeptember 29-én. Magyar versenyző 27 szakmában indult, ebből 17 versenyszakmákban értek el helyezést. Hazánk ismét bebizonyította, hogy a magyar fiatalok nem maradnak el szaktudásban és tehetségben európai társaiktól.
                    </p>
                </section>
                <section className="text-center">
                    <p>
                        A magyar szakemberek ismét bizonyították, hogy tudásuk és szakértelmük kiemelkedő az európai mezőnyben is: 3 arany, 3 ezüst, 3 bronz és 8 kiválósági érmet nyertek, összesen 17 helyezést. A EuroSkills Budapest 2018 Nemzet Legjobbja kitüntetést Nagy Ádám János tudhatja magáénak.
                    </p>
                   
                </section>
                     
                <section className=" container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <img src={nyitokep} alt="nyitó kép" className="img-fluid" />
                        </div>
                        <div id="eredmenyek" className="col-sm-6 ml-3">
                            <h2>Eredmények</h2>

                            <div id="aranyerem">
                                <h3>Aranyérem és a nemzet legjobbja:</h3>
                                <p>Nagy Ádám János, épületasztalos</p>
                            </div>

                            <div id="ezusterem">
                                <h3>Ezüstérem:</h3>
                                <ul>
                                    <li>Hasza Attila, autószerelő</li>
                                    <li>Varholik Dávid, ápolás és gondozás</li>
                                    <li>Cseke Szabolcs, festő, díszítőfestő</li>
                                    <li>Balogh Ákos, webfejlesztő</li>
                                </ul>
                            </div>
                            <div id="bronzerem">
                                <h3>Bronzérem:</h3>
                                <ul>
                                    <li>Zaja Dániel, hegesztő</li>
                                    <li>Balogh Krisztián, kőfaragó</li>
                                    <li>Takács Dániel, virágkötő</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <h3 className="text-center">Szívből gratulálunk minden résztvevőnek az elhivatott munkájához és a kiemelkedő eredményekhez!</h3>
                    <div className="d-flex justify-content-center px-5 py-5 gap-5">
                        <Link to={"/eredmenyek"} className="btn btn-primary">További eredmények</Link>
                        {!user && (
                            <>
                               <Link to={"/login"}  className="btn btn-success">Bejelentkezés</Link>
                            </>
                        )}
                        {user && (
                            <> 
                                <Form method="post" action="/logout">
                                    <button className="btn btn-danger">Kijelentkezés</button>
                                </Form>
                            </>
                        )}
                        
                    </div>
                </section>
            </main>
            
        </>
    );
};