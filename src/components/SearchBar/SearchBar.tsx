import React from 'react'
import { useSearch } from '../../store/search.store'
import styles from './SearchBar.module.css'

const SearchBar = () => {
	const { inputValue, setInputValue } = useSearch()
	return (
		<div className={styles.wrapper}>
			<input
				className={styles.input}
				type='search'
				placeholder='Search in notes...'
				value={inputValue}
				onChange={e => setInputValue(e.target.value.toLowerCase())}
			/>
		</div>
	)
}

export default SearchBar
