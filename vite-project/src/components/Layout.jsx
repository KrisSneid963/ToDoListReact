import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6 pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;