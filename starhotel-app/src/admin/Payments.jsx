import React, { useEffect, useState } from "react";
import axios from "axios";

function Payments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios.get("/api/payments").then((res) => {
      setPayments(res.data);
    });
  }, []);

  return (
    <div>

      <h1 className="text-xl mb-6">Payments</h1>

      {payments.map((p) => (
        <div key={p._id} className="border p-4 mb-3">

          <p>{p.method}</p>
          <p>KES {p.amount}</p>
          <p className="text-sm text-gray-500">{p.status}</p>

        </div>
      ))}

    </div>
  );
}

export default Payments;