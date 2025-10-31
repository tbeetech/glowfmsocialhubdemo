export default function HealthPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Health Status</h1>
      <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
        <p className="font-semibold">✅ System is healthy and running properly.</p>
        <p className="text-sm mt-1">All services are operational and performing optimally.</p>
      </div>
    </div>
  );
}