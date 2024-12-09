"use client";

import { UserType } from "@/app/api/user/type";
import Link from "next/link";
import { useEffect, useState } from "react";

const ViewUsers = () => {
	const [users, setUsers] = useState<UserType[]>([]);
	// const [reload, setReload] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [timers, setTimers] = useState<{ [key: string]: number }>({});

	//これをリポジトリ―に持っていけばよい
	useEffect(() => {
		const fetchUsers = async () => {
			setIsLoading(true);
			{
				const res = await fetch("/api/user/");
				const users = await res.json();
				setUsers(users);
			}
			setIsLoading(false);
		};
		fetchUsers();
	}, []);

	// タイマーをスタートする関数 １２０９
	const startTimer = (userId: string) => {
		setTimers((prevTimers) => ({
			...prevTimers,
			[userId]: 0, // 初期値として0秒からスタート
		}));
	};

	// const handleReload = () => {
	// 	setReload(!reload);
	// };

	useEffect(() => {
		const interval = setInterval(() => {
			setTimers((prevTimers) => {
				const updatedTimers: { [key: string]: number } = {};
				Object.keys(prevTimers).forEach((userId) => {
					updatedTimers[userId] = prevTimers[userId] + 1;
				});
				return updatedTimers;
			});
		}, 1000);

		return () => clearInterval(interval); // クリーンアップ
	}, []);

	return (
		<div className="w-1/2 flex flex-col ">
			<div className="flex justify-between mb-5">
				<p className="text-center font-bold text-3xl">Supabase: User table</p>
				{/* {isLoading ? (
					<p>Reloading...</p>
				) : (
					<button
						onClick={handleReload}
						type="button"
						className="bg-blue-500 text-white px-2 py-1"
					>
						Reload
					</button>
				)} */}
			</div>
			{/* <div className="flex flex-col items-center justify-start">
				{users.length > 0 && (
					<div className="flex border-2 w-full px-2 py-1">
						<p className="text-sm text-gray-800">
							id{users[users.length - 1].id}
						</p>
						<p className="text-sm text-gray-800">
							名前{users[users.length - 1].name}
						</p>
						<p className="text-sm text-gray-800">
							メール{users[users.length - 1].email}
						</p>
					</div>
				)}
			</div> */}

			<div className="flex flex-col items-center justify-start h-64 overflow-y-scroll border">
				{users.map((user) => (
					<div key={user.id} className="flex border-b w-full px-2 py-1">
						<p className="text-sm text-gray-800">id: {user.id}</p>
						<p className="text-sm text-gray-800 ml-4">名前: {user.name}</p>
						<p className="text-sm text-gray-800 ml-4">メール: {user.email}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ViewUsers;
