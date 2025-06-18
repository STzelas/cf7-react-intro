import {useState} from "react";
import type {FormValues} from "../../types/FormTypes.ts";

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
}

const MultiFieldForm = () => {

  const [values, setValues] = useState<FormValues>(initialValues);
  const [submissions, setSubmissions] = useState<FormValues | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues(
      (prev) => ({...prev, [name]: value})
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmissions(values)
  }

  const handleClear = () => {
    setValues(initialValues)
    setSubmissions(null)
  }

  return (
    <>
      <h1 className="text-center mt-4">Multi Field form</h1>
      <form className="mt-10 space-y-4 flex flex-col mx-auto w-75">
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Name"
          className="px-4 py-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
          className="px-4 py-2 border border-gray-300 rounded-lg"
          required
        />
        <textarea
          className="px-4 py-2 border border-gray-300 rounded-lg"
          placeholder="Type your message"
          name="message"
          value={values.message}
          onChange={handleChange}
          required
          minLength={5}
        >
        </textarea>
        <div className="flex justify-between gap-4">
          <button
            type="submit"
            className="bg-cf-dark-red text-white px-4 py-2 border border-gray-300 rounded-lg"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            type="button"
            className="bg-gray-200 px-4 py-2 border border-gray-300 rounded-lg"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>

        {
          submissions && ( // truthy κ data -> data
            <div className="flex flex-col border-t pt-4 space-y-4">
              <h2 className="font-semibold underline">Submitted Data</h2>
              <p><strong>Name:</strong> {submissions.name}</p>
              <p><strong>Email:</strong> {submissions.email}</p>
              <p><strong>Message:</strong> {submissions.message}</p>
            </div>
          )
        }

      </form>
    </>
  )
}

export default MultiFieldForm