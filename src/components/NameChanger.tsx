import {useEffect, useState} from "react";

const NameChanger = () => {
  const [name, setName] = useState("");

  // Έχουμε ενα setup και τα depoendancies
  // useEffect(setup, deps?);

  // const setup = () => {
  //   document.title = name ? `Hello, ${name}` : "Hello, Stranger"
  // }
  //
  // // Καλύτερα να έχουμε dependancy αλλιώς μπορεί
  // // να έχει infinite loop
  // useEffect(setup, [name])

  // Το πάνω είναι ίδιο με το απο κάτω απλά το setup το έκανε ξεχωριστά
  useEffect(() => {
    document.title = name ? `Hello, ${name}!` : "Hello, Stranger"
  }, [name])

  useEffect(() => {
    const id: number = setInterval( () => console.log("tick"), 1000)
    return() =>  clearInterval(id)
  }, [])

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