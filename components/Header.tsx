"use client";
import { chart, home, login } from "@/utils/Icons";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
	const menu = [
		{ name: "Home", icon: home, link: "/" },
		{ name: "My Stats", icon: chart, link: "/stats" }
	];
	const pathname = usePathname();
	const router = useRouter();
	return (
		<header className="min-h-[8vh] px-[10rem] xl:px-[15rem] border-b-2 flex items-center">
			<nav className="flex-1 flex items-center justify-between">
				<Link href="/" className="flex items-center gap-2">
					<Image src="/icon--logo-lg.svg" alt="logo" width={50} height={50} />
					<h1 className="text-3xl font-bold text-rose-400">BrainBattle</h1>
				</Link>
				<ul className="flex items-center gap-4">
					{menu.map((item, index) =>
						<li key={index}>
							<Link
								href={item.link}
								className={`py-1 px-6 flex items-center gap-2 text-lg leading-none text-gray-400 rounded-lg ${pathname ===
								item.link
									? "bg-rose-400 border-2 border-rose-400 text-rose-100"
									: ""}`}
							>
								<span className="text-2xl text-white">
									{item.icon}
								</span>
								<span
									className={`font-bold uppercase ${pathname === item.link
										? "text-rose-100"
										: "text-gray-400"}`}
								>
									{item.name}
								</span>
							</Link>
						</li>
					)}
				</ul>
				<div>
					<SignedIn>
						<UserButton
							appearance={{
								elements: {
									userButtonAvatarBox:
										"w-12 h-12 border-2 border-gray-300 rounded-full"
								}
							}}
						/>
					</SignedIn>
					<SignedOut>
						<Button
							className="py-5 bg-rose-400 flex items-center gap-2 font-semibold text-lg rounded-lg hover:bg-rose-500"
							onClick={() => router.push("/sign-in")}
						>
							{login}
							<span className="ml-2">Login / Sign Up</span>
						</Button>
					</SignedOut>
				</div>
			</nav>
		</header>
	);
};

export default Header;
