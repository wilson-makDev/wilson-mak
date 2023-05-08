
interface CourseProperties {
  name: string;
  courseCode: string;
  description: string;
  skills?: string[];
  category?: string;
}

const CourseComponentCard = ({name, courseCode, description, skills, category}: CourseProperties) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{courseCode}</h2>
      <p>{description}</p>
      <ul>
        {skills?.map((skill, i) => {
          return (
            <div key={i}>
              <p>{skill}</p>
            </div
          )
        })}
      </ul>
    </div>
  )
}

const WilsonSchoolComponent = () => {
  const courses : CourseProperties[] = [
    //Computer Science
    {name: 'Social Impact of Information Technology', courseCode: 'CSCDO3', description: '', skills: []},
    {name: 'Computability and Computational Complexity', courseCode: 'CSCC63', description: '', skills: []},
    {name: 'Algorithm Design and Analysis', courseCode: 'CSCC73', description: '', skills: []},
    {name: 'Social and Information Networks', courseCode: 'CSCC46', description: '', skills: []},
    {name: 'Introduction to Numerical Algorithms for Computational Mathematics', courseCode: 'CSCC37', description: '', skills: []},
    {name: 'Operating Systems', courseCode: 'CSCC69', description: '', skills: []},
    {name: 'Programming on the Web', courseCode: 'CSCC09', description: '', skills: []},
    {name: 'Principals of Programming Languages', courseCode: 'CSCC24', description: '', skills: []},
    {name: 'Engineering Large Software Systems', courseCode: 'CSCD01', description: '', skills: []},
    {name: 'Introduction to Databases', courseCode: 'CSCC43', description: '', skills: []},
    {name: 'Design and Analysis of Data Structures and Algorithms', courseCode: 'CSCB63', description: '', skills: []},
    {name: 'Introduction to Software Engineering', courseCode: 'CSCC01', description: '', skills: []},
    {name: 'Human-Computer Interaction', courseCode: 'CSCC10', description: '', skills: []},
    {name: 'Software Tools and System Programming', courseCode: 'CSCB09', description: '', skills: []},
    {name: 'Introduction to Databases and Web Applications', courseCode: 'CSCB20', description: '', skills: []},
    {name: 'Computer Organization', courseCode: 'CSCB58', description: '', skills: []},
    {name: 'Software Design', courseCode: 'CSCB07', description: '', skills: []},
    {name: 'Introduction to the Theory of Computation', courseCode: 'CSCB36', description: '', skills: []},

    //Mathematics and Statistics
    {name: 'Discrete Mathematics', courseCode: 'MATA67', description: '', skills: []},
    {name: 'Calculus I for Mathematical Sciences', courseCode: 'MATA31', description: '', skills: []},
    {name: 'Calculus II for Mathematical Sciences', courseCode: 'MATA37', description: '', skills: []},
    {name: 'Techniques of the Calculus of Several Variables I', courseCode: 'MATB41', description: '', skills: []},
    {name: 'Linear Algebra I for Mathematical Sciences', courseCode: 'MATA22', description: '', skills: []},
    {name: 'Linear Algebra II for Mathematical Sciences', courseCode: 'MATB24', description: '', skills: []},
    {name: 'Introduction to Probability', courseCode: 'STAB52', description: '', skills: []},

    //History
    {name: 'Ancient Mythology I: Mesopotamia and Egypt', courseCode: 'CLAA05', description: '', skills: []},
    {name: 'Ancient Mythology II: Greece and Rome', courseCode: 'CLAA06', description: '', skills: []},
    {name: 'The Ancient Mediterranean World', courseCode: 'HISA07', description: '', skills: []},
    {name: 'Between Two Empires: The World of Late Antiquity', courseCode: 'HISB09', description: '', skills: []},
    {name: 'History and Culture of the Roman World', courseCode: 'HISB11', description: '', skills: []},
  ];


  return (
    <div>
      <h1>Education</h1>
      {courses.map((course, i) => {
        return (
          <div key={i}>
            <CourseComponentCard name={course.name} courseCode={course.courseCode} description={course.description} skills={course.skills}></CourseComponentCard>
          </div>
        )
      })}
    </div>
  )
}

export default WilsonSchoolComponent;