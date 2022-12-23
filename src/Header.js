import './Header.css';

function Header() {
        let a = "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700049868.jpg",
        h2 = "Puppies Express!";
    return (
        <header>
            <a className="logo" href={a}>Cute</a>
            <h2>{h2}</h2>
        </header>
    );
  }
  
  export default Header;