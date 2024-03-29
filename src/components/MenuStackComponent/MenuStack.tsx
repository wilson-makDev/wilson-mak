import { motion } from "framer-motion";
import './MenuStack.scss';

interface MenuItemProps {
  name: string;
  iconName: string;
  current: boolean;
}

const MenuItem = ({name, iconName, current}: MenuItemProps) => {
  const imgAddrFull = '/icons/' + iconName;
  
  return (<div>
    <span className={current ? 'selectedMenuItem menuItem' : 'menuItem'}>
      <img 
        src={imgAddrFull} alt={name}
        width="20rem"
        height="20rem"  
      >
      </img>
    </span>
  </div>)
}

const MenuStack = () => {
  const currentItem = 'about';

  const options : {name: string, iconName: string}[] = [
    {name: 'Home', iconName: 'home.png'},
    {name: 'Career', iconName: 'career.png'},
    {name: 'Projects', iconName: 'projects.png'},
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
                    href={'#' + option.name.toLowerCase()}
                    >
            <MenuItem name={option.name} 
                      iconName={option.iconName} 
                      current={option.name.toLowerCase() === currentItem.toLowerCase()}
                    ></MenuItem>
          </motion.a>
        )
      })}
    </div>
  )
}

export default MenuStack;