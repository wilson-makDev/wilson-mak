import './SkillHighlightMenuComponent.css';

interface SkillHighlightMenuComponentProperties {
  onHover: (groupName: string) => void;
  hoverState: string;
}

const SkillHighlightMenuComponent = ({onHover = (groupName: string) => {groupName}, hoverState}: SkillHighlightMenuComponentProperties) => {
  const groups = ['Frameworks', 'Languages', 'Databases', 'Tools', 'Interpersonal'];

  return (
    <div className="highlight-container">
      {groups.map((group, index) => (
        <div className={hoverState === group ? "highlight-choice-selected" : "highlight-choice"} onMouseOver={() => {onHover(group)}} key={index}>{group}</div>
      ))}
    </div>
  )
}

export default SkillHighlightMenuComponent;