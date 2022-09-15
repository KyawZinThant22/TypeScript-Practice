type GreetProp = {
  name: string;
  age?: number;
  isLoggedIn: boolean;
};

const Greet = ({ name, age = 18, isLoggedIn }: GreetProp) => {
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
