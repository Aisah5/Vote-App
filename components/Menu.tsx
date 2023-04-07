import Image from "next/image"
import Button from "./Button";
import Logo from '/assets/fotos.svg';

export default function Menu() {
    return (
    <div className="flex justify-between px-10 py-3">
        {/* <Image
        src={"/assets/fotos.svg"}
        width={150}
        height={150}
        alt="Logo"
        />
        <img src="/assets/fotos.svg" alt="logo" width="300px"/> */}
        <text font-bold>Voting</text>
        <Button type="primary" text="Login"/>
    </div>
);
}