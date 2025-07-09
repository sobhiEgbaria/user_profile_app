import FormInput from "./ui/FormInput";
import type { User } from "../App";

interface UserProp {
  user: User;
  setUserId: (prev: number) => number;
}

const Form = ({ user, setUserId }: UserProp) => {
  const handelSubmit = (e: React.MouseEventHandler<HTMLButtonElement>) => {
    e.preventDefault();
    setUserId((prev: number) => prev + 1);
  };
  return (
    <form
      onSubmit={handelSubmit}
      className="max-w-md mx-auto bg-white my-4 p-6 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-semibold mb-4">Edit User Profile</h2>
      <FormInput label="Name" type="text" name="name" value={user.name} />
      <FormInput label="Email" type="email" name="email" value={user.email} />
      <FormInput label="Age" type="number" name="age" value={user.age} />

      <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold py-2 px-4 rounded">
        Next User
      </button>
    </form>
  );
};

export default Form;
