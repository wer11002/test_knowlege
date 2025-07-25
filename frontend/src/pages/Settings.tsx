
import { Card } from "@/components/ui/card";

export default function Settings() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-md mx-auto px-4 py-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        </div>
        
        <Card className="p-8 text-center bg-white rounded-2xl shadow-sm">
          <div className="text-6xl mb-4">🤔</div>
          <p className="text-lg text-gray-600 font-medium">
            Think about it later
          </p>
        </Card>
      </div>
    </div>
  );
}
