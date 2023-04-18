import React from 'react';
import './App.css';


function App() 
{
  return (
    <div>
      
      <header>
        <img src="./images/logo-1.jpg" alt="Putatoe Logo" />
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Careers</li>
            <li>Contact Us</li>
            
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h1>PUTATOE </h1>
          <p>ONE STOP SOLUTION TO ALL YOUR NEEDS.</p>
        </section>
        <section className="search-bar">
          <form>
            <input type="text" placeholder="Search" />
            <button type="submit">Go</button>
          </form>
        </section>

        <section className="offer-banner">
          <img src="./images/logo-10.jpg" alt="Special Offer" />
        </section>
        
        <section className="featured-services">
          <div className="featured-service">
            <img src="./images/logo-2.png" alt="Mobile Recharge" />
            <h2>Mobile Recharge</h2>
            <p>Recharge your mobile phone or someone else's.</p>
          </div>
          <div className="featured-service">
            <img src="./images/logo-3.png" alt="Electricity Bill Payment" />
            <h2>Electricity Bill Payment</h2>
            <p>Pay your electricity bill online, quickly and securely.</p>
          </div>
          <div className="featured-service">
            <img src="./images/logo-5.png" alt="News" />
            <h2>DTH RECHARGE</h2>
            <p>DTH RECHARGE FOR YOU AND YOUR FAMILY.</p>
            </div>
          <div className="featured-service">
            <img src="./images/logo-4.jpg" alt="LOAN" />
            <h2>LOAN</h2>
            <p>TAKE A LOAN AND PAY LATER.</p>
          </div>
          <div className="featured-service">
            <img src="./images/logo-6.png" alt="News" />
            <h2>NEWS</h2>
            <p>GET THE LATEST NEWS FROM HERE.</p>
          </div>
          <div className="featured-service">
            <img src="./images/logo-7.png" alt="Refer and Earn" />
            <h2>REFER AND EARN</h2>
            <p>REFER YOUR FRIENDS AND EARN.</p>
          </div>
          <div className="featured-service">
            <img src="./images/logo-8.png" alt="Promotion" />
            <h2>Promotion</h2>
            <p>Promote our page</p>
          </div>
          
        </section>  
       </main>
       

      <footer>
        <p>&copy; 2023 Putatoe. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default App;
