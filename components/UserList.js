import UserItem from './UserItem'

export default function UserList({result}) {
	return (
		<div className='border rounded-[8px] w-full space-y-3 pb-10'>
			<p className='text-center p-[20px]'>Hasil Pencarian : <span className='font-bold'>{result?.search}</span></p>
			{result?.users.map((user, index) => (
				<UserItem key={index} user={user} />
			))}
		</div>
	)
}