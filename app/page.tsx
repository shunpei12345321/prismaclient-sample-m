import Link from "next/link";
import ViewUsers from "./components/ViewProduct";
import ViewProduct from "./components/ViewProduct";
import NewProduct from "./components/NewProduct";

export default function Home() {
	return (
		<div className="container m-auto">
			<div className="flex h-screen justify-between p-10">
				<div className="flex flex-col w-full items-center justify-center">
					<NewProduct />
					{/* <Link href="/user">[new user]</Link> */}
				</div>
				<ViewProduct />
			</div>
		</div>
	);
}
