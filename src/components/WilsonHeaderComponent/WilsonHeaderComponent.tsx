import CloudComponent from '../CloudComponent/CloudComponent';
import WilsonSkillsLayoutComponent from '../WilsonSkillsLayoutComponent/WilsonSkillsLayoutComponent';
import './WilsonHeaderComponent.css';

const WilsonHeaderComponent = () => {


  return (
    <header>
      <CloudComponent></CloudComponent>
      <div className="heading-primary-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Hi!</span>
          <span className="heading-primary-sub">My name is Wilson</span>
          <span className="heading-primary-sub">I&apos;m a <b>Software Developer</b></span>
        </h1>
      </div>
    </header>

    //Clouds containing credits, floating in background animation using clip-path (Hosted on AWS S3, Designed By, Developed By, Icons from, Distributed via Cloud front)
  )
}

export default WilsonHeaderComponent;