import {useEffect, useState} from "react";

const NameChanger = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = name ? `Hello, ${name}!` : "Hello, Stranger"
  }, [name])

  /**
   * Στο input θέλουμε να πάρουμε το value
   * όταν γίνει Change, όταν αλλάξει δηλαδή το μέσα
   * να αποτυπωθεί και πάνω (στο h1)
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  return (
    <>
      <h1 className="text-center text-xl pt-4">Hello, {name || "Guest"}</h1>
      <div className={"text-center mt-4"}>
        <input
          type={"text"}
          value={name}
          onChange={handleChange}
          className={"border px-4 py-2"}
        />
      </div>

    </>
  )
}

export default NameChanger