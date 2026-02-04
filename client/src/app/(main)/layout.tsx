import TopBar from "@/components/layouts/topBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <TopBar />

        <main className="flex-1 pt-25">{children}</main>
      </div>
    </>
  );
}
