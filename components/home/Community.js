import CommunityCard from "./CommunityCard";
import communityData from "../../data/community";

export default function Community() {
  return (
    <section className="p-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Community & Leadership</h2>
      <div className="flex flex-col gap-4">
        {communityData.map((item, idx) => (
          <CommunityCard key={idx} {...item} />
        ))}
      </div>
        </div>
    </section>
  );
}
