import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer class="flex-container">

    <div class="flex-items">
        <h3>Coordonnées</h3>
        <p>Gîte du moulin</p>
        <p>23 rue du moulin</p>
        <p>62130 Pierremont</p>
        <p>Emilie Becq 06 45 70 40 32</p>
        <p>Jérôme Godefroy 06 07 77 23 96</p>
        <p>gitedumoulinpierremont@gmail.com</p>
    </div>

    <div class="flex-items">
        <h3>A propos</h3>

        <p><a href="#">Conditions générales</a></p>
        <p><a href="#">Mentions légales</a></p>
        <p><a href="#">Politique de confidentialité</a></p>
    </div>


    <div class="flex-items">
        <h3>Suivez-nous</h3>
        <ul class="Suivez-nous">
            <li> <a href="https://www.facebook.com/"> <img class="facebook"
                        src="Logoreseauxsociaux/logofacebook.png" alt="logo facebook"/></a></li>
            <li> <a href="https://www.instagram.com/?hl=fr"> <img class="IG"
                        src="Logoreseauxsociaux/logoinstagram.png" alt="logo unstagram"/></a></li>
        </ul>
    </div>

</footer>

  )
}

export default Footer