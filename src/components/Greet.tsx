type GreetProp = {
  name: string;
};

const Greet = ({ name }: GreetProp) => {
  return <div>Hello My name is {name} I am 18 years old</div>;
};

export default Greet;
