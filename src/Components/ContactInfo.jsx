
export default function ContactInfo() {
  return (
    <section className="m-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

      {/* Phone */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="font-bold text-green-700">
          Phone
        </h3>
        <a href="tel:+9112345678">
          +91 12345678
        </a>
      </div>

      {/* Email */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="font-bold text-green-700">
          Email
        </h3>
        <a href="mailto:info@example.com">
          info@example.com
        </a>
      </div>

      {/* Address */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="font-bold text-green-700">
          Address
        </h3>
        <p>Your company address</p>
      </div>

      {/* Social Media */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="font-bold text-green-700">
          Follow Us
        </h3>

        <a href="https://instagram.com">
          Instagram
        </a>

        <br />

        <a href="https://facebook.com">
          Facebook
        </a>
      </div>

    </section>
  );
}
