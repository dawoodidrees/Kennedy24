"use client";

import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import Footer from "@/components/common/Layout/Footer";
import Header from "@/components/common/Layout/Header";
import Modal from "@/components/common/Modal";
import { store } from "@/redux/store";

export default function Wrapper({ children }: PropsWithChildren) {
  return (
    <Provider store={store}>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
      <Modal />
    </Provider>
  );
}
