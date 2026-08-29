const CaseStudyAppRating = () => (
  <div className="min-h-screen w-full bg-background">
    <div className="sticky top-0 z-50 bg-foreground px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-background">
      Work in progress
    </div>
    <iframe
      title="App Rating Turnaround case study (work in progress)"
      src={`${import.meta.env.BASE_URL}cs1-app-rating.html`}
      className="block h-[calc(100vh-34px)] w-full border-0"
    />
  </div>
);

export default CaseStudyAppRating;
