import React, {Component} from 'react';
import Header from '../../header';
import Footer from '../../footer';
import {Link} from 'react-router-dom';

import beansLogoDark from '../../../images/Beans_logo_dark.svg';

class MainPage extends Component {

  render(){
    return (
      <>
        <Header pageType='MAIN_PAGE' header=''/>

        <section className="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="title">About Us</div>
                  <img className="beanslogo" src={beansLogoDark} alt="Beans logo" />
                  <div className="about__text">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.<br /><br/>

                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.
                  </div>
                </div>
              </div>
            </div>
        </section>
        <section className="best">
          <div className="container">
            <div className="title">Our best</div>
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="best__wrapper">
                  <Link to='/our-coffe/coffe-sort-name' className="best__item">
                    <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee" />
                    <div className="best__item-title">Solimo Coffee Beans 2kg</div>
                    <div className="best__item-price">10.73$</div>
                  </Link>
                  <Link to='/our-coffe/coffe-sort-name' className="best__item">
                    <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee" />
                  <div className="best__item-title">Presto Coffee Beans 1kg</div>
                  <div className="best__item-price">15.99$</div>
                </Link>
                <Link to='/our-coffe/coffe-sort-name' className="best__item">
                  <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee" />
                  <div className="best__item-title">AROMISTICO Coffee 1kg</div>
                  <div className="best__item-price">6.99$</div>
                </Link>
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


export default MainPage