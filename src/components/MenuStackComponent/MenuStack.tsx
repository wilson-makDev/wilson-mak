import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { motion } from "framer-motion";
import './MenuStack.css';

interface MenuItemProps {
  name: string;
  iconName: string;
  alt: string;
  current: boolean;
}

const MenuItem = ({name, iconName, alt, current}: MenuItemProps) => {
  const imgAddrFull = '/icons/' + iconName;
  
  return (<div>
    <span className={current ? 'selectedMenuItem menuItem' : 'menuItem'}>
      <img 
        src={imgAddrFull} alt={alt}
        width="20rem"
        height="20rem"  
      >
      </img>
      <text>{name}</text>
    </span>
  </div>)
}

const MenuStack = () => {
  const currentItem = 'about';

  const options : {name: string, iconName: string, alt: string}[] = [
    {name: 'Home', iconName: 'home.png', alt: 'Home'},
    {name: 'About', iconName: 'about.png', alt: 'About'},
    {name: 'Career', iconName: 'career.png', alt: 'Career'},
    {name: 'Projects', iconName: 'projects.png', alt: 'Projects'},
    {name: 'School', iconName: 'school.png', alt: 'School'},
    // {name: 'Hobbies', iconName: 'hobbies.png', alt: 'Hobbies'},
    {name: 'Resume', iconName: 'resume.png', alt: 'Resume'}
  ];

  return (
    <div className='menu-stack-container'
      >
      {options.map((option, i) => {
        return (
          <motion.a key={i}
                    whileHover={{scale: 1.2}}
                    style={{marginBottom: 10}}
                    className='menu-item'
                    >
            <MenuItem name={""} 
                      iconName={option.iconName} 
                      alt={option.alt} 
                      current={option.name.toLowerCase() === currentItem.toLowerCase()}
                    ></MenuItem>
          </motion.a>
        )
      })}
    </div>
  )
}

export default MenuStack;

//In mobile resolution, just show icons for each menu item