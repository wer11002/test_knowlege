"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Minus } from "lucide-react"
import Link from "next/link"

export default function WithdrawPage() {
  const [amount, setAmount] = useState("")
  const [reason, setReason] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call delay
    setTimeout(() => {
      // For now, just redirect back to home
      router.push("/")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft size={24} className="text-gray-600" />
          </Link>
          <h1 className="text-xl font-bold text-gray-800">Withdraw Money</h1>
        </div>
      </div>

      {/* Form */}
      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Amount Input */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl font-bold text-gray-800">
                $
              </span>
              <input
                type="number"
                step="0.01"
                min="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full pl-10 pr-4 py-4 text-2xl font-bold text-gray-800 bg-transparent border-0 focus:outline-none focus:ring-0"
                placeholder="0.00"
                required
              />
            </div>
            <div className="h-px bg-gray-200 mt-2"></div>
          </div>

          {/* Notes Input */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <label className="block text-sm font-medium text-gray-700 mb-3">Notes (Optional)</label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
              rows={4}
              placeholder="Add a note about this withdrawal..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || !amount}
            className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-300 text-white rounded-xl py-4 flex items-center justify-center gap-2 transition-colors font-medium"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <div className="flex items-center">
                <Minus size={20} />
                Withdraw ${amount || "0.00"}
              </div>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
