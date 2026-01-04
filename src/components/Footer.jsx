import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-xl font-bold text-white">CoderForces</h3>
          <p className="text-sm mt-2">
            Learn. Build. Grow.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>Courses</li>
            <li>Workshops</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Support</h4>
          <p className="text-sm">support@coderforces.com</p>
        </div>

      </div>

      <p className="text-center text-xs text-gray-500 mt-8">
        © 2026 CoderForces. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
