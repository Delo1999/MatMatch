interface UserInfoProps {
  user: {
    name: string | null;
    email: string;
  };
}

export function UserInfo({ user }: UserInfoProps) {
  const displayName =
    (user.name || user.email)?.charAt(0).toUpperCase() +
    (user.name || user.email)?.slice(1);

  return (
    <div className="text-center">
      <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
        <span className="text-6xl">👨‍🍳</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-800">
        Hej, {displayName}!
      </h3>
      <p className="text-gray-600">Din personliga matassistent</p>
    </div>
  );
}
