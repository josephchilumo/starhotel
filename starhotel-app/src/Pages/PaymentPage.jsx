import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaPaypal, FaCcVisa } from "react-icons/fa";
import { SiStripe } from "react-icons/si";

function PaymentPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  if (!state) {
    return (
      <div className="text-center mt-20 text-red-500">
        No booking data found.
      </div>
    );
  }

  const { room, nights, checkIn, checkOut, total, guests } = state;

  const validDates = checkIn && checkOut && nights > 0;

  const handlePayment = async () => {
    if (!validDates) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/success", { state });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6">

        <h1 className="text-2xl font-semibold mb-6 text-center">
          Secure Payment
        </h1>

        {/* SUMMARY */}
        <div className="bg-gray-50 p-4 rounded-xl mb-6 text-sm space-y-2">
          <p className="font-medium">{room.name}</p>

          <div className="flex justify-between text-gray-500">
            <span>{checkIn} → {checkOut}</span>
            <span>{nights} nights</span>
          </div>

          <div className="flex justify-between text-gray-500">
            <span>Guests</span>
            <span>{guests}</span>
          </div>

          <div className="flex justify-between font-semibold border-t pt-2">
            <span>Total</span>
            <span>KES {total.toLocaleString()}</span>
          </div>
        </div>

        {/* PAYMENT METHODS */}
        <div className="space-y-3 mb-4">

          <PaymentOption
            label="M-Pesa"
            selected={paymentMethod === "mpesa"}
            onClick={() => setPaymentMethod("mpesa")}
          />

          <PaymentOption
            label="Card (Visa / Mastercard)"
            icon={<FaCcVisa size={22} />}
            selected={paymentMethod === "card"}
            onClick={() => setPaymentMethod("card")}
          />

          <PaymentOption
            label="PayPal"
            icon={<FaPaypal size={20} />}
            selected={paymentMethod === "paypal"}
            onClick={() => setPaymentMethod("paypal")}
          />

          <PaymentOption
            label="Stripe"
            icon={<SiStripe size={20} />}
            selected={paymentMethod === "stripe"}
            onClick={() => setPaymentMethod("stripe")}
          />
        </div>

        {/* M-PESA INPUT */}
        {paymentMethod === "mpesa" && (
          <input
            type="text"
            placeholder="Enter M-Pesa Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border rounded-lg p-3 mb-4"
          />
        )}

        <button
          onClick={handlePayment}
          disabled={loading || !validDates}
          className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
        >
          {loading ? "Processing..." : `Pay KES ${total.toLocaleString()}`}
        </button>
      </div>
    </div>
  );
}

/* Reusable Payment Option Component */
function PaymentOption({ label, icon, selected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between p-3 border rounded-xl cursor-pointer transition ${
        selected
          ? "border-black bg-gray-50"
          : "hover:border-gray-400"
      }`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span>{label}</span>
      </div>

      <input type="radio" checked={selected} readOnly />
    </div>
  );
}

export default PaymentPage;