import {useState} from "react";
import type {FormErrors, FormValues} from "../../types/FormTypes.ts";

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
}

const MultiFieldFormWithValidation = () => {

  const [values, setValues] = useState<FormValues>(initialValues);
  const [submissions, setSubmissions] = useState<FormValues | null>(null);
  const [errors, setErrors] = useState<FormErrors | null>(null);

  const validateForm = (values: FormValues): FormErrors => {
    const valErrors: FormErrors = {};
    if (!values.name.trim()) {
      valErrors.name = "Name is required";
    }
    if (!values.email.trim()) {
      valErrors.email = "Email is required";
    }
    if (!/.+@.+\..+/.test(values.email.trim())) {                   // simple email regEx
      valErrors.email = "Email must be a valid email address";
    }
    if (!values.email.trim() && !/.+@.+\..+/.test(values.email)) {  // simple email regEx
      valErrors.email = "Email is required and must be a valid email address";
    }
    if (!values.message.trim()) {
      valErrors.message = "Message is required";
    }
    if (values.message.length < 5) {
      valErrors.message = "Message must be at least 5 characters";
    }
    if (values.message.length < 5 && !values.message.trim()) {
      valErrors.message = "Message is required and must be at least 5 characters";
    }
    return valErrors;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues(
      (prev) => ({...prev, [name]: value})
    )
    setErrors(prevState => ({...prevState, [name]: undefined}))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const validationErrors = validateForm(values)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSubmissions(null)
      return
    }

    setSubmissions(values)
    setValues(initialValues)
    setErrors(null)
  }

  const handleClear = () => {
    setValues(initialValues)
    setErrors(null)
    setSubmissions(null)
  }

  return (
    <>
      <h1 className="text-center mt-4">Multi Field form with Validation</h1>
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
        {errors?.name && (
          <p className="text-cf-dark-red">{errors?.name}</p>
        )}
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
          className="px-4 py-2 border border-gray-300 rounded-lg"
          required
        />
        {errors?.email && (
          <p className="text-cf-dark-red">{errors?.email}</p>
        )}
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
        {errors?.message && (
          <p className="text-cf-dark-red">{errors?.message}</p>
        )}
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

export default MultiFieldFormWithValidation