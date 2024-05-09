import Link from "next/link";

const Home = () => {
  return (
    <>
      <header className="w-full flex justify-end">
        <div className="sm:mt-5 sm:ml-5 md:ml-5 mt-5 lg:mr-40 lg:mb-40">
          <h1 className="text-1xl lg:text-3xl bg-gradient-to-r from-orange-600 to-yellow-400 inline-block text-transparent bg-clip-text font-bold">
            Tastiest recipes
          </h1>
          <p className="text-xl text-white mt-5 mb-5">
            Explore recipes shared by the community!
          </p>
          <Link
            className="bg-gradient-to-r from-orange-600 to-yellow-400 inline-block text-transparent font-bold bg-clip-text mr-5"
            href="/community"
          >
            Join the community
          </Link>
          <Link
            className="text-white font-bold bg-orange-500 py-2 px-4 rounded-md shadow-md transition duration-200 ease-in-out transform hover:-translate-y-1"
            href="/recipes"
          >
            Explore Recipes
          </Link>
        </div>
      </header>
      <main>
        <div className="w-full flex mt-10">
          <section className="max-w-lg mx-auto text-center">
            <h2 className="text-white text-5xl mb-10 text-center">
              How it works?
            </h2>
            <p className="text-white text-center mb-2">
              Tastiest recipes is a platform for foodies to share their favorite
              recipes with the world. It&lsquo;s a place to discover new dishes,
              and to connect with other food lovers.
            </p>
            <p className="text-white mb-10 text-center">
              Tastiest recipes is a place to discover new dishes, and to connect
              with other food lovers.
            </p>
          </section>
          <section className="max-w-lg mx-auto text-center">
            <h2 className="text-white text-5xl mb-10 text-center">
              Why Tastiest recipes?
            </h2>
            <p className="text-white text-center mb-2">
              Tastiest recipes is a platform for foodies to share their favorite
              recipes with the world. It&lsquo;s a place to discover new dishes,
              and to connect with other food lovers.
            </p>
            <p className="text-white text-center">
              Tastiest recipes is a place to discover new dishes, and to connect
              with other food lovers.
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
