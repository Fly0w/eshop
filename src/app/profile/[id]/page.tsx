export default function Profile({ params }: { params: { id: number } }) {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <p>Profile number {params.id}</p>
    </main>
  );
}
