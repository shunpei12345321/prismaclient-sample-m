import Link from "next/link";
import ViewUsers from "./components/ViewUsers";
import NewUser from "./components/NewUser";

export default function Home() {
	return (
		<div className="container m-auto">
			<div className="flex h-screen justify-between p-10">
				<div className="flex flex-col w-full items-center justify-center">
					<NewUser />
					{/* <Link href="/user">[new user]</Link> */}
				</div>
				<ViewUsers />
			</div>
		</div>
	);
}
