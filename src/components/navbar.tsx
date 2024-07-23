import { useTranslations } from "next-intl";
import Link from "next/link";
import LocalSwitcher from "./switcher";
export default function NavbarPage() {
    const navigate = useTranslations("Navigation");
    return (
        <div className="h-full w-full flex items-center justify-evenly">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Logo_of_Ministry_of_Education_and_Culture_of_Republic_of_Indonesia.svg/800px-Logo_of_Ministry_of_Education_and_Culture_of_Republic_of_Indonesia.svg.png"
                alt=""
                width={50}
                height={50}
            />
            <nav className="flex items-center p-5 justify-around w-[80%]">
                <Link href="/">{navigate("home")}</Link>
                <Link href="/">{navigate("gallery")}</Link>
                <Link href="/">{navigate("facility")}</Link>
                <Link href="/">{navigate("about")}</Link>
                <LocalSwitcher />
            </nav>
        </div>
    );
}
