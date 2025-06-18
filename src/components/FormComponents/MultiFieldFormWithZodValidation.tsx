import {useState} from "react";
import { z } from "zod";
import type {FormErrors} from "../../types/FormTypes.ts";


// Validation with Zod library
const formSchema = z.object({
  name: z.string().trim().nonempty("Name is required").min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .trim()
    .nonempty("Email is required")
    .regex(/.+@.+\..+/, "Email must be a valid email address"),
  message: z
    .string()
    .trim()
    .nonempty("Message is required")
    .min(5, "Message must be at least 5 characters"),
})

type FormValues = z.infer<typeof formSchema>;

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
}

const MultiFieldFormWithZodValidation = () => {

  const [values, setValues] = useState<FormValues>(initialValues);
  const [submissions, setSubmissions] = useState<FormValues | null>(null);
  const [errors, setErrors] = useState<FormErrors>();

  const validateForm = () => {

    const result = formSchema.safeParse(values);
    // {success: true, data: validatedData} αν έχουμε success
    // {success: false, error: errors}      αν όχι

    // ZOD docs
    if (!result.success) {
      console.log(result.error.issues)
      console.log(result)
      const newErrors: FormErrors = {}

      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof FormValues;
        newErrors[fieldName] = issue.message
      })
      setErrors(newErrors);
      return false;   // success false
    }

    setErrors({})
    return true // success true άρα δεν έχει errors
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

    const isValid = validateForm()

    if (isValid) {
      setSubmissions(values)
      setValues(initialValues)
    }
  }

  const handleClear = () => {
    setValues(initialValues)
    setErrors({})
    setSubmissions(null)
  }

  return (
    <>
      <h1 className="text-center mt-4">Multi Field form with Zod Validation</h1>
      <form className="mt-10 space-y-4 flex flex-col mx-auto w-75">
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Name"
          className="px-4 py-2 border border-gray-300 rounded-lg"
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

export default MultiFieldFormWithZodValidation