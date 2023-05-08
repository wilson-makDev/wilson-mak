import './WilsonContent.css';
import WilsonHeaderComponent from "../WilsonHeaderComponent/WilsonHeaderComponent";
import WilsonCareerComponent from '../WilsonCareerComponent/WilsonCareerComponent';
import WilsonAboutComponent from '../WilsonAboutComponent/WilsonAboutComponent';
import WilsonProjectsComponent from '../WilsonProjectsComponent/WilsonProjectsComponent';
import WilsonSchoolComponent from '../WilsonSchoolComponent/WilsonSchoolComponent';


const WilsonContent = () => {
  return (
    <div className='contents'>
      <WilsonHeaderComponent></WilsonHeaderComponent>
      <WilsonAboutComponent></WilsonAboutComponent>
      <WilsonCareerComponent></WilsonCareerComponent>
      <WilsonProjectsComponent></WilsonProjectsComponent>
      <WilsonSchoolComponent></WilsonSchoolComponent>
    </div>
  )
}

export default WilsonContent;