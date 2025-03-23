import clsx from 'clsx'; // clsx kütüphanesi için
import { FileText, Archive, Search, Plus, Tag } from "lucide-react"; // Lucide-react ikonları

export default function Sidebar({
    notes,
    setSelectedNote,
    setViewArchived,
    setSearchQuery,
    setShowCreateNoteForm,
    viewArchived,
}) {
    const uniqueTags = [...new Set(notes.flatMap(n => n.tags))];

    return (
        <div className="w-1/4 p-6 border-r flex flex-col justify-between bg-gray-50 shadow-lg overflow-y-auto">
            <div>
                <div className="text-2xl font-bold text-center mb-6">Notes</div>
                <div className="space-y-5">

                    <button
                        onClick={() => { setViewArchived(false); setSelectedNote(null); }}
                        className={clsx("flex items-center w-full text-left px-4 py-3 rounded transition duration-200", {
                            'bg-gray-200': !viewArchived,
                            'hover:bg-gray-100': viewArchived
                        })}
                    >
                        <FileText className="w-5 h-5 mr-2" />
                        All Notes
                    </button>

                    <button
                        onClick={() => { setViewArchived(true); setSelectedNote(null); }}
                        className={clsx("flex items-center w-full text-left px-4 py-3 rounded transition duration-200", {
                            'bg-gray-200': viewArchived,
                            'hover:bg-gray-100': !viewArchived
                        })}
                    >
                        <Archive className="w-5 h-5 mr-2" />
                        Archived Notes
                    </button>

                    <div className="mt-4 relative flex items-center">
                        <Search className="absolute left-3 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search Notes"
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full p-3 pl-10 rounded border text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mt-6 space-y-2">
                        <div className="font-semibold text-gray-600">Tags:</div>
                        {uniqueTags.map(tag => (
                            <div
                                key={tag}
                                onClick={() => setSelectedNote(notes.find(note => note.tags.includes(tag)))}
                                className="flex items-center cursor-pointer hover:text-blue-600 px-2 py-1 rounded hover:bg-gray-200 transition duration-200"
                            >
                                <Tag className="w-4 h-4 text-gray-500 mr-2" />
                                <span className="text-gray-700">{tag}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <button
                    onClick={() => setShowCreateNoteForm(true)}
                    className="flex items-center justify-center w-full bg-blue-500 text-white py-3 rounded transition duration-300 hover:bg-blue-600"
                >
                    <Plus className="w-5 h-5 mr-2" />
                    Create New Note
                </button>
            </div>
        </div>
    );
}
