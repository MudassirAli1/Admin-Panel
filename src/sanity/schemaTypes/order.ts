export default {
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
                type: "image", // Add image type to store the product image
                options: {
                  hotspot: true, // Enables cropping functionality in Sanity Studio
                },
              },
            ],
          },
        ],
      },
    ],
  };
  