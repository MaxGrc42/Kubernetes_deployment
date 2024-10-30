// /components/AvatarGrid.js
import Link from 'next/link';
import Image from 'next/image';

export default function AvatarGrid({ users }) {
  console.log(users);
    if (users.data.length === 0) {
      return <p>Aucun utilisateur trouvé</p>;
    }
    return (

      <div className="w-full max-w-4xl p-6 bg-white/80 rounded-lg shadow-xl relative z-10"> {/* Conteneur avec fond blanc semi-transparent */}
        <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">Sélectionnez un Avatar</h1>

        <div className="grid grid-cols-3 gap-6 overflow-y-scroll max-h-96 p-4">
          {users.data.map((user) => (
            <Link
              key={user.id}
              href={`/library?userId=${user.id}`}
              className="flex flex-col items-center group"
            >
              <div className="relative w-24 h-24 mb-2 rounded-full bg-gray-200 shadow-md group-hover:shadow-lg transition-shadow">
                <Image
                  src={user.base64_image 
                    ? `data:image/jpeg;base64,${user.base64_image}` 
                    : '/avatar.png'}
                  alt={user.name}
                  fill={true}
                  className="rounded-full object-cover"
                />
              </div>
              <p className="text-center text-gray-900 font-medium group-hover:text-blue-600 transition-colors">
                {user.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    );
  }