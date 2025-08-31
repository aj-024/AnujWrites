import React, { useId } from 'react';

function Select(
  {
    options,
    label,
    className,
    ...props
  },
  ref
) {
  const id = useId();

  return (
    <div className="w-full mb-4">
      {label && (
        <label htmlFor={id} className="block text-gray-700 font-medium mb-1">
          {label}
        </label>
      )}

      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200 border border-gray-300 w-full ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
