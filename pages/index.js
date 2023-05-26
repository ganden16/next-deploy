import Head from 'next/head';
import {useState} from 'react';
import Button from '../components/Button';
import Form from '../components/Form';
import Header from '../components/Header';
import UserList from '../components/UserList';
import axios from 'axios';

export default function Home() {
	const [isLoading, setIsLoading] = useState(false)
	const [search, setSearch] = useState("")
	const [result, setResult] = useState(null)

	const onSearchSubmit = (e) => {
		e.preventDefault();
		if(search) {
			setIsLoading(true)
			axios.get(`https://api.github.com/search/users?q=${search}&per_page=20`)
				.then(res => res.data)
				.then(data => {
					const users = data.items
					const searchRes = {search, users}
					setResult(searchRes)
				}).finally(() => {
					setIsLoading(false)
				})
		}
	}

	return (
		<div className='space-y-5 py-10'>
			<Head>
				<title>Cari Orang Github</title>
			</Head>
			<Header />
			<form className='flex place-self-center space-x-3' onSubmit={onSearchSubmit}>
				<Form value={search} onChange={(e) => setSearch(e.target.value)} />
				<Button type='submit' isLoading={isLoading} />
			</form>
			{result && <UserList result={result} />}
		</div>
	)
}
