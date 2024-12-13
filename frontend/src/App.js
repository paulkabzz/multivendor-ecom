import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import {
  LoginPage,
  ActivationPage,
  SignUpPage,
  HomePage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
  ProductDetailsPage,
  ProfilePage,
} from "./Routes.js";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store.js";
import { loadUser } from "./redux/actions/user.js";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const { loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <>
      {loading ? null : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route
              path="/activation/:activation_token"
              element={<ActivationPage />}
            />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/best-selling" element={<BestSellingPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="products/:name/:id" element={<ProductDetailsPage />} />
            <Route path="/*" element={<NotFound />} />
            <Route
              path="profile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            {/* <Route path="/about" element={<About />} />
              <Route path="/carrers" element={<Careers />} />
              <Route path="/store-locations" element={<StoreLocations />} />
              <Route path="/our-blog" element={<OurBlog />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/live-chat" element={<LiveChat />} /> */}
          </Routes>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />

        </BrowserRouter>
      )}
    </>
  );
}


const NotFound = () => {
  return (
    <div className="container h-screen flex items-center justify-center w-full bg-red-50">
      <h1>404 - Page Not Found</h1>
    </div>
  );
}

export default App;
