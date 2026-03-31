import { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import SubmissionModal from "./SubmissionModal";

type ContactValues = { sender: string; message: string };

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactValues>();
  const [submitted, setSubmitted] = useState<ContactValues | null>(null);

  const onSubmit: SubmitHandler<ContactValues> = (data) => {
    setSubmitted(data);
    reset();
  };

  return (
    <>
      {submitted && (
        <SubmissionModal
          sender={submitted.sender}
          message={submitted.message}
          onClose={() => setSubmitted(null)}
        />
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: "500px", margin: "2rem auto", display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <div>
          <label>Your Name</label>
          <input
            {...register("sender", { required: "Name is required" })}
            placeholder="Enter your name"
            style={{ display: "block", width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
          {errors.sender && <p style={{ color: "red" }}>{errors.sender.message}</p>}
        </div>

        <div>
          <label>Message</label>
          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Write your message..."
            rows={4}
            style={{ display: "block", width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
          {errors.message && <p style={{ color: "red" }}>{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          style={{ padding: "0.75rem", background: "#222", color: "white", cursor: "pointer" }}
        >
          Send Message
        </button>
      </form>
    </>
  );
}