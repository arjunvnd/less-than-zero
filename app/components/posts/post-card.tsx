import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { toPlainText } from "next-sanity";
import { SanitPostsList } from "./post-list";
import Link from "next/link";

const builder = imageUrlBuilder(client);

function urlFor(source: string) {
  return builder.image(source);
}

export default function PostCard({ post }: { post: SanitPostsList }) {
  return (
    <Card sx={{ height: "100%" }}>
      {post?.mainImage?.asset?._ref && (
        <Image
          src={urlFor(post?.mainImage?.asset?._ref).width(345).url()}
          width="400"
          height={194}
          alt={post?.mainImage?.alt as string}
          style={{
            objectFit: "contain",
            maxHeight: 200,
          }}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" component="div">
          {toPlainText(post.body).substring(0, 100)}...
        </Typography>
      </CardContent>
      <CardActions className="justify-end">
        <Link href={`/posts/${post.slug.current}`}>
          <Button variant="contained">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
