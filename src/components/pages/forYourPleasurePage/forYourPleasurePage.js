import React, {Component} from 'react';
import Header from '../../header';
import Footer from '../../footer';

import coffeGirl from '../../../images/coffee_girl.jpg';
import beansLogoDark from '../../../images/Beans_logo_dark.svg';

class ForYourPleasurePage extends Component {

  render() {
    return (
      <>
        <Header header='For your pleasure'/>
          <section className="shop">
            <div className="container">
              <div class="row">
                <div class="col-lg-4 offset-2">
                  <img class="shop__girl" src={coffeGirl} alt="girl" />
                </div>
                <div class="col-lg-4">
                  <div class="title">About our beans</div>
                  <img class="beanslogo" src={beansLogoDark} alt="Beans logo" />
                  <div class="shop__text">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    <br/><br/>
                    Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                    so questions. <br/>
                    As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                    met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                    is song that held help face.
                  </div>
                </div>
              </div>
            </div>
          </section>
        <Footer/>
      </>
    )
  }
}


export default ForYourPleasurePage