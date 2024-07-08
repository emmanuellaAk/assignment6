# React Native Shopping Cart App

## Description

This is a simple shopping cart application built with React Native. 
It allows users to view a list of available products, add products to their cart, remove products from their cart, and view the items in their cart. 
The selected items are stored locally on the device using AsyncStorage.

## Features

- View a list of available products
- Add products to the cart
- Remove products from the cart
- View items in the cart
- Local storage of cart items using AsyncStorage

## HomeScreen
- Displays a list of available products.
- Components:
- Header: The app's header section.
- Story: Displays the "OUR STORY" section.
- ClothesArea: Displays the list of available products.

## CartScreen
- Displays the selected items in the cart.
- Components:
- Header: The app's header section with navigation to HomeScreen.
- Checkout: Displays the list of items in the cart.
- Footer: Displays the total amount and checkout button.

## Checkout
- Component that lists the selected items in the cart.
- Each item can be removed from the cart.
- Footer
- Displays the total amount of items in the cart and a checkout button.

## Header
- Used in both HomeScreen and CartScreen for navigation and app branding.
- ClothesArea
- Displays a list of products available for purchase.
- Each product has an "Add to cart" button.

## Context
- CartContext
- Manages the state of the cart, including adding and removing items.
- Local Storage
- Uses AsyncStorage to store selected items locally on the device.

## Implementation of Data Storage
- The application uses AsyncStorage to store the cart items locally on the device. 
- This ensures that the items added to the cart persist even when the app is closed and reopened.
- Adding to Cart: When a product is added to the cart, it is also saved in AsyncStorage.
- Removing from Cart: When a product is removed from the cart, it is also removed from AsyncStorage.
- Fetching Cart Items: On app launch, the cart items are fetched from AsyncStorage and loaded into the application's state.
![photo_2024-07-08_03-33-25](https://github.com/emmanuellaAk/rn-assignment6-11090094/assets/137521867/ff2a5e22-ab76-45cd-9460-3fe41af479bf)

##Screenshots
![photo_2024-07-03_22-10-09](https://github.com/emmanuellaAk/rn-assignment6-11090094/assets/137521867/521e0d1e-ee17-493c-991a-343141dcf076)

![photo_2024-07-03_22-09-53](https://github.com/emmanuellaAk/rn-assignment6-11090094/assets/137521867/47231231-79b6-4b86-9743-6945530c1e33)
