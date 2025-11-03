'use client'
import { Meteors } from "./ui/meteors";

function Footer() {
  return (
    <footer className="relative bg-black text-gray-400 py-24 overflow-hidden w-full">
      
      {/* 🌠 Full footer meteor background (cover full width & height) */}
      <div className="absolute inset-0 w-full h-full overflow-visible z-0 pointer-events-none">
        {/* Force meteors to go beyond viewport width and height */}
        <div className="absolute top-[-50vh] left-[-50vw] w-[200vw] h-[200vh]">
          <Meteors number={80} />
        </div>
      </div>

      {/* 🌌 Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* About Us */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-400">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            {["Home", "About", "Courses", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex flex-wrap gap-4">
            {["Facebook", "Twitter", "Instagram"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>New Delhi, India</p>
          <p>Delhi 10001</p>
          <p>Email: info@musicschool.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="relative z-10 text-center text-xs pt-10 text-gray-500">
        © 2025 Music School. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
