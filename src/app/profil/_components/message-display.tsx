type MessageDisplayProps = {
  message: string;
};

export function MessageDisplay({ message }: MessageDisplayProps) {
  if (!message) return null;

  const isError = message.includes("Fel");

  return (
    <div
      className={`p-4 rounded-lg text-center ${
        isError ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"
      }`}
    >
      {message}
    </div>
  );
}
