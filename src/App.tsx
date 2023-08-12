import React from 'react';
import './App.scss';

import {Search} from './components/Search/Search';
import {Logo} from './components/Logo/Logo';
import {Banner} from './components/Banner/Banner';
import {News} from './components/News/News';
import {StockMarket} from './components/StockMarket/StockMarket';
import {Weather} from './components/Weather/Weather';
import {Navigation} from './components/Navigation/Navigation';

const data = {
  navigation: [
    {
      value: 'video',
      text: 'Видео',
      href: '#',
    },
    {
      value: 'images',
      text: 'Картинки',
      href: '#',
    },
    {
      value: 'news',
      text: 'Новости',
      href: '#',
    },
    {
      value: 'maps',
      text: 'Карты',
      href: '#',
    },
    {
      value: 'market',
      text: 'Маркет',
      href: '#',
    },
    {
      value: 'translator',
      text: 'Переводчик',
      href: '#',
    },
    {
      value: 'broadcast',
      text: 'Эфир',
      href: '#',
    },
    {
      value: 'more',
      text: 'Ещё',
      href: '#',
    },
  ],
  weather: {
    href: 'https://forecast7.com/en/55d7637d62/moscow/',
  },
  stockMarket: [
    {
      currency: 'USD MOEX',
      value: 63.52,
      diffValue: '+0.09',
    },
    {
      currency: 'EUR MOEX',
      value: 70.86,
      diffValue: '+0.14',
    },
    {
      currency: 'Нефть',
      value: 64.4,
      diffValue: '+1.63%',
    },
  ],
  news: {
    xl: [1, 2, 3, 4, 5],
    sm: [1, 2, 3],
  },
};

const currentDate = new Date().toLocaleString();

function App() {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row align-items-end justify-content-end">
          <div className="col-12 col-md-6">
            <News title="Сейчас в СМИ" date={currentDate}>
              <ul>
                {data.news.xl.map((news) => (
                  <li key={news} className="d-flex align-items-center">
                    <i className="me-2 material-icons text-primary">grade</i>
                    <a href="#" className="text-decoration-none">
                      Новость {news}
                    </a>
                  </li>
                ))}
              </ul>
            </News>
          </div>
          <div className="col-12 col-md-3">
            <News title="Работа над ошибками" href="#" imgSrc="https://placekitten.com/305/100">
              <p>Смотрите на Яндексе и запоминайте</p>
            </News>
          </div>
        </div>

        <div className="row justify-content-end">
          <div className="col-12 col-md-9">
            <StockMarket items={data.stockMarket} />
          </div>
        </div>

        <div className="row justify-content-end">
          <div className="col-12 col-md-9">
            <Navigation items={data.navigation} />
          </div>
        </div>

        <div className="row align-items-center justify-content-end">
          <div className="col-12 col-md-auto">
            <Logo />
          </div>
          <div className="col-12 col-md-9">
            <Search />
          </div>
        </div>

        <div className="row justify-content-end">
          <div className="col-12 col-md-9">
            <Banner href="#" imgUrl="https://placekitten.com/1200/200" />
          </div>
        </div>

        <div className="row justify-content-end">
          <div className="col-12 col-md-3">
            <Weather title="Погода" href={data.weather.href} />
            <div className="mt-3">
              <News title="Посещаемое">
                <ul>
                  {data.news.sm.map((news) => (
                    <li key={news}>
                      <a href="#" className="text-decoration-none">
                        Новость {news}
                      </a>
                    </li>
                  ))}
                </ul>
              </News>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <News title="Карта Германии">
              <ul>
                {data.news.sm.map((news) => (
                  <li key={news}>
                    <a href="#" className="text-decoration-none">
                      Новость {news}
                    </a>
                  </li>
                ))}
              </ul>
            </News>
            <div className="mt-3">
              <News title="Телепрограмма" actionButton={{href: '#', text: 'Эфир'}}>
                <ul>
                  {data.news.sm.map((news) => (
                    <li key={news}>
                      <a href="#" className="text-decoration-none">
                        Новость {news}
                      </a>
                    </li>
                  ))}
                </ul>
              </News>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <News title="Эфир">
              <ul>
                {data.news.sm.map((news) => (
                  <li key={news} className="d-flex align-items-center">
                    <i className="material-icons me-2 text-primary">not_started</i>
                    <a href="#" className="text-decoration-none">
                      Новость {news}
                    </a>
                  </li>
                ))}
              </ul>
            </News>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
