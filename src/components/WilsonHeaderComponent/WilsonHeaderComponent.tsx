import WilsonAboutComponent from '../WilsonAboutComponent/WilsonAboutComponent';
import './WilsonHeaderComponent.css';

const WilsonHeaderComponent = () => {


  return (
    <header>
      <div className="heading-primary-box">
        <h1>
          Hi!
          <div className="heading-primary-sub">My name is Wilson</div>
          <div className="heading-primary-sub">I&apos;m a <b>Software Developer</b></div>
        </h1>
      </div>

      <div className='about-layout-container'>
        <WilsonAboutComponent></WilsonAboutComponent>
      </div>

    </header>

  )
}

export default WilsonHeaderComponent;