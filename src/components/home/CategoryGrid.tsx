import React from 'react';

const categories = [
  {
    id: 1,
    name: 'Water Bottles & Flasks',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=300&h=300',
  },
  {
    id: 2,
    name: 'Storage Containers & Jars',
    image: 'https://images.unsplash.com/photo-1584736286279-4c76c381f563?auto=format&fit=crop&q=80&w=300&h=300',
  },
  {
    id: 3,
    name: 'Casseroles',
    image: 'https://images.unsplash.com/photo-1585672840563-f2af2ced55c9?auto=format&fit=crop&q=80&w=300&h=300',
  },
  {
    id: 4,
    name: 'Jugs & Tumblers',
    image: 'https://images.unsplash.com/photo-1570784332179-a9c1bc867b13?auto=format&fit=crop&q=80&w=300&h=300',
  },
  {
    id: 5,
    name: 'Lunchboxes',
    image: 'https://images.unsplash.com/photo-1598346762291-aee88549193f?auto=format&fit=crop&q=80&w=300&h=300',
  },
  {
    id: 6,
    name: 'Cookware',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=300&h=300',
  },
  {
    id: 7,
    name: 'Electrical Appliances',
    image: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&q=80&w=300&h=300',
  },
  {
    id: 8,
    name: 'Bakeware & Serveware',
    image: 'https://images.unsplash.com/photo-1603566541830-65be7b223621?auto=format&fit=crop&q=80&w=300&h=300',
  }
];

export default function CategoryGrid() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/category/${category.id}`}
              className="group"
            >
              <div className="relative rounded-full overflow-hidden border-4 border-pink-200 aspect-square">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-200"
                />
              </div>
              <h3 className="mt-4 text-center text-sm font-medium text-gray-900">
                {category.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
