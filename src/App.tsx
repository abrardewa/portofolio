import Navbar from "./component/navbar";
import Home from "./component/home";
import Education from "./component/education";
import Projects from "./component/projects";
import Works from "./component/works";

function App() {
  return (
    <div className="scroll-smooth bg-soft-white dark:bg-slate-800 transition-colors duration-300">
      <Navbar />
      <Home />
      <Education />
      <Projects />
      <Works />
      <div className="flex items-center justify-center bottom-0 border-t-2 w-full h-16 text-center  text-sm md:text-base text-soft-dark dark:text-soft-white backdrop-blur-md bg-soft-white/80 dark:bg-slate-800/80">
        Created by Abrar Dewa Pratama Barus @2023
      </div>
    </div>
  );
}

export default App;
