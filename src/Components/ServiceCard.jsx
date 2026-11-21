
import servicesData from "../data/servicesData";

export default function ServiceCard() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-12">

      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-700 mb-4">
          Complete Solar Services
        </h2>

        <p className="text-gray-700 text-base md:text-lg font-medium">
          End-to-End Solar Solutions, From Planning to Power Generation.
        </p>
      </div>

      {/* Services Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {servicesData.map((item) => {
          const Icon = item.logo;

          return (
            <div
              key={item.id}
              className="group bg-white p-7 rounded-xl border border-gray-200 shadow-sm
              hover:shadow-lg hover:border-green-600 hover:-translate-y-1
              transition-all duration-300"
            >

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-green-50
              flex items-center justify-center text-green-700 mb-5
              group-hover:bg-green-700 group-hover:text-white
              transition-all duration-300">

                <Icon size={30} strokeWidth={1.8} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-green-700 mb-3
              group-hover:text-green-800 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-7">
                {item.description}
              </p>

            </div>
          );
        })}

      </div>
    </section>
  );
}
