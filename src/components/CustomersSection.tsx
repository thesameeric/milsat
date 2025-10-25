import { Tabs } from "./ui/tabs";

export default function CustomersSection() {
  const tabs = [
    {
      title: "Sierra Leone Statistics",
      value: "Sierra Leone Statistics",
      image: '/clients/sls.png',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl px-10 py-20 text-white"
          style={{
            background: '#01191D'
          }}>
          <p className="text-2xl md:text-4xl">National Census Mapping</p>
          <span className="inline-block pt-10">
            <p>
              Backbone tool for the digital cartographic mapping for Sierra Leone demographic and households census, ensuring accuracy and completeness at unprecedented scale.
            </p>
          </span>
        </div>
      ),
    },
    {
      title: "National population Commision",
      value: "National population Commision",
      image: '/clients/npc.png',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl px-10 py-20 text-white"
          style={{
            background: '#01191D'
          }}>
          <p className="text-2xl md:text-4xl">National Enumeration Area Demarcation</p>
          <span className="inline-block pt-10">
            <p>
              Deployed to drive the Enumeration Area Demarcation (EAD) — successfully mapping 65M+ properties across 37 states within 9 months, the fastest operation of its kind in Africa.            </p>
          </span>
        </div>
      ),
    },
    {
      title: "Nipost",
      value: "Nipost",
      image: '/clients/nipost2.jpg',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl px-10 py-20 text-white"
          style={{
            background: '#01191D'
          }}>
          <p className="text-2xl md:text-4xl">National Addressing & Postcode</p>
          <span className="inline-block pt-10">
            <p>
              Officially adopted as the certified geo application for countrywide postcode generation and address verification, enabling a digital backbone for addresses nationwide.
            </p>
          </span>
        </div>
      ),
    },
    {
      title: "UNDP",
      value: "UNDP",
      image: '/clients/undp.png',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl px-10 py-20 text-white"
          style={{
            background: '#01191D'
          }}>
          <p className="text-2xl md:text-4xl">Mining and Miners Census</p>
          <span className="inline-block pt-10">
            <p>
              Driving inclusion and innovation across Sub-Saharan Africa with artisanal miners enumeration and geospatial mapping, creating pathways for formalization in the mining sector.            </p>
          </span>
        </div>
      ),
    }
  ];

  return (
    <section className="container mx-auto px-8 pt-20 w-full">
      <h2 className="text-3xl md:text-5xl mb-12 max-w-4xl">
        Customers using local data for industrial advantage
      </h2>
      <div className="[perspective:1000px] relative b flex flex-col items-start justify-start my-20">
        <Tabs tabs={tabs} />
      </div>
    </section>
  );
}