"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Plus, Minus, ArrowUpRight, ArrowDownLeft } from "lucide-react"
import BottomNav from "../components/bottom-nav"

interface Transaction {
  id: number
  date: string
  amount: number
  reason: string
  created_at: string
}

// Mock data
const mockTransactions: Transaction[] = [
  { id: 1, date: "2024-01-15", amount: 2500, reason: "Salary Deposit", created_at: "2024-01-15T10:00:00Z" },
  { id: 2, date: "2024-01-15", amount: -45, reason: "Coffee Shop", created_at: "2024-01-15T14:30:00Z" },
  { id: 3, date: "2024-01-14", amount: 120, reason: "Freelance Payment", created_at: "2024-01-14T16:20:00Z" },
  { id: 4, date: "2024-01-14", amount: -89, reason: "Grocery Store", created_at: "2024-01-14T18:45:00Z" },
  { id: 5, date: "2024-01-13", amount: -25, reason: "Uber Ride", created_at: "2024-01-13T20:15:00Z" },
]

export default function HomePage() {
  const [totalBalance, setTotalBalance] = useState(0)
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setTransactions(mockTransactions)
      // Calculate total balance from mock transactions
      const balance = mockTransactions.reduce((sum, transaction) => sum + transaction.amount, 0)
      setTotalBalance(balance)
      setLoading(false)
    }, 1000)
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 1) return "Today"
    if (diffDays === 2) return "Yesterday"
    if (diffDays <= 7) return `${diffDays - 1} days ago`
    return date.toLocaleDateString()
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pb-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white p-6 rounded-b-3xl shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">My Wallet</h1>
      </div>

      {/* Balance Card */}
      <div className="mx-4 mt-6 bg-white rounded-2xl shadow-lg p-6 mb-6">
        <p className="text-gray-500 text-sm mb-2">Total Balance</p>
        <h3 className="text-3xl font-bold text-gray-800 mb-6">
          ${totalBalance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </h3>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Link
            href="/add-money"
            className="flex-1 bg-green-500 hover:bg-green-600 text-white rounded-xl py-4 flex items-center justify-center gap-2 transition-colors"
          >
            <Plus size={20} />
            <span className="font-medium">Add Money</span>
          </Link>
          <Link
            href="/withdraw"
            className="flex-1 bg-red-500 hover:bg-red-600 text-white rounded-xl py-4 flex items-center justify-center gap-2 transition-colors"
          >
            <Minus size={20} />
            <span className="font-medium">Withdraw</span>
          </Link>
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
          {transactions.slice(0, 5).map((transaction) => (
            <div key={transaction.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-full ${
                      transaction.amount > 0 ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                    }`}
                  >
                    {transaction.amount > 0 ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{transaction.reason}</p>
                    <p className="text-sm text-gray-500">{formatDate(transaction.date)}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${transaction.amount > 0 ? "text-green-600" : "text-red-600"}`}>
                    {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
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
