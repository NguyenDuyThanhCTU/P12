import PostDetail from "@components/client/Posts/PostDetail";
import { getDataByTypeProps } from "@components/lib/get-data";
import React from "react";

const PostDetailPage = async ({ params }: { params: { slug: string } }) => {
  const Data: any = [];
  let RelatedArticles: any = [];

  let TravelHandbookData: any = await getDataByTypeProps(
    "TravelHandbook",
    "url",
    params.slug
  );
  let GalleryData: any = await getDataByTypeProps(
    "gallery",
    "url",
    params.slug
  );
  let newsData: any = await getDataByTypeProps("news", "url", params.slug);

  if (TravelHandbookData.length > 0) {
    Data.push(TravelHandbookData[0]);
    RelatedArticles = TravelHandbookData;
  }
  if (GalleryData.length > 0) {
    Data.push(GalleryData[0]);
    RelatedArticles = GalleryData;
  }
  if (newsData.length > 0) {
    Data.push(newsData[0]);
    RelatedArticles = newsData;
  }

  return (
    <>
      {Data && RelatedArticles && (
        <PostDetail Data={Data[0]} RelatedArticles={RelatedArticles} />
      )}
    </>
  );
};

export default PostDetailPage;
