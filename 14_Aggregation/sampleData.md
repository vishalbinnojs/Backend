 PRODUCTS***********
db.products.insertMany([
  {
    _id: 101,
    name: "iPhone 15",
    category: "Mobile",
    brand: "Apple",
    price: 85000,
    stock: 12,
    tags: ["electronics", "phone", "ios"],
    ratings: [5, 4, 5, 3, 4],
    createdAt: new Date("2025-01-10")
  },
  {
    _id: 102,
    name: "Samsung S24",
    category: "Mobile",
    brand: "Samsung",
    price: 72000,
    stock: 20,
    tags: ["android", "electronics"],
    ratings: [4, 4, 5],
    createdAt: new Date("2025-02-11")
  },
  {
    _id: 103,
    name: "MacBook Air",
    category: "Laptop",
    brand: "Apple",
    price: 120000,
    stock: 7,
    tags: ["laptop", "macos"],
    ratings: [5, 5, 5],
    createdAt: new Date("2024-09-01")
  },
  {
    _id: 104,
    name: "Boat Headphones",
    category: "Accessories",
    brand: "Boat",
    price: 2500,
    stock: 50,
    tags: ["audio", "music"],
    ratings: [3, 4, 4],
    createdAt: new Date("2025-03-14")
  },
  {
    _id: 105,
    name: "Gaming Mouse",
    category: "Accessories",
    brand: "Logitech",
    price: 1800,
    stock: 35,
    tags: ["gaming", "pc"],
    ratings: [5, 4, 4, 5],
    createdAt: new Date("2025-01-20")
  }
])



  ORDERS *************
db.orders.insertMany([
  {
    _id: 1001,
    userId: 1,
    products: [
      {
        productId: 101,
        quantity: 1,
      },
      {
        productId: 104,
        quantity: 2,
      }
    ],
    totalAmount: 90000,
    status: "Delivered",
    paymentMethod: "UPI",
    shippingAddress: {
      city: "Bhagalpur",
      state: "Bihar"
    },
    orderDate: new Date("2025-04-01")
  },
  {
    _id: 1002,
    userId: 2,
    products: [
      {
        productId: 102,
        quantity: 1,
      }
    ],
    totalAmount: 72000,
    status: "Pending",
    paymentMethod: "Card",
    shippingAddress: {
      city: "Patna",
      state: "Bihar"
    },
    orderDate: new Date("2025-04-05")
  },
  {
    _id: 1003,
    userId: 3,
    products: [
      {
        productId: 103,
        quantity: 1,
      },
      {
        productId: 105,
        quantity: 2,
      }
    ],
    totalAmount: 123600,
    status: "Delivered",
    paymentMethod: "NetBanking",
    shippingAddress: {
      city: "Delhi",
      state: "Delhi"
    },
    orderDate: new Date("2025-04-10")
  },
  {
    _id: 1004,
    userId: 1,
    products: [
      {
        productId: 105,
        quantity: 3,
      }
    ],
    totalAmount: 5400,
    status: "Cancelled",
    paymentMethod: "COD",
    shippingAddress: {
      city: "Bhagalpur",
      state: "Bihar"
    },
    orderDate: new Date("2025-04-15")
  },
  {
    _id: 1011,
    userId: 2,
    products: [
      {
        productId: 101,
        quantity: 1,
      },
      {
        productId: 104,
        quantity: 2,
      }
    ],
    totalAmount: 90000,
    status: "Delivered",
    paymentMethod: "UPI",
    shippingAddress: {
      city: "Patna",
      state: "Bihar"
    },
    orderDate: new Date()
  },
  {
    _id: 1012,
    userId: 1,
    products: [
      {
        productId: 103,
        quantity: 1,
      }
    ],
    totalAmount: 120000,
    status: "Delivered",
    paymentMethod: "Card",
    shippingAddress: {
      city: "Bhagalpur",
      state: "Bihar"
    },
    orderDate: new Date(Date.now() - 5 * 60 * 60 * 1000)
  },
  {
    _id: 1013,
    userId: 3,
    products: [
      {
        productId: 105,
        quantity: 3,
      }
    ],
    totalAmount: 5400,
    status: "Pending",
    paymentMethod: "COD",
    shippingAddress: {
      city: "Delhi",
      state: "Delhi"
    },
    orderDate: new Date(Date.now() - 10 * 60 * 60 * 1000)
  }
])

## Aggregate Pipeline Stages
$match - filter data
$group - group data
$project - shape data 
$sort - sort in ascending and descending order
$lookup - join data
$unwind - break arrays



*************************   Question On Aggregation  ************************
 **********SAMPLE DATA**************
 *DETAILED ORDERS COLLECTION 
 db.orders.insertMany([
     {
         customer: "Manas",
         city: "Patna",
         products: [
             { name: "Laptop", category: "Electronics", price: 50000, quantity: 1 },
             { name: "Mouse", category: "Electronics", price: 1000, quantity: 2 },
             { name: "Keyboard", category: "Electronics", price: 2500, quantity: 1 }
         ],
         paymentMethod: "UPI",
         status: "Delivered"
     },

     {
         customer: "Rahul",
         city: "Delhi",
         products: [
             { name: "Shoes", category: "Fashion", price: 3000, quantity: 2 }
         ],
         paymentMethod: "Card",
         status: "Delivered"
     },

     {
         customer: "Priya",
         city: "Mumbai",
         products: [
             { name: "Phone", category: "Electronics", price: 35000, quantity: 1 },
             { name: "Cover", category: "Accessories", price: 500, quantity: 2 },
             { name: "Charger", category: "Electronics", price: 1200, quantity: 1 }
         ],
         paymentMethod: "COD",
         status: "Pending"
     },

     {
         customer: "Manas",
         city: "Patna",
         products: [
             { name: "Monitor", category: "Electronics", price: 15000, quantity: 1 }
         ],
         paymentMethod: "COD",
         status: "Pending"
     },

     {
         customer: "Sneha",
         city: "Patna",
         products: [
             { name: "Bag", category: "Fashion", price: 1800, quantity: 1 },
             { name: "Perfume", category: "Beauty", price: 2200, quantity: 1 }
         ],
         paymentMethod: "UPI",
         status: "Delivered"
     },

     {
         customer: "Rahul",
         city: "Delhi",
         products: [
             { name: "T-Shirt", category: "Fashion", price: 1200, quantity: 3 },
             { name: "Jeans", category: "Fashion", price: 2500, quantity: 1 }
         ],
         paymentMethod: "UPI",
         status: "Delivered"
     },

     {
         customer: "Aman",
         city: "Kolkata",
         products: [
             { name: "Watch", category: "Accessories", price: 5000, quantity: 1 }
         ],
         paymentMethod: "Card",
         status: "Delivered"
     },

     {
         customer: "Neha",
         city: "Mumbai",
         products: [
             { name: "Face Wash", category: "Beauty", price: 500, quantity: 3 },
             { name: "Nail Paint", category: "Beauty", price: 300, quantity: 5 }
         ],
         paymentMethod: "Card",
         status: "Delivered"
     },

     {
         customer: "Priya",
         city: "Mumbai",
         products: [
             { name: "Lipstick", category: "Beauty", price: 800, quantity: 4 }
         ],
         paymentMethod: "UPI",
         status: "Delivered"
     },

     {
         customer: "Vikash",
         city: "Delhi",
         products: [
             { name: "Tablet", category: "Electronics", price: 20000, quantity: 1 },
             { name: "Keyboard", category: "Electronics", price: 3000, quantity: 1 }
         ],
         paymentMethod: "UPI",
         status: "Delivered"
     },

     {
         customer: "Arjun",
         city: "Patna",
         products: [
             { name: "Headphones", category: "Electronics", price: 2500, quantity: 2 }
         ],
         paymentMethod: "Card",
         status: "Delivered"
     },

     {
         customer: "Manas",
         city: "Patna",
         products: [
             { name: "Speaker", category: "Electronics", price: 6000, quantity: 1 },
             { name: "Gaming Mouse", category: "Electronics", price: 3500, quantity: 1 }
         ],
         paymentMethod: "UPI",
         status: "Delivered"
     },

     {
         customer: "Rohit",
         city: "Delhi",
         products: [
             { name: "TV", category: "Electronics", price: 45000, quantity: 1 },
             { name: "Sound Bar", category: "Electronics", price: 8000, quantity: 1 }
         ],
         paymentMethod: "COD",
         status: "Delivered"
     },

     {
         customer: "Sneha",
         city: "Patna",
         products: [
             { name: "Heels", category: "Fashion", price: 2800, quantity: 1 }
         ],
         paymentMethod: "UPI",
         status: "Pending"
     },

     {
         customer: "Aman",
         city: "Kolkata",
         products: [
             { name: "Perfume", category: "Beauty", price: 2200, quantity: 2 },
             { name: "Face Cream", category: "Beauty", price: 1200, quantity: 1 }
         ],
         paymentMethod: "UPI",
         status: "Cancelled"
     },

     {
         customer: "Pooja",
         city: "Bangalore",
         products: [
             { name: "Dress", category: "Fashion", price: 4000, quantity: 1 },
             { name: "Handbag", category: "Fashion", price: 3500, quantity: 1 }
         ],
         paymentMethod: "Card",
         status: "Delivered"
     },

     {
         customer: "Neha",
         city: "Mumbai",
         products: [
             { name: "Hair Dryer", category: "Electronics", price: 2500, quantity: 1 }
         ],
         paymentMethod: "UPI",
         status: "Pending"
     },

     {
         customer: "Arjun",
         city: "Patna",
         products: [
             { name: "Speaker", category: "Electronics", price: 6000, quantity: 1 },
             { name: "Mic", category: "Electronics", price: 2500, quantity: 1 }
         ],
         paymentMethod: "UPI",
         status: "Delivered"
     },

     {
         customer: "Vikash",
         city: "Delhi",
         products: [
             { name: "Monitor", category: "Electronics", price: 15000, quantity: 1 }
         ],
         paymentMethod: "COD",
         status: "Delivered"
     },

     {
         customer: "Rohit",
         city: "Delhi",
         products: [
             { name: "Gaming Mouse", category: "Electronics", price: 3500, quantity: 2 },
             { name: "Mouse Pad", category: "Accessories", price: 700, quantity: 1 }
         ],
         paymentMethod: "UPI",
         status: "Pending"
     }
 ])


 *USERS
 db.users.insertMany([
   {
     _id: 1,
     name: "Manas",
     city: "Patna"
   },

   {
     _id: 2,
     name: "Rahul",
     city: "Delhi"
   },

   {
     _id: 3,
     name: "Priya",
     city: "Mumbai"
   },

   {
     _id: 4,
     name: "Sneha",
     city: "Kolkata"
   },

   {
     _id: 5,
     name: "Arjun",
     city: "Patna"
   }
 ])


 *ORDERS-2
 db.orders2.insertMany([
   {
     customerId: 1,
     product: "Laptop",
     amount: 50000
   },

   {
     customerId: 1,
     product: "Mouse",
     amount: 2000
   },

   {
     customerId: 2,
     product: "Shoes",
     amount: 6000
   },

   {
     customerId: 3,
     product: "Phone",
     amount: 35000
   }
 ])



 ***********QUESTIONS***************
 Q.1 Find total sales of each category
 Q.2 Find top spending customer
 Q.3 Show all products bought by each customer
 Q.4 Find customers who spent more than 50,000
 Q.5 Find most sold product
 Q.6 Create pagination using aggregation
 Q.7 Find average order value per city

/* Q.8 Create analytics dashboard data.
        For each category:
            total products sold
            total revenue
            average price
*/

 Q.9 Join users and orders using $lookup
 Q.10 Find users having no orders