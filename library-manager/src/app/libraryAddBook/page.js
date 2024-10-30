
import AddBook from "../components/AddBook";
export const dynamic = 'force-dynamic'

    export default async function LibraryPage() {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen p-8 bg-blue-900 ">
                <AddBook />
            </div>
        );
    }
