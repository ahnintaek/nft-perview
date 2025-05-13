import logo from './images/favicon-32x32.png';
import './App.css';
import nftimg from './images/image-equilibrium.jpg';
import ethereum from './images/icon-ethereum.svg';
import clock from './images/icon-clock.svg';
import avatar from './images/image-avatar.png';
import view from './images/icon-view.svg'

function App() {
  return (
    <div className="Card">
      <div className="ImageContainer">
        <div className="ImageOverlay">
          <img src={view} alt="view" className="ViewIcon" />
        </div>
        <img src={nftimg} alt="nftimg" className="NftImage" />
      </div>
      <h3 className="Title hover-highlight">Equilibrium Classic #3429</h3>
      <div className="Description">Our Equilibrium collection promotes balance and calm</div>
      <div className="flex-space-between flex-row">
        <p className="Nftname"><img src={ethereum} className="NftNameImg"/>0.041 ETH</p>
        <p className="Clock"><img src={clock} className="ClockImage" />3days left</p>
      </div>
      <hr />
      <div className="CreatorSection flex-row">
        <img src={avatar} className="avatar"/>
        <p className="Description">Creation of </p>
        <p className="Name hover-highlight">Jules Wyvern</p>
      </div>
    </div>
  );
}

export default App;
