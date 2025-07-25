import Link from "next/link"
import { Plus, Minus, ArrowUpRight, ArrowDownLeft } from "lucide-react"
import BottomNav from "../components/bottom-nav"

// Mock transaction data
const recentTransactions = [
  { id: 1, type: "in", amount: 2500, description: "Salary Deposit", time: "2 hours ago" },
  { id: 2, type: "out", amount: 45, description: "Coffee Shop", time: "5 hours ago" },
  { id: 3, type: "in", amount: 120, description: "Freelance Payment", time: "1 day ago" },
  { id: 4, type: "out", amount: 89, description: "Grocery Store", time: "1 day ago" },
  { id: 5, type: "out", amount: 25, description: "Uber Ride", time: "2 days ago" },
]

export default function HomePage() {
  const totalBalance = 8456.32

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white p-6">{/* Remove the entire greeting section */}</div>

      {/* Balance Card */}
      <div className="mx-4 mt-6 bg-white rounded-2xl shadow-lg p-6 mb-6">
        <p className="text-gray-500 text-sm mb-2">Total Balance</p>
        <h3 className="text-3xl font-bold text-gray-800 mb-6">
          ${totalBalance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </h3>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 bg-green-500 hover:bg-green-600 text-white rounded-xl py-4 flex items-center justify-center gap-2 transition-colors">
            <Plus size={20} />
            <span className="font-medium">Add Money</span>
          </button>
          <button className="flex-1 bg-red-500 hover:bg-red-600 text-white rounded-xl py-4 flex items-center justify-center gap-2 transition-colors">
            <Minus size={20} />
            <span className="font-medium">Send Money</span>
          </button>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="mx-4">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-semibold text-gray-800">Recent Transactions</h4>
          <Link href="#" className="text-blue-600 text-sm font-medium">
            See All
          </Link>
        </div>

        <div className="space-y-3">
          {recentTransactions.map((transaction) => (
            <div key={transaction.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-full ${
                      transaction.type === "in" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                    }`}
                  >
                    {transaction.type === "in" ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{transaction.description}</p>
                    <p className="text-sm text-gray-500">{transaction.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${transaction.type === "in" ? "text-green-600" : "text-red-600"}`}>
                    {transaction.type === "in" ? "+" : "-"}${transaction.amount}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
