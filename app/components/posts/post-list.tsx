import { Box, Grid2, Typography } from "@mui/material";
import PostCard from "./post-card";
import { Image, Slug, PortableTextBlock } from "sanity";
import { getPostForHomePageListing } from "@/sanity/utils/queries";

export interface SanitPostsList {
  title: string;
  slug: Slug;
  mainImage: Image;
  body: PortableTextBlock[];
}

export default async function PostList() {
  const postdata: SanitPostsList[] = await getPostForHomePageListing();

  return (
    <Box
      sx={{
        mt: 4,
      }}
    >
      <Typography gutterBottom align="center" variant="h4">
        Frequently Asked Questions
      </Typography>
      <Grid2 container gap={2} sx={{ px: 4, py: 8 }} alignItems="stretch">
        {postdata.map((post) => {
          return (
            <Grid2 size={{ md: 4 }} key={post.slug.current}>
              <PostCard post={post} />
            </Grid2>
          );
        })}
      </Grid2>
    </Box>
  );
}
