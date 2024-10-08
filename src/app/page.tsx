export default function Home() {
  return (
    <div className="space-y-2 mt-10">
      <h1 className="text-3xl font-bold sm:text-5xl">Share Your Data</h1>
      <p className="max-w-[600px] text-muted-foreground md:text-xl">
        Our app makes easy to share your{" "}
        <span className="text-bold bg-yellow-400 text-black">JSON</span> data
        with others. Simply authenticate and upload your data.
      </p>
    </div>
  );
}
