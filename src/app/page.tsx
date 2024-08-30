import Header from './components/Header'; 
import Footer from './components/Footer'; 

export default function Home() {
  return (
    <main className="flex justify-center lg:items-center md:items-center bg-black min-h-screen">
      <div className="card-container rounded max-w-md w-full mx-auto text-white lg:max-h-screen lg:overflow-auto">
        <Header />
        <Footer />
      </div>
    </main>
  );
}
