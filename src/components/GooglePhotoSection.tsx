const photos = [
  {
    title: "Google Logo",
    description: "Logo officiel de Google utilisé comme photo de marque.",
    src: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    alt: "Logo Google",
  },
  {
    title: "Page de recherche Google",
    description: "Interface de la recherche Google.",
    src: "https://www.google.com/images/branding/product/1x/search_512dp.png",
    alt: "Google Search",
  },
  {
    title: "Google Workspace",
    description: "Icône représentant les outils Google Workspace.",
    src: "https://www.google.com/images/branding/product/1x/workspace_512dp.png",
    alt: "Google Workspace",
  },
];

const GooglePhotoSection = () => (
  <section id="google-photos" className="py-24 relative">
    <div className="container mx-auto px-6">
      <div className="text-center mb-10">
        <p className="text-xs tracking-[0.4em] text-muted-foreground mb-2 font-mono">
          // GOOGLE PHOTOS
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-wider text-primary glow mb-2">
          PHOTOS GOOGLE
        </h2>
        <p className="font-mono text-sm text-muted-foreground max-w-2xl mx-auto">
          Trois images Google officielles, non générées par IA.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {photos.map((photo) => (
          <div key={photo.title} className="rounded-3xl overflow-hidden border border-border/30 bg-slate-950 shadow-2xl">
            <div className="bg-slate-900 p-6 flex items-center justify-center min-h-[180px]">
              <img src={photo.src} alt={photo.alt} className="max-h-36 object-contain" />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2 text-white">{photo.title}</h3>
              <p className="text-sm text-muted-foreground">{photo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GooglePhotoSection;
