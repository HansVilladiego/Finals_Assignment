import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

type ContactValues = { sender: string; message: string };

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactValues>();

  const onSubmit: SubmitHandler<ContactValues> = (data) => {
    alert(`Message from ${data.sender}: ${data.message}`);
    reset();
  };

  return (
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
  );
}