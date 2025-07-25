import { Plus, Minus } from "lucide-react";

interface ActionButtonsProps {
  onDeposit: () => void;
  onWithdraw: () => void;
}

export function ActionButtons({ onDeposit, onWithdraw }: ActionButtonsProps) {
  return (
    <div className="flex justify-center gap-6 my-8">
      <button
        onClick={onDeposit}
        className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
      >
        <Plus size={24} />
      </button>
      <button
        onClick={onWithdraw}
        className="bg-red-500 hover:bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
      >
        <Minus size={24} />
      </button>
    </div>
  );
}