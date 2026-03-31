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

      <div className="card">
        <h2 style={{ fontSize: "1.6rem", marginBottom: "1.5rem" }}>Send Me a Message</h2>
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          <div>
            <label>Your Name</label>
            <input
              {...register("sender", { required: "Name is required" })}
              placeholder="e.g. Juan Dela Cruz"
            />
            {errors.sender && <p style={{ color: "#e74c3c", fontSize: "0.85rem", marginTop: "0.3rem" }}>{errors.sender.message}</p>}
          </div>

          <div>
            <label>Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Write your message here..."
              rows={5}
            />
            {errors.message && <p style={{ color: "#e74c3c", fontSize: "0.85rem", marginTop: "0.3rem" }}>{errors.message.message}</p>}
          </div>

          <button type="submit">Send Message 🚀</button>
        </form>
      </div>
    </>
  );
}