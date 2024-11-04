import { InputHTMLAttributes, forwardRef } from "react";

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
}

const StyledInput = forwardRef<HTMLInputElement, StyledInputProps>(
  ({ type, placeholder, ...rest }, ref) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className="outline-none border border-gray-300 rounded-lg p-3 w-full text-sm transition-colors duration-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-gray-50 placeholder-gray-400"
        ref={ref} // Forward the ref to the input element
        {...rest} // Spread remaining props
      />
    );
  }
);

export default StyledInput;
