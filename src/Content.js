import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Card, CardContent } from "@mui/material";

export default function Content({ likedSubmissions }) {
  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography variant="h4">Liked Form Submissions</Typography>

      {likedSubmissions?.length ? (
        <Box display="flex" flexDirection="column" gap={3} my={3}>
          {likedSubmissions?.map(({ data, id }) => (
            <Card key={id}>
              <CardContent sx={{ height: "100%" }}>
                <Typography variant="h5" component="div">
                  {`${data.firstName ?? "-"} ${data.lastName ?? "-"}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.email}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      ) : (
        <Typography variant="body1" sx={{ fontStyle: "italic", marginTop: 1 }}>
          No Liked Submission Found
        </Typography>
      )}
    </Box>
  );
}
