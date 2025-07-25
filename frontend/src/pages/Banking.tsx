import { useState } from "react";
import { toast } from "sonner"; // 👈 import directly from sonner
import { BalanceCard } from "@/components/BalanceCard";
import { ActionButtons } from "@/components/ActionButtons";
import { RecentActivity } from "@/components/RecentActivity";

const mockTransactions = [
  {
    id: '1',
    type: 'deposit' as const,
    amount: 2500.00,
    description: 'Salary Deposit',
    date: 'Today, 2:30 PM'
  },
  {
    id: '2',
    type: 'withdraw' as const,
    amount: 150.00,
    description: 'ATM Withdrawal',
    date: 'Yesterday, 4:15 PM'
  },
  {
    id: '3',
    type: 'deposit' as const,
    amount: 75.50,
    description: 'Refund',
    date: 'Dec 8, 10:22 AM'
  },
  {
    id: '4',
    type: 'withdraw' as const,
    amount: 89.99,
    description: 'Online Purchase',
    date: 'Dec 7, 3:45 PM'
  },
  {
    id: '5',
    type: 'withdraw' as const,
    amount: 25.00,
    description: 'Coffee Shop',
    date: 'Dec 7, 8:30 AM'
  }
];

export default function Banking() {
  const [balance, setBalance] = useState(12847.50);

  const handleDeposit = () => {
    toast.info("Deposit feature will be available soon", {
      description: "Stay tuned!"
    });
  };

  const handleWithdraw = () => {
    toast.info("Withdraw feature will be available soon", {
      description: "Stay tuned!"
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">My Account</h1>
          <p className="text-gray-600">Welcome back, John</p>
        </div>

        <BalanceCard balance={balance} />

        <ActionButtons onDeposit={handleDeposit} onWithdraw={handleWithdraw} />

        <RecentActivity transactions={mockTransactions} />
      </div>
    </div>
  );
}
