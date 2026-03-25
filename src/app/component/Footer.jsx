// components/Footer.js
import {
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
// import { 
//   InstagramIcon, 
//   TwitterIcon, 
//   FacebookIcon, 
//   LinkedinIcon 
// } from '@heroicons/react/24/solid'; 

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-200">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Logo and description */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">Dev Shop</h2>
                        <p className="text-gray-400">
                            We create beautiful experiences for your digital presence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
                            <li><Link href="/products/" className="hover:text-blue-500 transition-colors">Products</Link></li>
                            <li><Link href="/products/shirts" className="hover:text-blue-500 transition-colors">Shirts</Link></li>
                            {/* <li><Link href="#" className="hover:text-blue-500 transition-colors">Contact</Link></li> */}
                        </ul>
                    </div>

                    {/* Resources */}
                    {/* <div>
            <h3 className="text-xl font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Terms of Service</Link></li>
            </ul>
          </div> */}

                    {/* Contact / Newsletter */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
                        <div className="flex items-center space-x-2 mb-2">
                            <EnvelopeIcon className="w-5 h-5 text-blue-500" />
                            <span className="text-gray-400">info@mybrand.com</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                            <PhoneIcon className="w-5 h-5 text-blue-500" />
                            <span className="text-gray-400">+123 456 7890</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-4">
                            <MapPinIcon className="w-5 h-5 text-blue-500" />
                            <span className="text-gray-400">123 Street, City, Country</span>
                        </div>
                        {/* <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                                Subscribe
                            </button>
                        </form> */}
                    </div>

                </div>
                <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">&copy; 2026 MyBrand. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 sm:mt-0">
                        {/* Placeholder Heroicons for social links */}
                        <Link href="#" className="hover:text-blue-500">Facebook</Link>
                        <Link href="#" className="hover:text-blue-500">Instagram</Link>
                        <Link href="#" className="hover:text-blue-500">LinkedIn </Link>
                        <Link href="#" className="hover:text-blue-500">Youtube</Link>
                    </div>
                </div>


            </div>
        </footer>
    );
}