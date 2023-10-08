import { SkeletonProductCard } from "@components/items/server-items/Skeleton";

export default function Loading() {
  return (
    <div className="space-y-4 mt-12">
      <div className="grid grid-cols-3 gap-12">
        <SkeletonProductCard isLoading={true} />
        <SkeletonProductCard isLoading={true} />
        <SkeletonProductCard isLoading={true} />
        <SkeletonProductCard isLoading={true} />
        <SkeletonProductCard isLoading={true} />
        <SkeletonProductCard isLoading={true} />
        <SkeletonProductCard isLoading={true} />
        <SkeletonProductCard isLoading={true} />
        <SkeletonProductCard isLoading={true} />
        <SkeletonProductCard isLoading={true} />
        <SkeletonProductCard isLoading={true} />
        <SkeletonProductCard isLoading={true} />
      </div>
    </div>
  );
}
