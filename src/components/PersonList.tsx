import { Name } from "../components/person.types";

type personListProps = {
  names: Name[];
};

const PersonList = ({ names }: personListProps) => {
  return (
    <div>
      {names.map((name, idx) => (
        <h2>
          {name.first} {name.last}
        </h2>
      ))}
    </div>
  );
};

export default PersonList;
