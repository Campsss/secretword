import './GameOver.css';

const GameOver = ({retry,score}) => {
 
  if (score === 700) {
    return (
      <div className="gameover">
        <h1>Parabéns! Você venceu o jogo!</h1>
        <h2>Sua pontuação final foi: <span>{score}</span></h2>
        <button onClick={retry}>Jogar novamente</button>
      </div>
    );
  }   

else {
  return (
    <div className="gameover">
      <h1>Fim de jogo!</h1>
      <h2>Sua pontuação final foi: <span>{score}</span></h2>
      <button onClick={retry}>Tentar novamente</button>
    </div>
  );
}
};
export default GameOver;