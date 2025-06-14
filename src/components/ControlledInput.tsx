import { useState } from 'react';

const ControlledInput = () => {

  const [name, setName] = useState("")

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  return (
    <>
      <div className="text-center">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="border px-4 py-2"
        />
      </div>
    </>
  )
}

export default ControlledInput;