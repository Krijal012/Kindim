import { Minus, Plus, Trash2 } from 'lucide-react';

export function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="bg-[#f2f2f2] rounded-lg p-4 flex flex-col sm:flex-row items-center gap-4 mb-4 shadow-sm transition-all">
      <div className="w-full sm:w-20 h-32 sm:h-20 bg-white rounded-lg flex items-center justify-center p-2">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="flex-1 w-full text-center sm:text-left">
        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
        <p className="text-gray-600">Rs. {item.price}</p>
      </div>
      
      <div className="flex items-center justify-between w-full sm:w-auto gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100 bg-white"
          >
            <Minus size={16} />
          </button>
          <span className="w-12 text-center font-medium">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100 bg-white"
          >
            <Plus size={16} />
          </button>
        </div>
        
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-600 flex items-center gap-2 sm:ml-4"
        >
          <Trash2 size={20} />
          <span>Remove</span>
        </button>
      </div>
    </div>
  );
}