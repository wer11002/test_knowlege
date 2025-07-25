import { ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Transaction {
  id: string;
  type: 'deposit' | 'withdraw';
  amount: number;
  description: string;
  date: string;
}

interface RecentActivityProps {
  transactions: Transaction[];
}

export function RecentActivity({ transactions }: RecentActivityProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
      <ScrollArea className="h-80">
        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-full ${
                    transaction.type === 'deposit'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-red-100 text-red-600'
                  }`}
                >
                  {transaction.type === 'deposit' ? (
                    <ArrowDownLeft size={16} />
                  ) : (
                    <ArrowUpRight size={16} />
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-800">{transaction.description}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
              </div>
              <p
                className={`font-semibold ${
                  transaction.type === 'deposit'
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {transaction.type === 'deposit' ? '+' : '-'}$
                {transaction.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}