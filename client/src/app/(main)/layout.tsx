import TopBar from "@/components/layouts/topBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col">
        <TopBar />

        <main className="">{children}</main>
      </div>
    </>
  );
}
