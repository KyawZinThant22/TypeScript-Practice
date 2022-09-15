type GreetProp = {
  name: string;
  age: number;
  isLoggedIn: boolean;
};

const Greet = ({ name, age, isLoggedIn }: GreetProp) => {
  return (
    <div>
      {isLoggedIn ? (
        <p>
          Hello My name is {name} I am {age} years old
        </p>
      ) : (
        <p>Welcome Guest</p>
      )}
    </div>
  );
};

export default Greet;
