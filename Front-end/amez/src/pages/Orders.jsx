import React from "react";

function Orders() {
  return (
    <div className="p-6 md:p-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Orders</h2>

      <div className="bg-white shadow p-6 rounded-xl">
        <h3 className="font-semibold text-lg">Order #1023</h3>
        <p className="text-gray-600">Status: Delivered</p>
      </div>
    </div>
  );
}

export default Orders;
 