export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-extrabold text-blue-900">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-yellow-400" />
    </div>
  );
}