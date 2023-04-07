interface Props {
    text: string;
    type: "primary" | "secondary";
    className?: string;
}

export default function Button(props: Props) {
    return (
    <button className={`bg-black px-3 py-2 text-white hover:bg-zinc-800"
        ${
            props.type === "secondary" &&
            "bg-black border-2 border-black text-white hover:text-white"
        }
        ${props.className}
    `}
    >
        {props.text}
    </button>
);
}