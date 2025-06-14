import { useRef } from 'react';

const UncontrolledInput = () => {

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    alert(`Value: ${inputRef.current?.value}`);
  }

  return (
    <>
      <div className="text-center mt-12">
        <input
          type="text"
          ref={inputRef}
          // onChange={handleNameChange}
          className="border px-4 py-2"
        />
        <button
          className="bg-cf-dark-red text-white px-4 py-2 rounded ms-2"
          onClick={handleClick}
        >
          Show Value
        </button>
      </div>
    </>
  )
}

export default UncontrolledInput;