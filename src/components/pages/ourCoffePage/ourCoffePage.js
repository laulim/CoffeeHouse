import React, {Component} from 'react';
import Header from '../../header';
import Footer from '../../footer';
import coffeGirl from '../../../images/coffee_girl.jpg';
import beansLogoDark from '../../../images/Beans_logo_dark.svg';
import ShopItem from '../../shopItem';
import GotService from '../../../server/getService';
import SearchPanel from '../../searchPanel';

class OurCoffePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shopData: null,
      term: '',
      filter: 'all'
    }
  }

  gotService = new GotService();

  componentDidMount() {
    this.gotService.loadJson().then(({coffee}) => {
      this.setState(() => {
        return {
          shopData: coffee
        }
      })
    })
  }

  renderItems = (data) => {
    return data.map((item) => {
      return (
        <ShopItem
          id={item.id}
          key={item.id}
          name={item.name}
          url={item.url}
          price={item.price}
          country={item.country}
        />
      )
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  searchPost = (items, term) => {
    
    if (term.trim().length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.props.name.toLowerCase().indexOf(term) > -1;
    })
  }

  render() {
    const {shopData, term} = this.state;

    let content = shopData ? this.searchPost((this.renderItems(shopData)), term) :[];
    // let content = shopData ? this.renderItems(shopData) : [];

    return (
      <>
        <Header header='Our coffe'/>

        <section className="shop">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 offset-2">
                <img className="shop__girl" src={coffeGirl} alt="girl" />
              </div>
              <div className="col-lg-4">
                <div className="title">About our beans</div>
                <img className="beanslogo" src={beansLogoDark} alt="Beans logo" />
                <div className="shop__text">
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
            <div className="line"></div>
            <div className="row">
              <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
              {/* <div className="col-lg-4 offset-2">
                <form action="#" className="shop__search">
                  <label className="shop__search-label" htmlFor="filter">Looking for</label>
                  <input id="filter" type="text" placeholder="start typing here..." className="shop__search-input" />
                </form>
              </div> */}
              <div className="col-lg-4">
                <div className="shop__filter">
                  <div className="shop__filter-label">Or filter</div>
                  <div className="shop__filter-group">
                    <button className="shop__filter-btn">Brazil</button>
                    <button className="shop__filter-btn">Kenya</button>
                    <button className="shop__filter-btn">Columbia</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="shop__wrapper">
                  {content}
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


export default OurCoffePage