import { z } from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";


// Validation with Zod library - start Schema
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

const MultiFieldFormWithReactHook = () => {

  // React Hook Form logic   - useForm with resolver and default values
  const {
    register,
    handleSubmit,
    formState:{errors}, // εδω μέσα περιέχονται τα σφάλματα απο το Schema
    reset,
    watch,  // real time επιστρέφει live τα δεδομένα που είναι στις φόρμες / δεν χρειαζόμαστε κανένα state γιατί έχει δικό του state management
  } = useForm<FormValues>({
    // με τι θα κάνεις validate? - resolver: ?
    resolver: zodResolver(formSchema),
    // ποιο είναι το default value?
    defaultValues: initialValues
  })

  // submit μονο ετσι εγινε. η useForm έχει δικό της state τα κάνει μονη της
  const onSubmit = (data: FormValues) => {
    console.log(data);
    reset()
  }

  const onClear = () => {
    reset()
  }

  const watchedValues = watch() // αυτό είναι το state (περίπου) / σε σχέση με τα state, δεν προκαλούν rerender, απλά αλλάζουν τιμές

  return (
    <>
      <h1 className="text-center mt-4">Multi Field form with React Hook</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-4 flex flex-col mx-auto w-75">
        <input
          {...register("name")} // name="name" αυτό λέμε εδώ στο context του hook
          placeholder="Name"
          className="px-4 py-2 border border-gray-300 rounded-lg"
        />
        {errors?.name && (
          <p className="text-cf-dark-red">{errors.name.message}</p>
        )}
        <input
          {...register("email")} // name="email" αυτό λέμε εδώ στο context του hook
          type="email"
          name="email"
          // value={values.email}
          // onChange={handleChange}
          placeholder="Email"
          className="px-4 py-2 border border-gray-300 rounded-lg"
        />
        {errors?.email && (
          <p className="text-cf-dark-red">{errors.email.message}</p>
        )}
        <textarea
          {...register("message")} // name="message" αυτό λέμε εδώ στο context του hook
          className="px-4 py-2 border border-gray-300 rounded-lg"
          placeholder="Type your message"
          name="message"
          // value={values.message}
          // onChange={handleChange}
          minLength={5}
        >
        </textarea>
        {errors?.message && (
          <p className="text-cf-dark-red">{errors.message.message}</p>
        )}
        <div className="flex justify-between gap-4">
          <button
            type="submit"
            className="bg-cf-dark-red text-white px-4 py-2 border border-gray-300 rounded-lg"
            // onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            type="button"
            className="bg-gray-200 px-4 py-2 border border-gray-300 rounded-lg"
            onClick={onClear}
          >
            Clear
          </button>
        </div>
          <div className="flex flex-col border-t pt-4 space-y-4">
            <h2 className="font-semibold underline">Live Data</h2>
            <p><strong>Name:</strong> {watchedValues.name}</p>
            <p><strong>Email:</strong> {watchedValues.email}</p>
            <p><strong>Message:</strong> {watchedValues.message}</p>
          </div>
      </form>
    </>
  )
}

export default MultiFieldFormWithReactHook