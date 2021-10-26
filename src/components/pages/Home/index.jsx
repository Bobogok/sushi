import React from 'react';
import { Link } from 'react-router-dom';

import './home.scss';

function Home() {
  return (
    <main className="home">
      <div className="home__inner container">
        <Link to="/catalog/sets" className="home__elem sets">
          <div className="sets__inner">
            <img className="sets__image-main" src={`${process.env.PUBLIC_URL}/img/sets_desktop.png`} alt="" />
            <div className="sets__title">СЕТЫ</div>
          </div>
          <img className="sets__image-leaf" src={`${process.env.PUBLIC_URL}/img/leaf_desktop.png`} alt="" />
        </Link>
        <div className="home__elem list">
          <img className="list__image-arrow" src={`${process.env.PUBLIC_URL}/img/pattern_desktop.png`} alt="" />
          <div className="list__elems">
            <Link to="/catalog/rolls" className="list__elem">
              <div className="list__image-box">
                <img className="list__image-rolls" src={`${process.env.PUBLIC_URL}/img/rolls_desktop.png`} alt="" />
              </div>
              <div className="list__title-rolls">РОЛЛЫ</div>
            </Link>
            <Link to="/catalog/sushi" className="list__elem">
              <div className="list__title-sushi">СУШИ</div>
              <div className="list__image-box">
                <img className="list__image-sushi" src={`${process.env.PUBLIC_URL}/img/sushi_desktop.png`} alt="" />
              </div>
            </Link>
            <Link to="/catalog/fried-rolls" className="list__elem">
              <div className="list__image-box">
                <img
                  className="list__image-fried"
                  src={`${process.env.PUBLIC_URL}/img/fried_rolls_desktop.png`}
                  alt=""
                />
              </div>
              <div className="list__title-fried">
                ЖАРЕНЫЕ <br />
                РОЛЛЫ
              </div>
            </Link>
            <Link to="/catalog/baked-rolls" className="list__elem">
              <div className="list__title-backed">
                ЗАПЕЧЕНЫЕ <br />
                РОЛЛЫ
              </div>
              <div className="list__image-box">
                <img
                  className="list__image-backed"
                  src={`${process.env.PUBLIC_URL}/img/baked_rolls_desktop.png`}
                  alt=""
                />
              </div>
            </Link>
          </div>
        </div>
        <Link to="/catalog/wok" className="home__elem wok">
          <div className="wok__title-inner">
            <div className="wok__title">
              ВОК <br />
              КОНСТРУК <br />
              ТОР
            </div>
            <div className="wok__subtitle">СОБЕРИ СВОЙ</div>
          </div>
          <img className="wok__image-main" src={`${process.env.PUBLIC_URL}/img/wok_desktop.png`} alt="" />
          <img className="wok__image-leaf-top" src={`${process.env.PUBLIC_URL}/img/wok_top_leaf_desktop.png`} alt="" />
          <img
            className="wok__image-leaf-bottom"
            src={`${process.env.PUBLIC_URL}/img/wok_bottom_leaf_desktop.png`}
            alt=""
          />
        </Link>
        <div className="home__elem other">
          <div className="other__inner">
            <Link to="/catalog/sups" className="other__elem sups">
              <img className="sups__image" src={`${process.env.PUBLIC_URL}/img/soups_desktop.png`} alt="" />
              <img className="sups__image-arrows" src={`${process.env.PUBLIC_URL}/img/pattern_desktop.png`} alt="" />
              <div className="sups__title">СУПЫ</div>
            </Link>
            <div className="other__elem snacks">
              <Link to="/catalog/tempura" className="snacks__tempura">
                <div className="snacks__image-inner">
                  <img
                    className="snacks__image-tempura"
                    src={`${process.env.PUBLIC_URL}/img/tempura_desktop.png`}
                    alt=""
                  />
                </div>
                <div className="snacks__title-tempura">ТЕМПУРА</div>
              </Link>
              <Link to="/catalog/drinks" className="snacks__drink">
                <div className="snacks__title-drink">НАПИТКИ</div>
                <div className="snacks__image-inner">
                  <img
                    className="snacks__image-drink"
                    src={`${process.env.PUBLIC_URL}/img/beverages_desktop.png`}
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
