import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import './home.css'

function Home() {
    return (
        <>
            <Header></Header>
            <main>
        <div class="header">
            <div>
                <img class="background" src={process.env.PUBLIC_URL + "gitemoulinaccueil.jpg"} alt=""/> 
                <h1 class="Textebienvenue">Bienvenue au gîte du moulin</h1>
                <h2>Gîte, Spa et hébergements au coeur du Ternois</h2>
            </div>
        </div>

        <div>
            <p class="Textaccueil">Nous sommes situés dans un petit village du Ternois, à 5 minutes du Circuit de Croix
                en Ternois, 10 minutes de Saint Pol Sur Ternoise, 30 minutes d'Arras, 45 minutes de la Côte d'Opale,
                Saint Omer... <br/> Les gîtes sont confortables et fonctionnels. Tout est à votre disposition pour passer
                un agréable séjour en couple, en famille ou entre amis. Venez les découvrir….</p>
        </div>


        <section>
            <div>
                <h2 class="Titles"> Nos hébergements insolites</h2>
                <img class="imagesinsolites" src={process.env.PUBLIC_URL +  "hebergementkota.jpg"} alt=""/>
                <img class="imagesinsolites" src={process.env.PUBLIC_URL +"herbegementroulotte.jpg"} alt=""/>
                <img class="imagesinsolites" src={process.env.PUBLIC_URL +"hebergementjaccuzi.jpg"} alt=""/>
            </div>

            <button class="reservation"> Réserver </button>
        </section>

        <section>
          
                <h2 class="Titles"> Nos hébergements classiques </h2>
                <img class="imagesclassiques" src={process.env.PUBLIC_URL +"studiochalet.jpeg"} alt="" />
                <img class="imagesclassiques" src={process.env.PUBLIC_URL +"lappart.jpg"} alt="" />
                <img class="imagesclassiques" src={process.env.PUBLIC_URL +"airecampingcar.jpg"} alt=""/>
            
            <button class="reservation"> Réserver </button>
        </section>

        <h2 class="Titles"> Nos services</h2>

        <section class="section section1">
            <div class="div-categoryContainer">
                <img class="image1" src={process.env.PUBLIC_URL +"boncadeau.jpg"} alt=''/>
                <div class="Container2">
                    <h3> Offrez un bon cadeau </h3>
                    <p>un moment de détente inoubliable</p>
                    <a href="#"> <img class="logo" src={process.env.PUBLIC_URL +"iconecadeau.png"} alt="bon cadeau"/></a>
                    <a class="boutonservice"> Offrir un séjour </a>
                </div>
                
            </div>
        </section>

        <section>
            <div class="div-categoryContainer div-categoryContainer2">
                <div class="Container2">
                    <h3> Nos packs dégustations !</h3>
                    <p>En option</p>
                    <a href="#"> <img class="logo" src={process.env.PUBLIC_URL +"45605.png"} alt="packdegustation"/></a>
                    <button class="boutonservice"> Déguster </button>
                </div>
                <img class="image2" src={process.env.PUBLIC_URL +"plateaurepas.jpg"} alt=''/>
            </div>
        </section>

        <section>
            <div class="div-categoryContainer">
                <img class="image3" src="kotagrill.jpeg"/>
                <div class="Container2">
                    <h3>Notre Kota Grill</h3>
                    <a href="#"> <img class="logo" src={process.env.PUBLIC_URL +"barbecue.png"} alt="kotagrill"/></a>
                    <button class="boutonservice"> Je fonce </button>
                </div>
            </div>
        </section>

        <section>
            <div class="div-categoryContainer">
                <div class="Container2">
                    <h3> Nos extérieurs </h3>
                    <p> Notre aire de Camping</p>
                    <button class="boutonservice"> Découvrir </button>
                </div>
                <img class="image4" src={process.env.PUBLIC_URL +"airecampingcar.jpg"} alt=''/>
            </div>
        </section>

        <section>
            <div>
                <h2> Ils ont testés ... </h2>
                <img src="avisgoogle.jpg"alt=''/>
            </div>
        </section>

    </main>
            <Footer></Footer>
        </>
    )
}

export default Home