import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-4xl font-bold mb-4">🏠 Welcome to the Home Page</h1>
        <p className="text-lg text-gray-300">Click on "To-Do List" to manage your daily tasks.</p>
      </div>
    </Layout>
  );
};

export default Home;
