//      Create enum for days of the week :

enum DayofWeek {
  monday = "Monday",
  tuesday = "Tuesday",
  wednesday = "Wednesday",
  thursday = "Thursday",
  friday = "Friday",
  saturday = "Saturday",
  sunday = "Sunday",
}

console.log(DayofWeek.friday);

//   TODO: Create an enum for order status :

enum OrderStatus {
  Pending,
  Processing,
  Shipped,
  Delivered,
  Cancelled,
}

interface Order {
  id: number;
  customerName: string;
  status: OrderStatus;
  orderDate: Date;
}

function getStatusMessage(status: OrderStatus): string {
  if (status === 0) {
    return "The status is Pending";
  } else if (status === 1) {
    return "The status is Processing";
  } else if (status === 2) {
    return "The product is Shipped";
  } else if (status === 3) {
    return "The item is Delivered";
  } else if (status === 4) {
    return "The order is cancelled";
  } else return "";
}

//     Create a function that checks if an order can be cancelled :  (only Pending and Processing orders can be cancelled)

function canCancelOrder(order: Order): boolean {
  return (
    order.status === OrderStatus.Pending ||
    order.status === OrderStatus.Processing
  );
}

// TO DO:    Create a function that gets the next status :

export function getNextStatus(currentStatus: OrderStatus): OrderStatus | null {
  switch (currentStatus) {
    case OrderStatus.Pending:
      return OrderStatus.Processing;
    case OrderStatus.Processing:
      return OrderStatus.Shipped;
    case OrderStatus.Shipped:
      return OrderStatus.Delivered;
    case OrderStatus.Delivered:
    case OrderStatus.Cancelled:
      return null;
    default:
      return null;
  }
}

const order: Order = {
  id: 1,
  customerName: "Charlie",
  status: OrderStatus.Pending,
  orderDate: new Date(),
};

/*console.log(getStatusMessage(order.status));
console.log(canCancelOrder(order));*/
