import WilsonAboutComponent from '../WilsonAboutComponent/WilsonAboutComponent';
import './WilsonHeaderComponent.css';

const WilsonHeaderComponent = () => {


  return (
    <header>
      <div className="heading-primary-box">
        <h1>
          <div className="heading-primary-main">Hi!</div>
          <div className="heading-primary-sub">My name is Wilson</div>
          <div className="heading-primary-sub">I&apos;m a <b>Software Developer</b></div>
        </h1>
      </div>

      <div className='about-layout-container'>
        <WilsonAboutComponent></WilsonAboutComponent>
      </div>

    </header>

    //Clouds containing credits, floating in background animation using clip-path (Hosted on AWS S3, Designed By, Developed By, Icons from, Distributed via Cloud front)
  )
}

export default WilsonHeaderComponent;