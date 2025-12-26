import { useState } from "react";

export function OfferForm({onSubmit, onCancel}){
    const [proposedPrice, setProposedPrice] = useState("");
    const [reason, setReason] = useState("");

    const handleSubmit = () => {
        if(proposedPrice) {
            onSubmit ({proposedPrice, reason});
            setProposedPrice("");
            setReason("");
        } else {
            alert ("Please enter a proposed price");
        }
    };

    const handleCancel = () => {
        setProposedPrice("");
        setReason("");
        if(onCancel) {
            onCancel();
        }
    };

    return(
        <>
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Your Proposed Price</label>
                    <input type="number" placeholder="Enter your best offer" value={proposedPrice} onChange={(e) => setProposedPrice(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Reason for offer (Optional)</label>
                    <textarea placeholder="Tell us why you deserve a lower price, e.g., 'Found a similar product cheaper elsewhere.' or 'Loyal customer requesting a discount.'" value={reason} onChange={(e) => setReason(e.target.value)} rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"></textarea>
                </div>

                <div className="flex gap-4 justify-end">
                    <button onClick={handleCancel} className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300">Cancel Offer</button>
                    <button onClick={handleSubmit} className="px-6 py-3 bg-blue-700 text-black rounded-lg font-medium hover:bg-blue-600">Submit Offer</button>
                </div>
            </div>
        </>
    )
}