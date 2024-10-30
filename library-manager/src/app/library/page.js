import LibraryTable from "@/app/components/LibraryTable";
import Disconnect from "@/app/components/Diconnect";
import GoToNewPage from "@/app/components/GoToNewPage";
export const dynamic = 'force-dynamic'

export default async function LibraryPage() {
        let data = await fetch(`http://localhost:3000/api/library`);
        if (!data) return <div>Failed to fetch</div>;
        let posts = await data.json()
        let user_id = posts.data[0].id_user
        return (
            <div className="flex flex-col justify-center items-center min-h-screen p-8 bg-blue-900 ">
                <div className="flex justify-center items-center">
                    <GoToNewPage user_id={user_id}/>
                    <Disconnect/></div>
                <LibraryTable books={posts}/>
            </div>
        );
}
