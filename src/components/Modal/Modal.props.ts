export interface IModalProps {
	setModalMode: React.Dispatch<React.SetStateAction<boolean>>
	deleteNote: (id: string) => Promise<void>
	noteId: string
}
