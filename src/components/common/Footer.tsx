import { Facebook, Instagram as InstagramIcon, Twitter, Youtube } from 'lucide-react';

const brands = [
  { name: 'Milton', link: '#' },
  { name: 'Treo by Milton', link: '#' },
  { name: 'Milton ProCook', link: '#' },
  { name: 'Spotzero by Milton', link: '#' },
];

const explore = [
  { name: 'About us', link: '#' },
  { name: "FAQ's", link: '#' },
  { name: 'Media', link: '#' },
  { name: 'Gifting', link: '#' },
  { name: 'Blogs', link: '#' },
];

const quickLinks = [
  { name: 'Track Your Order', link: '#' },
  { name: 'Contact us', link: '#' },
  { name: 'Customer Care', link: '#' },
  { name: 'Sales Support', link: '#' },
];

const policies = [
  { name: 'Shipping policy', link: '#' },
  { name: 'Refund Policy', link: '#' },
  { name: 'Privacy policy', link: '#' },
  { name: 'Terms of service', link: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      {/* Newsletter Section */}
      <div className="bg-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Subscribe today to hear first about our sales
          </h3>
          <div className="max-w-xl mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="bg-gray-500 text-white px-6 py-2 rounded-r-md hover:bg-gray-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brands Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">Brands</h4>
            <ul className="space-y-2">
              {brands.map((brand) => (
                <li key={brand.name}>
                  <a href={brand.link} className="hover:text-white transition-colors">
                    {brand.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              {explore.map((item) => (
                <li key={item.name}>
                  <a href={item.link} className="hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.link} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">Policies</h4>
            <ul className="space-y-2">
              {policies.map((policy) => (
                <li key={policy.name}>
                  <a href={policy.link} className="hover:text-white transition-colors">
                    {policy.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in touch</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400">Only for WhatsApp</p>
                <a href="tel:7506006010" className="hover:text-white transition-colors">
                  7506006010
                </a>
              </div>
              <div>
                <a
                  href="mailto:support@hamiltonindia.in"
                  className="hover:text-white transition-colors"
                >
                  support@hamiltonindia.in
                </a>
              </div>
              <div>
                <h5 className="text-white font-semibold mb-2">Follow us</h5>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-white transition-colors">
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Categories Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h4 className="text-white font-semibold mb-4">All Categories</h4>
          <div className="text-sm space-x-2">
            <a href="#" className="hover:text-white transition-colors">All Products</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Appam & Appachety</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Back To School</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Bottles & Flasks</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Bakeware & Serveware</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Beer Mugs</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Casseroles</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Ceramic Mugs</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">500 ML Water Bottle</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">750 ML Water Bottle</a>
          </div>
        </div>
      </div>

      {/* Rewards Banner */}
      <div className="bg-red-500 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-2">
            <span className="font-semibold">Milton Rewards</span>
            <span>|</span>
            <span>🎁</span>
            <span>Get upto 5% Off using POPcoins</span>
            <span className="text-2xl">→</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
