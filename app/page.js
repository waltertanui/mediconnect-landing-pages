
import ContactForm from './contactus/page'; // Assuming ContactForm is a component for your contact form
import Pricing from './pricing/page'; // Assuming Pricing is a component for your pricing section
import Image from 'next/image'; // Import Image from next/image

// Import images from the public folder
import med4Image from '../public/med4.jpg';
import med2Image from '../public/med2.jpg';
import med3Image from '../public/med3.jpg';
import hero1 from '../public/hero1.jpg';
import logo from '../public/logo.jpeg'
import profile1 from '../public/profile1.jpg'
import profile2 from '../public/profile2.jpg'

function Page() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex flex-col sm:flex-row justify-between items-center py-4 px-6 bg-gray-500">
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="Logo" className="h-12 w-12 rounded-sm sm:h-10" />
          <h1 className="text-xl sm:text-2xl font-bold">Mediconnect</h1>
        </div>
        <div className="flex space-x-4 sm:space-x-8 text-sm sm:text-lg mt-4 sm:mt-0">
          <a href="#" className="hover:text-gray-900">Home</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#contact" className="hover:text-gray-900">Contact Us</a>
        </div>
      </nav>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        {/* Hero section */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">Your Health Journey Starts Here</h1>
          <p className="text-lg sm:text-2xl mb-8">Connect with doctors, track your progress, and manage appointments effortlessly.</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-lg sm:text-xl font-medium">Sign Up</button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-gray-900 py-3 px-6 rounded-lg text-lg sm:text-xl font-medium">Learn More</button>
          </div>
        </div>

        {/* Introduction image */}
        <div className="relative">
          <div className="flex justify-center mb-12">
            <Image src={hero1} alt="Secure Medical Data Storage" className="rounded-lg" style={{ width: '100%', height: 'auto', filter: 'blur(2px)' }} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-black text-2xl sm:text-3xl font-bold text-center px-4">
              <div>Good health leads to improved productivity,</div>
              <div>which in turn enhances quality of life.</div>
            </h2>
          </div>
        </div>

        {/* Features section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="flex flex-col items-center justify-center bg-gray-800 rounded-lg p-4 sm:p-8">
            <Image src={med3Image} alt="Secure Medical Data Storage" className="rounded-lg mb-4" />
            <h2 className="text-2xl sm:text-3xl font-semibold">Secure Medical Data Storage</h2>
            <p className="text-base sm:text-lg text-gray-300 mt-4 text-center">Keep your medical records safe and easily accessible in our secure, centralized database. Access your health information anytime, anywhere.</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-800 rounded-lg p-4 sm:p-8">
            <Image src={med2Image} alt="AI-Driven Health Insights" className="rounded-lg mb-4" />
            <h2 className="text-2xl sm:text-3xl font-semibold">AI-Driven Health Insights</h2>
            <p className="text-base sm:text-lg text-gray-300 mt-4 text-center">Leverage the power of artificial intelligence to gain valuable insights into your health. Track your recovery progress and receive personalized recommendations.</p>
          </div>
        </div>

        {/* Call to action */}
        <div className="flex flex-col items-center justify-center bg-gray-800 rounded-lg p-8 sm:p-12 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Ready to Transform Your Health?</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 text-center">Join thousands who have improved their health journey with us.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg text-lg sm:text-xl font-medium">Get Started</button>
        </div>

        {/* Testimonials section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="bg-gray-800 rounded-lg p-6 sm:p-8">
              <div className="flex space-x-4 items-center mb-4">
                <Image className="w-12 h-12 rounded-full" src={profile1} alt="User 1" />
                <div>
                  <p className="text-base sm:text-lg text-gray-300">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales nunc. Etiam nec urna rhoncus, fermentum nisi non, ultrices metus."</p>
                  <p className="text-gray-400">John Doe</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 sm:p-8">
              <div className="flex space-x-4 items-center mb-4">
                <Image className="w-12 h-12 rounded-full" src={profile2} alt="User 2" />
                <div>
                  <p className="text-base sm:text-lg text-gray-300">"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."</p>
                  <p className="text-gray-400">Jane Smith</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing section */}
        <Pricing />

        {/* Contact Us section */}
        <ContactForm />

        {/* Footer */}
        <footer className="bg-gray-800 text-center py-4">
          <p className="text-gray-400 text-sm sm:text-base">&copy; 2024 Your Health Platform. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Page;
