import BottomNav from "../../components/bottom-nav"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-b-3xl">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      {/* Settings Content */}
      <div className="mx-4 mt-6">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Settings Page</h2>
            <p className="text-gray-600">
              This is where your settings will be configured. You can add various options here later.
            </p>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
