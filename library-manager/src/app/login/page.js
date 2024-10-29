import AvatarGrid from '../components/AvatarGrid';

  
  export default async function LoginPage() {
    let data = await fetch('http://localhost:3000/api/users')
    let posts = await data.json()
    return (
      <div className="flex flex-col justify-center items-center min-h-screen p-8 bg-blue-900 ">
        <AvatarGrid users={posts} />
      </div>
    );
  }

