import React from "react";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

const data = [
  {
    src:
      'https://i.ytimg.com/vi/pndPbpHLpos/mqdefault.jpg',
    title: "Women's Self-defense That Actually Works! (Gracie Jiu-Jitsu",
    channel: 'GracieBreakdown',
    views: '2,8 M views',
    createdAt: '4 years ago',
  },
  {
    src:
      'https://i.ytimg.com/vi/-V4vEyhWDZ0/mqdefault.jpg',
    title: '5 Choke Hold Defenses Women MUST Know | Self Defense',
    channel: 'Aja Dang',
    views: '2,4 M',
    createdAt: '1 year ago',
  },
  {
    src:
      'https://i.ytimg.com/vi/jAh0cU1J5zk/mqdefault.jpg',
    title: "Women's Self-defense Technique - Man Pinning Both Wrists in Mount Position",
    channel: 'GracieBreakdown',
    views: '1,2 M views',
    createdAt: '1 year ago',
  },
  {
    src:
      'https://i.ytimg.com/vi/0hutZhvUDDE/mqdefault.jpg',
    title: 'Gracie Women Empowered w/ Sage Northcutt',
    channel: 'Cesare Wright',
    views: '451 K views',
    createdAt: '4 years ago',
  },
  {
    src:
      'https://i.ytimg.com/vi/n5eMDQsZf8g/mqdefault.jpg',
    title: '8 Jiu-Jitsu Chokes EVERY Woman Should Know!',
    channel: 'GracieBreakdown',
    views: '102,2 k views',
    createdAt: '2 years ago',
  },
  {
    src:
      'https://i.ytimg.com/vi/ybQ__WdAqvE/mqdefault.jpg',
    title: 'Why EVERY Child Needs Jiu-Jitsu',
    channel: 'GracieBreakdown',
    views: '1,7 M views',
    createdAt: '4 years ago',
  },
];
function BlogCategory(props) {
  const { loading = false } = props;

  return (
    <Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(6)) : data).map((item, index) => (
        <Box key={index} width={210} marginRight={0.5} my={5}>
          {item ? (
            <img style={{ width: 210, height: 118 }} alt={item.title} src={item.src} />
          ) : (
            <Skeleton variant="rect" width={210} height={118} />
          )}

          {item ? (
            <Box pr={2}>
              <Typography gutterBottom variant="body2">
                {item.title}
              </Typography>
              <Typography display="block" variant="caption" color="textSecondary">
                {item.channel}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {`${item.views} • ${item.createdAt}`}
              </Typography>
            </Box>
          ) : (
            <Box pt={0.5}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}

/* AIzaSyC_eUxZEUZjpFIetfsLfxHhpZ2J-NWE40A */

export default BlogCategory;