import Footer from '../components/Footer'

export default function Layout({children}) {
	return (
		<>
			<div className='flex min-h-screen'>
				<main className='m-auto w-1/3'>
					{children}
				</main>
			</div>
			<Footer />
		</>
	)
}
