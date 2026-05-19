import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cartItem: JSON.parse(localStorage.getItem("cart")) || [],
  showCart: false,
  totalAmount: 0
}

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {

    addtoCart: (state, action) => {
  const existingItem = state.cartItem.find(
    (item) => item.id === action.payload.id
  )

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    state.cartItem.push({
      ...action.payload,
      quantity: 1
    })
  }

  localStorage.setItem("cart", JSON.stringify(state.cartItem))
},

getTotalAmount: (state) => {
  let total = 0

  state.cartItem.forEach((item) => {
    total += item.price * item.quantity
  })

  state.totalAmount = total
},
    removeFromCart: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload
      )

      localStorage.setItem("cart", JSON.stringify(state.cartItem))
    },

    
    toggleCart: (state) => {
      state.showCart = !state.showCart
    },

    calculateTotal: (state) => {
      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + item.price,
        0
      )
    },

    increaseQty: (state, action) => {
  const item = state.cartItem.find(
    (item) => item.id === action.payload
  )
  if (item) {
    item.quantity += 1
  }
  localStorage.setItem("cart", JSON.stringify(state.cartItem))
},
decreaseQty: (state, action) => {
  const item = state.cartItem.find(
    (item) => item.id === action.payload
  )
  if (item && item.quantity > 1) {
    item.quantity -= 1
  }
  localStorage.setItem("cart", JSON.stringify(state.cartItem))
},

    clearCart: (state) => {
      state.cartItem = []
      localStorage.removeItem("cart")
    }

  }
})

export const {
  addtoCart,
  removeFromCart,
  getTotalAmount,
  toggleCart,
  increaseQty,
  decreaseQty,
  calculateTotal,
  clearCart,
  
} = CartSlice.actions

export default CartSlice

