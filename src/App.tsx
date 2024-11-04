import { useForm } from "react-hook-form";
import StyledInput from "./components/StyledInput";
import cities from "./cities";

interface FormValues {
  name: string;
  email: string;
  phone: number;
  city: string;
}

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="container p-2 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/2 mx-auto mt-4 p-10 flex flex-col items-start gap-3 bg-white shadow-md rounded-lg"
      >
        <h1 className="text-2xl font-light text-gray-600 uppercase">
          React Hook Form
        </h1>

        <StyledInput
          type="text"
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="text-red-500 text-sm -mt-2">{errors.name.message}</p>
        )}

        <StyledInput
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Regular expression for validating email format
              message: "Please enter a valid email address",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm -mt-2">{errors.email.message}</p>
        )}

        <StyledInput
          type="number" // Use text type to handle phone number as string
          placeholder="Phone"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^\d{11}$/, // Regex for exactly 11 digits
              message: "Phone number must be exactly 11 digits",
            },
          })}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm -mt-2">{errors.phone.message}</p>
        )}

        <select
          className="block w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          {...register("city", { required: "City is required" })}
          defaultValue="" // Default value is set to empty string
        >
          <option value="" disabled>
            Select a city
          </option>
          {cities.map((city) => (
            <option key={city.value} value={city.value}>
              {city.label}
            </option>
          ))}
        </select>
        {errors.city && (
          <p className="text-red-500 text-sm -mt-2">{errors.city.message}</p>
        )}

        <button
          className="bg-blue-600 px-4 py-2 text-white rounded-md text-sm shadow-md hover:bg-blue-500 hover:shadow-lg transition-transform transform active:scale-95 duration-200"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
