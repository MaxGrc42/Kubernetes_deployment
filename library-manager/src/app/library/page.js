import LibraryTable from "@/app/components/LibraryTable";
import Disconnect from "@/app/components/Diconnect";
import GoToNewPage from "@/app/components/GoToNewPage";

export default async function LibraryPage() {
    let data = await fetch(`http://localhost:3000/api/library`);
    let posts = await data.json()
    return (
        <div className="flex flex-col justify-center items-center min-h-screen p-8 bg-blue-900 ">
            <div className="flex justify-center items-center">
                <GoToNewPage url="/libraryAddBook" text="Add a book"/>
                <Disconnect/></div>
            <LibraryTable books={posts}/>
        </div>
    );
}
