export const BookmarkIcon = ({
  className = "",
  size = 16,
}: {
  className?: string;
  size?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 256 256"
    className={className}
  >
    <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
      <path
        d="M 74.113 0 H 15.886 c -1.105 0 -2 0.895 -2 2 v 86 c 0 0.759 0.43 1.453 1.109 1.791 c 0.282 0.14 0.587 0.209 0.89 0.209 c 0.428 0 0.854 -0.138 1.208 -0.405 l 25.669 -19.432 c 1.324 -1.002 3.152 -1.002 4.476 0 l 25.668 19.432 c 0.606 0.458 1.418 0.533 2.098 0.196 c 0.68 -0.338 1.109 -1.032 1.109 -1.791 V 2 C 76.113 0.895 75.218 0 74.113 0 z"
        fill="currentColor"
        stroke="none"
      />
    </g>
  </svg>
);
