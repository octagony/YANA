export interface INote {
	text: string
	id: string
	date: string
}

export interface INotes {
	notes: INote[]
	setNotes: (notes: INote[]) => void
}
