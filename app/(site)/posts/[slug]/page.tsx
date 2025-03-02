import { getPost } from "@/sanity/utils/queries";
import { Box, Typography } from "@mui/material";
import { PortableText } from "next-sanity";

interface ViewPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ViewPost({ params }: ViewPostProps) {
  const { slug } = await params;
  const post = await getPost(slug);
  return (
    <Box
      sx={{
        px: 3,
      }}
    >
      <Typography gutterBottom variant="h3">
        {post.title}
      </Typography>
      <PortableText value={post.body} />
    </Box>
  );
}
