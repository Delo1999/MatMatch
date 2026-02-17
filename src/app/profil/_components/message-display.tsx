type MessageDisplayProps = {
  message: string;
};

export function MessageDisplay({ message }: MessageDisplayProps) {
  if (!message) return null;

  const isError = message.includes("Fel");

  return (
    <div
      className="p-4 text-center text-sm"
      style={{
        borderRadius: "1.25rem",
        background: isError ? "rgba(254,242,242,1)" : "rgba(204,213,174,0.4)",
        color: isError ? "rgba(185,28,28,0.8)" : "rgba(1,71,46,0.7)",
        border: `1px solid ${isError ? "rgba(185,28,28,0.2)" : "rgba(163,177,138,0.3)"}`,
      }}
    >
      {message}
    </div>
  );
}
