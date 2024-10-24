import LibraryTable from "@/app/components/LibraryTable";
import Disconnect from "@/app/components/Diconnect";

export default async function LibraryPage() {
    let data = await fetch(`http://localhost:3000/api/library`);
    let posts = await data.json()
    return (
        <div className="flex flex-col justify-center items-center min-h-screen p-8 bg-blue-900 ">
           <Disconnect/>
           <LibraryTable books={posts}/>
        </div>
    );
}
