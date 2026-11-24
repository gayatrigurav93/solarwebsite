
export default function ContactMap() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 m-4">

      <h2 className="text-2xl font-bold text-green-800 mb-5">
        Visit Us
      </h2>

      <div className="h-80 rounded-xl overflow-hidden">

        <iframe
          title="Our office location"
          src="https://www.google.com/maps?q=Solapur,Maharashtra,India&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        />

      </div>

    </div>
  );
}
