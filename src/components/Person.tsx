import { PersonProps } from "./person.types";
const Person = ({ name }: PersonProps) => {
  return (
    <div>
      <h2>
        {name.first} {name.last}
      </h2>
    </div>
  );
};

export default Person;
