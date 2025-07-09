import FormInput from "./ui/FormInput";
const Form = () => {
  return (
    <form className="max-w-md mx-auto bg-white my-4 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Edit User Profile</h2>
      <FormInput label="Name" type="text" name="name" value="Leanne Graham" />
      <FormInput
        label="Email"
        type="email"
        name="email"
        value="Sincere@april.biz"
      />
      <FormInput label="Age" type="number" name="age" value="35" />

      <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold py-2 px-4 rounded">
        Next User
      </button>
    </form>
  );
};

export default Form;
