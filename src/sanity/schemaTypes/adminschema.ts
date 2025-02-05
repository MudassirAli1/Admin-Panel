export default {
    name: "adminPanel",
    title: "Admin Panel",
    type: "document",
    fields: [
      // Order Schema
      {
        name: "order",
        title: "Order",
        type: "document",
        fields: [
          { name: "name", title: "Name", type: "string" },
          { name: "address", title: "Address", type: "string" },
          { name: "postalCode", title: "Postal Code", type: "string" },
          { name: "city", title: "City", type: "string" },
          { name: "email", title: "Email", type: "string" },
          { name: "phone", title: "Phone", type: "string" },
          { name: "pan", title: "PAN", type: "string" },
          { name: "total", title: "Total", type: "number" },
          { name: "orderDate", title: "Order Date", type: "datetime" },
          {
            name: "cartItems",
            title: "Cart Items",
            type: "array",
            of: [
              {
                type: "object",
                fields: [
                  { name: "productName", title: "Product Name", type: "string" },
                  { name: "quantity", title: "Quantity", type: "number" },
                  {
                    name: "productImage",
                    title: "Product Image",
                    type: "image", 
                    options: {
                      hotspot: true,
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
  
      // Product Schema
      {
        name: "product",
        title: "Product",
        type: "document",
        fields: [
          { name: "productName", title: "Product Name", type: "string" },
          { name: "category", title: "Category", type: "string" },
          { name: "color", title: "Color", type: "string" },
          { name: "price", title: "Price", type: "number" },
          { name: "stock", title: "Stock", type: "number" },
          {
            name: "productImage",
            title: "Product Image",
            type: "image",
            options: {
              hotspot: true,
            },
          },
        ],
      },
  
      // User Schema
      {
        name: "user",
        title: "User",
        type: "document",
        fields: [
          { name: "name", title: "Name", type: "string" },
          { name: "email", title: "Email", type: "string" },
          { name: "phone", title: "Phone", type: "string" },
          { name: "address", title: "Address", type: "string" },
          { name: "city", title: "City", type: "string" },
          { name: "postalCode", title: "Postal Code", type: "string" },
          { name: "orderHistory", title: "Order History", type: "array", of: [{ type: "reference", to: [{ type: "order" }] }] },
        ],
      },
  
      // Inventory Schema
      {
        name: "inventory",
        title: "Inventory",
        type: "document",
        fields: [
          { name: "productName", title: "Product Name", type: "string" },
          { name: "category", title: "Category", type: "string" },
          { name: "color", title: "Color", type: "string" },
          { name: "price", title: "Price", type: "number" },
          { name: "stock", title: "Stock", type: "number" },
          {
            name: "productImage",
            title: "Product Image",
            type: "image",
            options: {
              hotspot: true,
            },
          },
        ],
      },
    ],
  };
  