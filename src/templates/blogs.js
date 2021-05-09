import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { Grid, Card, CardActionArea, CardContent, Typography } from '@material-ui/core';


import { makeStyles } from '@material-ui/core/styles';
import Pagination from "../components/pagination"
import Search from '../components/search'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
  },
  link: {
    textAlign: 'center',
    textDecoration: 'none',
    color: theme.palette.text.secondary,
  },
  image: {
    maxHeight: '60vh'
  },
}));


const BlogIndex = ({ data, pageContext }) => {
 
  const posts = data.allMarkdownRemark.edges
  const classes = useStyles();

  return (
    <Layout>
        <Grid container justify="center" direction="column">
          <Grid container justify="center" item xs={12}>
            <Typography variant="h3" gutterBottom>
                Hello world!
            </Typography>
            </Grid>
          <Grid container item xs={12} justify="center">
            <Search />
          </Grid>
            <Grid container item xs={12} justify="center">
            <Pagination pageContext={pageContext} />
          </Grid>
        </Grid>
        <Grid container justify="center">
          {posts.map(({ node }) => {
            const { excerpt } = node
            const { slug } = node.fields
            const { title, date, description, featuredImage, featuredImgAlt } = node.frontmatter
            return (
              <Grid item xs={8} key={slug} className={classes.paper}>
                <Link className={classes.link} to={`/blogs/${slug}`}>
                  <Card variant="outlined">
                    <CardActionArea>
                      <Img className={classes.image} fluid={featuredImage.childImageSharp.fluid} alt={featuredImgAlt} />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {title}
                        </Typography>
                        <Typography gutterBottom variant="body1" component="p" dangerouslySetInnerHTML={{
                          __html: description || excerpt,
                        }}>
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                          {date}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            )
          }
          )}
        </Grid>
      <Grid container item xs={12} justify="center">
          <Pagination pageContext={pageContext} />
      </Grid>
    </Layout >
  )
}

BlogIndex.propType = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
}

export const pageQuery = graphql`
query ($skip: Int!, $limit: Int!){
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    limit: $limit
    skip: $skip
  ) {
    edges {
      node {
        excerpt(pruneLength: 500)
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          shortdescription
          featuredImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          featuredImgAlt
        }
        fields {
          slug
        }
        html
      }
    }
  }
}
`

export default BlogIndex

