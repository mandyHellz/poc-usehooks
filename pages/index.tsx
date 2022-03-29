import type { NextPage } from "next";
import {
  MutableRefObject,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import UseStateExample from "../components/UseStateExample/UseStateExample";
import { ExampleContext } from "../ExamplesContext";
import { FetchApi } from "api-monorepo/dist/pokeapi";
import { ButtonComponent } from "api-monorepo/dist/github";

const Home: NextPage = () => {
  const audioRef: MutableRefObject<any> = useRef(null);
  const [sayHello, setSayHello] = useState(false);
  const [countMemo, setCountMemo] = useState(80);
  const [isPlaying, setIsPlaying] = useState(false);

  // Neste exemplo, ele irá fazer o log sempre que o estado para qual ele olha for atualizado
  useEffect(() => {
    console.log("useEffect: me apertaram");
  }, [sayHello]);

  // memoiza o callback e aguarda sua execução
  const doCallback = useCallback(() => {
    console.log(`Imprime o valor de "sayHello" que é ${sayHello}, no momento.`);
  }, [sayHello]);

  // parecido com callback, mas é executado a cada renderização
  // guardando o valor de countMemo e escutando-o para realizar o update do resultado
  const doMemo = useMemo(() => {
    const newCountvalue = countMemo * 5;
    return newCountvalue;
  }, [countMemo]);
  // função que vai alterar o valor de countMemo, e consequentemente o valor armazenado em doMemo
  const modifyMemo = () => {
    const newCountMemo = countMemo * 10;
    setCountMemo(newCountMemo);
  };

  // useRef para capturar o objeto DOM (audio tag nesse caso) e interagir com as propriedades dele
  const playAudioHandler = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  // importa os valores do contexto para uso
  const data = useContext(ExampleContext);

  return (
    <>
      <div className="mx-auto text-center w-1/3 my-20">
        {/* useEffect */}
        <div className="my-10">
          {sayHello ? <p className="text-red-300 text-2xl">HELLO</p> : ""}
          <button
            onClick={() => setSayHello(!sayHello)}
            className="border p-1 w-1/3"
          >
            Hi?
          </button>
        </div>

        {/* useState */}
        <UseStateExample className="my-10" />

        {/* useCallback */}
        <button onClick={() => doCallback()} className="border p-1">
          Executar callBack
        </button>

        {/* useMemo */}
        <div className="my-10">
          <p>O valor armazenado em countMemo é {countMemo}.</p>
          <p>
            O valor armazenado da função doMemo é{" "}
            <strong className="text-red-500">{doMemo}</strong> e só irá
            atualizar se o estado de countMemo mudar!
          </p>

          <button onClick={() => modifyMemo()} className="border my-2 p-1">
            Alterar o countMemo
          </button>

          <p>
            O novo valor armazenado em doMemo é{" "}
            <strong className="text-red-500">{doMemo}</strong>
          </p>
        </div>

        {/* useRef */}
        <div className="my-10">
          <img
            src="https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg"
            alt="cd-cover"
            className="cursor-pointer w-50 mx-auto"
            onClick={playAudioHandler}
          />
          <audio
            ref={audioRef}
            src="https://mp3.chillhop.com/serve.php/?mp3=11245"
          ></audio>
        </div>

        {/* useContext */}
        <p className="my-10">{data}</p>
      </div>

      {/* monorepo api and router tests
      <FetchApi pokename={"mewtwo"} />
      <ButtonComponent repoOwner={"rocketseat"} /> */}
    </>
  );
};

export default Home;
