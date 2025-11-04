export default function AchivementStar({ color = "#FFD700", size = 16 }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            viewBox="0 0 24 24"
            width={size}
            height={size}
        >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.896 1.48 8.298L12 18.897l-7.416 4.603 1.48-8.298L0 9.306l8.332-1.151z" />
        </svg>
    );
}
