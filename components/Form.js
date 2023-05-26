export default function Form({value, onChange}) {
	return (
		<input placeholder='Cari user di github'
			className='border border-zinc-100 p-[20px] rounded-[8px] w-full'
			value={value}
			onChange={onChange}
		/>
	)
}
