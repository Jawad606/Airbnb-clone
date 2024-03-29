import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/models/Modal";
import RegistorModel from "./components/models/RegistorModel";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModel from "./components/models/LoginModal";
import { getCurrentUser } from "./actions/getCurrentUser";
import RentModal from "./components/models/RentModal";
import SearchModal from "./components/models/SearchModal";

export const metadata = {
  title: "Airbnb-clone",
  description: "Generated by create next app",
};

// const font = Nunito({ subsets: ["latin"] });
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body >
        <ClientOnly>
          <ToasterProvider />
          <SearchModal/>
          <RegistorModel />
          <LoginModel />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">
        {children}

        </div>
      </body>
    </html>
  );
}
