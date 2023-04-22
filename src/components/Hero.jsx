import { logo } from "../assets/index";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-28 object-contain" />
        <button
          className="black_btn"
          onClick={() =>
            window.open("https://github.com/NuZard84/ai-summarizer")
          }
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAi GPT</span>
      </h1>
      <h2 className="desc">
        Effortlessly distill large volumes of text into concise summaries with
        our AI summarizer powered by OpenAI&#39;s state-of-the-art natural
        language processing technology.
      </h2>
    </header>
  );
};

export default Hero;
