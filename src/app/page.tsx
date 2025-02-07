import Hero from "@/app/components/about/hero";
import About from "@/app/components/about/page";
import Contact from "@/app/components/contact/page";
import MenuPage from "@/app/components/menu/page";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <MenuPage/>
      <About/>
      <Contact/>
    </div>
  );
}