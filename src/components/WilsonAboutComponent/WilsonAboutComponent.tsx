import './WilsonAboutComponent.css';

interface TechSnapshotProperties {
  name: string;
  rank: number;
}

const WilsonAboutComponent = () => {
  const techsUsed : TechSnapshotProperties[] = [
    {name: "Angular", rank: 1},
    {name: "React", rank: 2},
    {name: "Node.js", rank: 3},
    {name: "Express", rank: 4},
    {name: "MongoDB", rank: 5},
    {name: "MySQL", rank: 6},
    {name: "Python", rank: 7},
    {name: "Java", rank: 8},
    {name: "C++", rank: 9},
    {name: "C", rank: 10},
    {name: "JavaScript", rank: 11},
    {name: "TypeScript", rank: 12},
    {name: "Git", rank: 13},
    {name: "Docker", rank: 14},
    {name: "AWS", rank: 15},
  ];


  return (
    <div>
        <h1>About Me</h1>
        <div>
          Hi! My Name is <b>Wilson</b> and I am a <b>Software Developer</b> in Toronto, Canada.
          My journey in software development started back in the small city of North Bay - shout out to North Bay - where I started learning how to code over many highschool summers starting in 2015.
          Over those summers I realized the unlimited potential to help that came from building digital solutions to real world problems, and so I was fixed on the path to be a software developer 🤩

          <br></br>
          <br></br>

          Now, I have completed my degree at the <b>University of Toronto</b> in <b>Computer Science</b> and leveled up all my developer skills from projects and co-op work. 
          My main focus is creating awesome web applications from <b>front-end to back-end</b> and everything in between. 
          To be able to have control of all aspects of a tech-stack to fine-tune any layer to optimize for the solution I am striving for is what I love about <b>full-stack software development</b>.
        </div>
        <br></br>
        <br></br>
        <div>
          Snapshot of the the technologies I use:
          <br></br>
          Angular | React | Node.js | Express | MongoDB | MySQL | Python | Java | C++ | C |  JavaScript | TypeScript | Git | Docker | AWS
        </div>
    </div>
  )
}

export default WilsonAboutComponent;