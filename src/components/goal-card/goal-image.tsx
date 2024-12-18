import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BgAnimatedGradient } from "@/components/bg-animated-gradient";
import { storage } from "@/lib/appwrite/storage";

interface GoalImageProps {
  imageId?: string | null;
}

export function GoalImage({ imageId }: GoalImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (imageId) {
      const url = storage.getGoalPhotoUrl({ photoId: imageId });
      setImageUrl(url);
    }
  }, [imageId]);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-md">
      {imageUrl ? (
        <Image
          fill
          src={imageUrl}
          alt="Goal"
          className="bg-muted object-cover object-center"
          onError={() => setImageUrl(null)}
        />
      ) : (
        <>
          <BgAnimatedGradient gradientBackgroundStart="rgb(14, 165, 233)" gradientBackgroundEnd="rgb(236, 72, 153)" />
          <span className="sr-only">Goal image placeholder</span>
        </>
      )}
    </div>
  );
}
