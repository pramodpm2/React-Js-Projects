import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function CardComponent() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <Card className={classes.root}>
            <div>
              <img
                src="https://www.holidify.com/images/bgImages/KARNATAKA.jpg"
                alt=""
                srcset=""
                height="200px"
                width="100%"
              />
            </div>
            <CardContent>
                          <Typography variant="body2" color="textSecondary" component="p">
                              <strong>Vijayadashami</strong><br></br>
                Vijayadashami (IAST: Vijayadaśamī) also known as Dussehra,
                Dasara or Dashain, is a major Hindu festival celebrated at the
                end of Navaratri every year. It is observed on the tenth day in
                the Hindu calendar month of Ashvin, the seventh month of the
                Hindu Luni-Solar Calendar, which typically falls in the
                Gregorian months of September and October.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card className={classes.root}>
            <div>
              <img
                src="https://www.holidify.com/images/bgImages/HAMPI.jpg"
                alt=""
                srcset=""
                height="200px"
                width="100%"
              />
            </div>
            <CardContent>
                          <Typography variant="body2" color="textSecondary" component="p">
                              <strong>Hampe</strong><br></br>
                Hampi or Hampe, also referred to as the Group of Monuments at
                Hampi, is a UNESCO World Heritage Site located in east-central
                Karnataka, India. Hampi was the capital of the Vijayanagara
                Empire in the 14th century. Chronicles left by Persian and
                European travellers, particularly the Portuguese, say that Hampi
                was a prosperous, wealthy and grand city near the Tungabhadra
                River, with numerous temples.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card className={classes.root}>
            <div>
              <img
                src="https://th.bing.com/th/id/OIP.kVWubN55qZZCYZvcwgfvRgHaE6?pid=ImgDet&rs=1"
                alt=""
                srcset=""
                height="200px"
                width="100%"
              />
            </div>
            <CardContent>
                          <Typography variant="body2" color="textSecondary" component="p">
                              <strong>Coorg Dance</strong><br />
                Coorg Dance form: Equally colourful, vibrant and participatory
                are dance forms of Kodavas. The week after the harvest festival
                Puthari is usually the time for the villagers to gather in what
                is called mand and dance. While bolkkaat, Kolaat, Kattiyaat
                among others are for men and the popular ummattaat is for women.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: "3%" }}>
        <Grid xs={4}>
          <Card className={classes.root}>
            <div>
              <img
                src="https://www.holidify.com/images/bgImages/DHARMASTHALA.jpg"
                alt=""
                srcset=""
                height="200px"
                width="100%"
              />
            </div>
            <CardContent>
                          <Typography variant="body2" color="textSecondary" component="p">
                              <strong>Dharmasthala Temple</strong><br></br>
                Dharmasthala Temple (Kṣētra Dharmasthala) is an 800-year-old
                religious institution in the temple town of Dharmasthala in
                Dakshina Kannada, Karnataka, India. The deities of the temple
                are Shiva, who is referred to as Mañjunatha, Ammanavaru, the
                Tirthankara Chandraprabha and the protective gods of Jainism,
                Kalarahu, Kalarkayi, Kumarasvami and Kanyakumari. The temple is
                considered unique since it belongs to the Shaiva sect of
                Hinduism.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card className={classes.root}>
            <div>
              <img
                src="https://www.holidify.com/images/bgImages/CHIKMAGALUR.jpg"
                alt=""
                srcset=""
                height="200px"
                width="100%"
              />
            </div>
            <CardContent>
                          <Typography variant="body2" color="textSecondary" component="p">
                              <strong>Chikmagalur</strong><br></br>
                Chikmagalur, known officially as Chikkamagaluru, is a city and
                the headquarters of Chikmagalur district in the Indian state of
                Karnataka. Located on the foothills of the Mullayanagiri peak of
                the Western Ghats, the city attracts tourists from around the
                state for its pleasant and favourable hill station climate,
                tropical rainforest and coffee estates.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card className={classes.root}>
            <div>
              <img
                src="https://www.ritiriwaz.com/wp-content/uploads/2017/03/Yaksha-Gana.jpg"
                alt=""
                srcset=""
                height="200px"
                width="100%"
              />
            </div>
            <CardContent>
                          <Typography variant="body2" color="textSecondary" component="p">
                              <strong>Yakshagana</strong><br></br>
                The southern state of Karnataka, in India, has a distinct art
                and culture informed by a long history of diverse linguistic and
                religious ethnicity. Apart from Kannadigas, Karnataka is home to
                Tuluvas, who also consider themselves as Kannadigas.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: "3%" }}>
        <Grid xs={4}>
          <Card className={classes.root}>
            <div>
              <img
                src="https://www.holidify.com/images/cmsuploads/compressed/Mysorepalace_20191209144837.jpg"
                alt=""
                srcset=""
                height="200px"
                width="100%"
              />
            </div>
            <CardContent>
                          <Typography variant="body2" color="textSecondary" component="p">
                              <strong>Mysore Palace</strong><br></br>
                From its exuberant art and culture of multilingual ethnicity,
                astounding dance forms, mesmerising music, sophisticated
                heritage, zealous festivities, elegant clothing and delectable
                cuisine Karnataka has a plethora of historical secrets,
                interwoven within a rich and varied culture. It is a major
                tourist attraction with cities like Bangalore, the scenic Coorg,
                the lesser known hill town of Chikmagalur, and heritage sites
                like Hampi, which attract countless people every year.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card className={classes.root}>
            <div>
              <img
                src="https://www.holidify.com/images/cmsuploads/compressed/Mysore_Painting_20180919110458.jpg"
                alt=""
                srcset=""
                height="250px"
                width="100%"
              />
            </div>
            <CardContent>
                          <Typography variant="body2" color="textSecondary" component="p">
                              <strong>Art and Culture of Karnataka</strong><br></br>
                Earlier, painting involved not only the act itself but the
                entire process, from making one's colours to watching as they
                come to life. Paper, wood, cloth, etc. were some of the
                materials artists used as a base for their paintings. Brushes
                weren't made from synthetic materials but were made from the
                original hair of animals like camels, goat, and squirrel. The
                Mysuru style of paintings usually are representations of
                legends, mythical scenes, and the royal family.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card className={classes.root}>
            <div>
              <img
                src="https://www.holidify.com/images/cmsuploads/articles/274.jpg"
                alt=""
                srcset=""
                height="200px"
                width="100%"
              />
            </div>
            <CardContent>
                          <Typography variant="body2" color="textSecondary" component="p">
                              <strong>Heritage of Karnataka</strong> <br />
                Once home to the Vijayanagara Empire and four different
                dynasties that lasted for 300 years, Hampi now is a UNESCO World
                Heritage Site. The ruins of the Empire can be found in the form
                of temples, architectural marvels, the famous musical pillars,
                royal enclosures and scattered monuments. Hampi, housing these
                ancient ruins doesn't fail to attract abundant tourists every
                year.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: "3%" }}>
        <Grid xs={4}>
          <Card className={classes.root}>
            <div>
              <img
                src="https://www.holidify.com/images/cmsuploads/articles/277.jpg"
                alt=""
                srcset=""
                height="200px"
                width="100%"
              />
            </div>
            <CardContent>
                          <Typography variant="body2" color="textSecondary" component="p">
                              <strong>Festivals of Karnataka</strong> <br></br>
                The recent uproar over Tamil Nadu's bull-taming festival of
                Jallikattu has drawn attention to Karnataka's Buffalo race
                called Kambala. The annual buffalo race, a two-day festival, is
                an integral part of the rural community and is considered a
                sport as well as a tradition. Earlier, the rewards used to be
                coconuts, but these have been replaced by medals in recent
                times. The festival can be traced back over 800 years and is
                celebrated to please Lord Kadri Manjunatha, an incarnation of
                Lord Shiva
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card className={classes.root}>
            <div>
              <img
                src="https://www.holidify.com/images/cmsuploads/compressed/karocc_20180920110939.jpg"
                alt=""
                srcset=""
                height="200px"
                width="100%"
              />
            </div>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Occupation</strong><br></br>
                Nearly half of the workforce in Karnataka is engaged in
                traditional agriculture and related activities. The remaining
                people of the community, however, indulge in various public,
                private sectors and performance arts. The heart of the State,
                Bangalore is nicknamed as the 'Silicon City' for the booming IT
                industry.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card className={classes.root}>
            <div>
              <img
                src="https://www.holidify.com/images/cmsuploads/compressed/karwed_20180920111336.jpg"
                alt=""
                srcset=""
                height="200px"
                width="100%"
              />
            </div>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Wedding Customs in Karnataka</strong>
                <br />
                Weddings in Karnataka follow customs similar to Traditional
                Hindu Weddings. The first ritual happens to be Nandi Puja
                followed by a fascinating ritual of Kashi Yatra takes place,
                where the groom pretends to go on a pilgrimage saying that the
                family doesn't find a bride for him. The groom is appeased by
                his uncle at the end of the Kashi Yatre and then Dev Karya takes
                place in front of Lord Ganesha ending the prewedding rituals.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: "3%" }}>
        <Grid xs={4}>
          <Card className={classes.root}>
            <div>
              <img
                src="https://www.holidify.com/images/cmsuploads/articles/278.jpg"
                alt=""
                srcset=""
                height="280px"
                width="100%"
              />
            </div>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Dressing Culture of Karnataka</strong>
                <br></br>
                In Karnataka, the attires vary from district to district as it
                is home to various communities. The Kodava people, believed to
                be the direct descendants of Alexander the Great, have a
                distinct traditional attire which acts as an immediate
                differentiator.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card className={classes.root}>
            <div>
              <img
                src="https://www.holidify.com/images/cmsuploads/articles/280.jpg"
                alt=""
                srcset=""
                height="200px"
                width="100%"
              />
            </div>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Food Culture of Karnataka</strong>
                <br></br>
                Karnataka is known for its wide variety of dosas and sambar. The
                food is rich in flavour and consists of various vegetarian and
                non-vegetarian dishes. However, a typical Kannadiga Oota (meal)
                consists of rice, sambar, pickle, ghee, dessert, and other
                curry-based dishes and is served on a banana leaf. Other popular
                dishes include the super light Neer dosa, Bisi Bele Bhaat which
                is a lot like a khichdi, and chicken curry known as Korri Gassi.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card className={classes.root}>
            <div>
              <img
                src="https://lh4.googleusercontent.com/-SVsPjS0r1QU/Tr-74B_Ak_I/AAAAAAAAA68/Gv5z6xCYMlQ/s720/IMG_2250.jpg"
                alt=""
                srcset=""
                height="200px"
                width="100%"
              />
            </div>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Dollu Kunitha</strong>
                <br></br>
                Dollu Kunitha (Kannada:ಡೊಳ್ಳು ಕುಣಿತ), is a major popular drum
                dance of Karnataka. Accompanied by singing, it provides
                spectacular variety and complexity of skills. Woven around the
                presiding deity of Beereshwara or Beeralingeswara, chiefly
                worshipped by the Kuruba Gowdas of Karnataka and also called
                Halumathasthas, it presents both entertainment and spiritual
                edification.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
