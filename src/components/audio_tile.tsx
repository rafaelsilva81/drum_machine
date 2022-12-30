import { useEffect, useState } from "react";

const AudioTile = (props: { tile: string; volume: number }) => {
  const [active, setActive] = useState(false);
  const { tile } = props;

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === tile) {
        setActive(true);
        var audio = document.getElementById(tile) as HTMLAudioElement;
        audio && audio.play();
      }
    });

    document.addEventListener("keyup", (e) => {
      if (e.key === tile) {
        setActive(false);
      }
    });
  }, [tile]);

  useEffect(() => {
    var audio = document.getElementById(tile) as HTMLAudioElement;
    audio && (audio.volume = props.volume);
  }, [props.volume, tile]);

  return (
    <div key={tile}>
      <audio id={tile}>
        <source src={`/audios/${tile}.mp3`} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button
        id={`button-${tile}`}
        className={`flex flex-col items-center justify-center p-10 m-2 border border-black active:bg-gray-400 ${
          active ? "bg-gray-300" : "bg-white"
        }`}
        onClick={() => {
          var audio = document.getElementById(tile) as HTMLAudioElement;
          audio && audio.play();
        }}
      >
        <h1 className="text-4xl">{tile}</h1>
      </button>
    </div>
  );
};

export default AudioTile;
