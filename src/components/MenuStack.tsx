import { Stack } from "react-bootstrap";

const MenuStack = () => {

  const options = ['Home', 'Work', 'Experience', 'Projects', 'School', 'Courses', 'Hobbies', 'Resume'];

  return (
    <Stack>
      {options.map((option, i) => {
        return <div key={i}>{option}</div>
      })}
    </Stack>
  )
}

export default MenuStack;