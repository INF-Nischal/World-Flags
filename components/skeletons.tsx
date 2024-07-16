export function CardSkeleton() {
  return (
    <div
      className={`shimmer relative flex flex-col overflow-hidden rounded-md bg-gray-100 shadow-sm`}
    >
      <div className="h-48 w-full bg-gray-200"></div>
      <div className="description px-8 py-6 flex flex-col gap-2">
        <div className="h-6 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}
