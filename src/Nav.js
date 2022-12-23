import './Nav.css';

function Nav() {
  let obj = {news: "Новости", home: "Главная", current: "Актуальное", reviews: "Отзывы", contacts: "Контакты"}
    return (
      <nav>
        <ul>
          <li><a href="#">{obj.home}</a></li>
          <li><a href="#">{obj.news}</a></li>
          <li><a href="#">{obj.current}</a></li>
          <li><a href="#">{obj.reviews}</a></li>
          <li><a href="#">{obj.contacts}</a></li>
        </ul>
      </nav>
    );
  }
  
  export default Nav;
  