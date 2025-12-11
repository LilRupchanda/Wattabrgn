import { Users, Heart } from 'lucide-react';

const communityMembers = [
  {
    id: '1',
    username: '@kicksarchive',
    avatar: '🔥',
    bio: 'Authentic sneakers only. Verified seller since 2019. No fakes, no BS.',
    followers: 2340,
    items: 156,
    image: 'https://images.unsplash.com/photo-1669671943625-e20799ee5f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHN0cmVldHdlYXJ8ZW58MXx8fHwxNzY1Mzg5OTA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '2',
    username: '@y2kqueen',
    avatar: '💕',
    bio: 'Living for the early 2000s aesthetic. Baby tees, low-rise everything.',
    followers: 892,
    items: 89,
    image: 'https://images.unsplash.com/photo-1763403063428-10184adc7be3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwdHNoaXJ0fGVufDF8fHx8MTc2NTM4OTkwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '3',
    username: '@vintagevault',
    avatar: '🧥',
    bio: 'Curating the finest vintage pieces. Sustainable fashion advocate.',
    followers: 1890,
    items: 234,
    image: 'https://images.unsplash.com/photo-1760533091973-1262bf57d244?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwamFja2V0JTIwZmFzaGlvbnxlbnwxfHx8fDE3NjUzODk5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '4',
    username: '@streetculture',
    avatar: '🔰',
    bio: 'Streetwear is a lifestyle. Hypebeast approved. DM for collabs.',
    followers: 3456,
    items: 412,
    image: 'https://images.unsplash.com/photo-1756276884456-b8b65af476fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwZmFzaGlvbiUyMHlvdXRofGVufDF8fHx8MTc2NTM1ODg0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function CommunityHighlights() {
  return (
    <section className="px-4 md:px-6 py-12 md:py-16 bg-white">
      {/* Section Header */}
      <div className="mb-8 md:mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-8 h-8 md:w-10 md:h-10 text-red-600" />
          <h2>COMMUNITY</h2>
        </div>
        <p className="text-lg max-w-3xl">
          Real people. Real style. This is what makes Depop different. Shop from sellers who actually get it.
        </p>
        <div className="h-1 w-32 bg-red-600 mt-4"></div>
      </div>

      {/* Profile Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {communityMembers.map((member) => (
          <div 
            key={member.id}
            className="border-4 border-black bg-white hover:border-red-600 transition-all group cursor-pointer"
          >
            {/* Profile Image */}
            <div className="relative aspect-square overflow-hidden">
              <img
                src={member.image}
                alt={member.username}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Avatar Overlay */}
              <div className="absolute top-4 left-4 text-4xl bg-white w-16 h-16 flex items-center justify-center border-2 border-black">
                {member.avatar}
              </div>
            </div>

            {/* Profile Info */}
            <div className="p-4 space-y-3">
              <div>
                <h4 className="mb-1">{member.username}</h4>
                <p className="text-sm text-gray-700 line-clamp-2 min-h-[2.5rem]">
                  {member.bio}
                </p>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-xs text-gray-600 pt-2 border-t-2 border-gray-200">
                <span>{member.followers} followers</span>
                <span>{member.items} items</span>
              </div>

              {/* Follow Button */}
              <button className="w-full bg-red-600 text-white py-2 border-2 border-black hover:bg-black transition-colors">
                FOLLOW
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <div className="bg-red-600 text-white p-8 md:p-12 border-4 border-black max-w-4xl mx-auto">
          <h3 className="text-white mb-4">JOIN THE COMMUNITY</h3>
          <p className="text-lg mb-6">
            Start your shop. Build your brand. Be yourself.
          </p>
          <button className="bg-white text-black px-12 py-4 border-4 border-white hover:bg-black hover:text-white hover:border-white transition-all">
            GET STARTED
          </button>
        </div>
      </div>
    </section>
  );
}
