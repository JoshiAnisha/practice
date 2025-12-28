import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password is too long!")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
        "Password must contain uppercase, lowercase, number, and special character"
      ),
    confirmPassword: z.string().min(8, " password didn't matched"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
``;
export function Form1() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };
  ``;

  console.log(watch("email"));

  return (
    <div className="min-h-screen  flex justify-center items-center">
      <div className="box shadow-xl p-8 rounded-xl w-80">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            {...register("email")}
            type="text"
            placeholder="email"
            className="border border-gray-300 rounded-md p-2 mb-4"
          />
          {errors.email && (
            <div className="text-orange-600"> {errors.email.message}</div>
          )}
          <input
            {...register("password")}
            type="password"
            placeholder="password"
            className="border border-gray-300 rounded-md p-2 mb-4"
          />
          {errors.password && (
            <div className="text-orange-600">{errors.password.message}</div>
          )}
          <input
            {...register("confirmPassword")}
            type="password"
            placeholder="confirm password"
            className="border border-gray-300 rounded-md p-2 mb-4"
          />
          {errors.confirmPassword && (
            <div className="text-orange-600">
              {errors.confirmPassword.message}
            </div>
          )}
          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-green-700 text-white py-2 rounded-md hover:cursor-pointer hover:bg-gray-500"
          >
            {isSubmitting ? "submitting.." : "Submit..."}
          </button>
        </form>
      </div>
    </div>
    // abababba
  );
}
