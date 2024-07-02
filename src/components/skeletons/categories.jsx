import React from "react";
import Skeleton from "react-loading-skeleton";

const HomeCategoriesSkeleton = () => {
  return (
    <div className="flex gap-4">
      <Skeleton borderRadius={12} width={250} height={288} />
      <Skeleton borderRadius={12} width={250} height={288} />
      <Skeleton borderRadius={12} width={250} height={288} />
      <Skeleton borderRadius={12} width={250} height={288} />
      <Skeleton borderRadius={12} width={250} height={288} />
    </div>
  );
};

export default HomeCategoriesSkeleton;
