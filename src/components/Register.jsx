import React, { useState, forwardRef } from "react"

const Register = forwardRef(function Register(props, ref) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    university: "",
  })

  const [errors, setErrors] = useState({})
  const [showPopup, setShowPopup] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })

    // 🔥 remove error when user types
    if (value.trim() !== "") {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Please fill Full Name"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please fill Email Address"
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Please fill Mobile Number"
    }
    if (!formData.university.trim()) {
      newErrors.university = "Please fill University Name"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validate()) return

    // ✅ success
    setShowPopup(true)

    setFormData({
      name: "",
      email: "",
      mobile: "",
      university: "",
    })
  }

  return (
    <section ref={ref} className="bg-blue-900 py-40 text-white">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-8">
          Secure Your Spot Now
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white text-gray-800 rounded-xl p-8 grid gap-4"
        >

          {/* Full Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-3 rounded-md w-full"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border p-3 rounded-md w-full"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Mobile */}
          <div>
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className="border p-3 rounded-md w-full"
            />
            {errors.mobile && (
              <p className="text-red-600 text-sm mt-1">
                {errors.mobile}
              </p>
            )}
          </div>

          {/* University */}
          <div>
            <input
              type="text"
              name="university"
              placeholder="University Name"
              value={formData.university}
              onChange={handleChange}
              className="border p-3 rounded-md w-full"
            />
            {errors.university && (
              <p className="text-red-600 text-sm mt-1">
                {errors.university}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 mt-3"
          >
            Complete Registration →
          </button>

        </form>
      </div>

      {/* ✅ SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white text-gray-800 p-8 rounded-xl max-w-sm text-center">
            <h3 className="text-xl font-bold mb-3">
              🎉 Success!
            </h3>
            <p className="mb-6">
              Your response submitted successfully.<br />
              Thank you!
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              OK
            </button>
          </div>
        </div>
      )}

    </section>
  )
})

export default Register
