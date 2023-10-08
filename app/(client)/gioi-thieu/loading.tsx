import { SkeletonListCard } from "@components/items/server-items/Skeleton";

export default function Loading() {
  return (
    <div className="space-y-4 mt-12">
      <div className="grid grid-cols-3 gap-12">
        <SkeletonListCard isLoading={true} />
      </div>
    </div>
  );
}
