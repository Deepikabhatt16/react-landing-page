
import { CgProfile } from "react-icons/cg";
import { FaLocationArrow } from "react-icons/fa";
import { RiMenuSearchFill } from "react-icons/ri";
import { SiTicktick } from "react-icons/si";
import { FaRecycle } from "react-icons/fa";
import { GiThrowingBall } from "react-icons/gi";
import { RxOpenInNewWindow } from "react-icons/rx";

import { PiPlantFill } from "react-icons/pi";



import './App.css';

const App=()=>{
  return (
    <div >
      <nav>
        <div className="first">
          <div className="logo" >
        </div> <span>Dee's Cafe</span>
        </div>
        
        <ul><li>Stories</li>
        <li>Coffee</li>
        <li>Equipment</li>
        <li>Store</li>
        </ul>
        <div className="last">
          <button>Order Now</button>
        <CgProfile className="profile" />
        </div>
      </nav>
      <div className="content">
      <div className="left"></div>
      <div className="right"><div className="bigger"> Enjoy Your Morning Coffee
        </div>
        <div className="smaller">Boost your productivity and build your mood with a cup of coffee in the morning,100% natural from garden. </div>
        
        <div>
          <button className="lastbtn">Order Now <FaLocationArrow /></button>
          

        </div>
        </div>

      </div>
      <div className="end">
        
        <div className="offer">
          <div className="card"><div className="items">1k+</div> <div className="text">Reviews</div></div>
          <div className="card"><div className="items">5k+</div>  <div className="text">Best Sellings</div></div>
          <div className="card"><div className="items">150k+</div>  <div className="text">Menus</div></div>

        </div>
        <div className="coffee">
          <img src="https://img.freepik.com/premium-photo/liquid-splash-coffee-beans-white-background_1015293-12216.jpg" alt="demo" srcset="" />
        </div>
      </div>
      <div className="cover">
        <div className="inside">
        <div className="revoke">
          <div className="block">Viglatte Coffee House</div>
          <p className="option">Have a sip, Survive the Work Week</p>
          <div className="last">
          <button> <RiMenuSearchFill />
          See Our Menu</button>
        </div>
        </div>
        </div>
      </div>
      <div className="end">
      <div className="coffee">
          <img className="east" src="https://img.freepik.com/premium-vector/order-coffee-icon_118813-11271.jpg" alt="demo" srcset="" />
        </div>
        
        <div className="order">
          <h1>You Can Choose Your Coffee Here.</h1>
          <div className="step"><SiTicktick className="icon"/> The Best selection of beans.</div>
          <div className="step"><SiTicktick className="icon"/> Roasted with the best method.</div>
          <div className="step"><SiTicktick className="icon"/> Served with the bes taste.</div>

        </div>
        <div className="coffee">
          <img className="west" src="https://img.freepik.com/premium-photo/glass-iced-coffee-with-black-straw-sits-pile-coffee-beans_81048-3453.jpg" alt="demo" srcset="" />
        </div>
      </div>
      <div className="footer">
        <div className="side">
        <div className="steps"><PiPlantFill className="icons"/><p>Coffee Beans from Organic Garden.</p> </div>
          <div className="steps"><FaRecycle className="icons"/><p>Environment Friendly Material.</p></div>
          <div className="steps"><GiThrowingBall className="icons"/> <p>Boost Productivity.</p></div>

        </div>
        <div className="section">Learn More <RxOpenInNewWindow /> </div>
      </div>
    </div>
  )}

export default App
