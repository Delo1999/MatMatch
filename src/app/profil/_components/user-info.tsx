type UserInfoProps = {
  user: {
    name: string | null;
    email: string;
  };
};

export function UserInfo({ user }: UserInfoProps) {
  const displayName =
    (user.name || user.email)?.charAt(0).toUpperCase() +
    (user.name || user.email)?.slice(1);

  return (
    <div className="text-center">
      <div
        className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center"
        style={{ background: "#01472e" }}
      >
        <span
          className="uppercase font-bold text-xl"
          style={{ color: "#ccd5ae" }}
        >
          {(user.name || user.email)?.charAt(0).toUpperCase()}
        </span>
      </div>
      <h3
        className="leading-[0.85] tracking-[-0.03em]"
        style={{
          fontFamily: "var(--font-anton), sans-serif",
          fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
          color: "#01472e",
        }}
      >
        HEJ, {displayName?.toUpperCase()}
      </h3>
      <p className="text-sm mt-2" style={{ color: "rgba(1,71,46,0.5)" }}>
        Din personliga matassistent
      </p>
    </div>
  );
}
