import { useEffect, useState } from "react";
import gojoImage from "../assets/gojo-satoru.png";
import sukunaImage from "../assets/sukuna.png";

type MemoryCard = {
  id: number;
  name: string;
  image?: string;
  flipped: boolean;
  matched: boolean;
};

const characters: { name: string; image: string }[] = [
  { name: "Yuji Itadori", image: "https://upload.wikimedia.org/wikipedia/en/2/27/Yuji_Itadori.png" },
  { name: "Megumi Fushiguro", image: "https://upload.wikimedia.org/wikipedia/en/0/08/Megumi_Fushiguro.png" },
  { name: "Nobara Kugisaki", image: "https://upload.wikimedia.org/wikipedia/en/8/86/NobaraKugisaki.png" },
  { name: "Meguru Bachira", image: "https://bluelock-anime-en.com/wp-content/themes/anime/assets/images/chara02_tmb.png" },
];
const shuffleCards = (cards: MemoryCard[]) => cards.sort(() => Math.random() - 0.5);

const createDeck = () => {
  const deck: MemoryCard[] = characters.flatMap((ch, index) => [
    { id: index * 2 + 1, name: ch.name, image: ch.image, flipped: false, matched: false },
    { id: index * 2 + 2, name: ch.name, image: ch.image, flipped: false, matched: false },
  ]);
  return shuffleCards(deck);
};

const MyFunSection = () => {
  const [cards, setCards] = useState<MemoryCard[]>(() => createDeck());
  const [firstChoice, setFirstChoice] = useState<number | null>(null);
  const [secondChoice, setSecondChoice] = useState<number | null>(null);
  const [disabled, setDisabled] = useState(false);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);

  const flippedCount = cards.filter((card) => card.flipped).length;
  const gameComplete = matches === characters.length;

  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setDisabled(false);
  };

  useEffect(() => {
    if (disabled) return;
    if (firstChoice !== null && secondChoice !== null) {
      const firstCard = cards.find((card) => card.id === firstChoice);
      const secondCard = cards.find((card) => card.id === secondChoice);

      if (!firstCard || !secondCard) {
        resetTurn();
        return;
      }

      setDisabled(true);
      setMoves((prev) => prev + 1);

      if (firstCard.name === secondCard.name) {
        setCards((prev) =>
          prev.map((card) =>
            card.name === firstCard.name
              ? { ...card, matched: true }
              : card,
          ),
        );
        setMatches((prev) => prev + 1);
        setTimeout(resetTurn, 600);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.id === firstChoice || card.id === secondChoice
                ? { ...card, flipped: false }
                : card,
            ),
          );
          resetTurn();
        }, 900);
      }
    }
  }, [firstChoice, secondChoice, cards]);

  const handleCardClick = (id: number) => {
    if (disabled) return;
    const clickedCard = cards.find((card) => card.id === id);
    if (!clickedCard || clickedCard.flipped || clickedCard.matched) return;

    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, flipped: true } : card,
      ),
    );

    if (firstChoice === null) {
      setFirstChoice(id);
    } else if (secondChoice === null) {
      setSecondChoice(id);
    }
  };

  const handleRestart = () => {
    setCards(createDeck());
    setFirstChoice(null);
    setSecondChoice(null);
    setDisabled(false);
    setMoves(0);
    setMatches(0);
  };

  return (
    <section id="my-fun" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.4em] text-muted-foreground mb-2 font-mono">
            // MEMORY GAME JUJUTSU KAISEN
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-wider text-primary glow mb-2">
            GOJO VS SUKUNA
          </h2>
          <p className="font-mono text-sm text-muted-foreground max-w-2xl mx-auto">
            Retrouve les paires de cartes : 2 Yuji, 2 Migumi, 2 Nobara et 2 Bakira. Gojo et Sukuna sont tes adversaires.
          </p>
        </div>

        <div className="rounded-3xl border border-border/30 bg-background/80 p-8 shadow-2xl">
          <div className="grid gap-4 lg:grid-cols-[1fr_1fr] items-center mb-8">
            <div className="rounded-3xl border border-border/30 bg-slate-950/80 p-6 text-center">
              <img src={gojoImage} alt="Gojo Satoru" className="mx-auto h-28 w-28 rounded-full object-cover" />
              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">Adversaire</p>
              <h3 className="mt-2 text-2xl font-bold text-white">Gojo Satoru</h3>
            </div>
            <div className="rounded-3xl border border-border/30 bg-slate-950/80 p-6 text-center">
              <img src={sukunaImage} alt="Sukuna" className="mx-auto h-28 w-28 rounded-full object-cover" />
              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">Adversaire</p>
              <h3 className="mt-2 text-2xl font-bold text-white">Sukuna</h3>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-4 mb-8">
            {cards.map((card) => (
              <button
                key={card.id}
                type="button"
                onClick={() => handleCardClick(card.id)}
                className={`rounded-3xl border border-border/40 p-6 shadow-xl transition-transform duration-200 ${
                  card.flipped || card.matched
                    ? "bg-slate-100 text-slate-950"
                    : "bg-slate-950 text-white hover:-translate-y-1"
                }`}
              >
                <div className="flex h-full flex-col items-center justify-center gap-2">
                  {card.flipped || card.matched ? (
                    <>
                      <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Carte</span>
                      {card.image ? (
                        <img src={card.image} alt={card.name} className="h-20 w-20 object-contain" />
                      ) : (
                        <span className="text-xl font-bold">{card.name}</span>
                      )}
                      <span className="text-xs text-muted-foreground">{card.name}</span>
                    </>
                  ) : (
                    <>
                      <span className="text-4xl">?</span>
                      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Retourne</span>
                    </>
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-3 text-center text-sm font-mono text-muted-foreground">
            <div className="rounded-3xl border border-border/40 bg-slate-950/80 p-4">
              <p className="text-[10px] uppercase tracking-[0.2em]">Mouvements</p>
              <p className="text-2xl font-semibold text-white">{moves}</p>
            </div>
            <div className="rounded-3xl border border-border/40 bg-slate-950/80 p-4">
              <p className="text-[10px] uppercase tracking-[0.2em]">Paires trouvées</p>
              <p className="text-2xl font-semibold text-white">{matches} / {characters.length}</p>
            </div>
            <div className="rounded-3xl border border-border/40 bg-slate-950/80 p-4">
              <p className="text-[10px] uppercase tracking-[0.2em]">Statut</p>
              <p className="text-2xl font-semibold text-white">
                {gameComplete ? "Victoire !" : `${flippedCount} carte(s) ouverte(s)`}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
            {gameComplete ? (
              <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-center text-sm text-emerald-300">
                🎉 Tu as remis toutes les paires ! Clique sur redémarrer pour recommencer.
              </div>
            ) : null}
            <button
              type="button"
              onClick={handleRestart}
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground transition hover:bg-primary/90"
            >
              Redémarrer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyFunSection;
