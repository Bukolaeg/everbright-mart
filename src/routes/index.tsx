import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import HomePage from "../features/home/HomePage";
import ProductsPage from "../features/products/ProductsPage";
import ProductDetailsPage from "../features/products/ProductDetailsPage";
import CartPage from "../features/cart/CartPage";
import CheckoutPage from "../features/checkout/CheckoutPage";
import LoginPage from "../features/auth/LoginPage";
import RegisterPage from "../features/auth/RegisterPage";
import SellerDashboard from "../features/seller/SellerDashboard";
import AdminDashboard from "../features/admin/AdminDashboard";
import AboutPage from "../features/about/AboutPage";
import ContactPage from "../features/contact/ContactPage";
import CategoriesPage from "../features/categories/CategoriesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "seller",
        element: <SellerDashboard />,
      },
      {
        path: "admin",
        element: <AdminDashboard />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "categories",
        element: <CategoriesPage />,
      },    
    ],
  },
]);

export default router;