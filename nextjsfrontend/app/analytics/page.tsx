import BottomNav from "../../components/bottom-nav"

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-b-3xl">
        <h1 className="text-2xl font-bold">Analytics</h1>
      </div>

      <div className="mx-4 mt-6">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Analytics Page</h2>
            <p className="text-gray-600">Your spending analytics will be shown here.</p>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}