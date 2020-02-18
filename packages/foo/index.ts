import bar from "bar";
import nested from "nested-a";

const foo = async () => {
  await bar();
  console.log(nested);
};

foo();
