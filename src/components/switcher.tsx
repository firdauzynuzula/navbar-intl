"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import { useLocale } from "next-intl";

export default function LocalSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();
    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(`/${nextLocale}`);
        });
    };
    return (
        <select
            defaultValue={localActive}
            className=" bg-transparent cursor-pointer hover:bg-gray-200 transition-colors"
            onChange={onSelectChange}
            disabled={isPending}
        >
            <option value="en">EN</option>
            <option value="id">ID</option>
        </select>
    );
}
