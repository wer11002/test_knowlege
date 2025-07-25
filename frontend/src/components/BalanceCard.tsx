import { Card } from "@/components/ui/card";

interface BalanceCardProps {
  balance: number;
}

export function BalanceCard({ balance }: BalanceCardProps) {
  return (
    <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-2xl shadow-lg">
      <div className="text-center">
        <p className="text-blue-100 text-sm mb-2">Available Balance</p>
        <h2 className="text-3xl font-bold">
          ${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </h2>
      </div>
    </Card>
  );
}