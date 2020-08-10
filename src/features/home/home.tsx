import React, { Fragment } from "react";
import { Spring } from "react-spring/renderprops";
import { Parallax, Background } from "react-parallax";
import {
  Container,
  Image,
  Segment,
  Button,
  Header,
  Grid,
  List,
  Form,
  TextArea,
  Icon,
} from "semantic-ui-react";

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};
const HomePage = () => {
  const insideStyles = {
    position: "absolute",
    background: "white",
    padding: 20,
    top: "60%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    height: "28%",
    width: "44%",
    opacity: "0.8",
  } as React.CSSProperties;

  const contactinsideStyles = {
    position: "absolute",
    background: "white",
    padding: 20,
    top: "60%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    height: "37%",
    width: "40%",
  } as React.CSSProperties;

  const image1 =
    "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/p1080x2048/116761832_3198486943534127_8280666104959091123_n.jpg?_nc_cat=104&_nc_sid=b96e70&_nc_ohc=X2F78opJUoAAX8MY5AZ&_nc_ht=scontent-waw1-1.xx&_nc_tp=6&oh=aea239b07559ac499584282f9ba66243&oe=5F4EB400";
  const image2 =
    "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/116719663_1206351393049953_9008406463830633639_n.jpg?_nc_cat=107&_nc_sid=b96e70&_nc_ohc=UXl96UARKaMAX859Aex&_nc_ht=scontent-waw1-1.xx&oh=23503122e35f5bb7dfca96eedd424b1e&oe=5F4E0D2E";
  const image3 =
    "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/s2048x2048/116769657_637372586880001_7752613265334847064_n.jpg?_nc_cat=109&_nc_sid=b96e70&_nc_ohc=izmJbwQ7lwkAX9k1Biy&_nc_ht=scontent-waw1-1.xx&_nc_tp=7&oh=6a3943cbfb22fca611a909f390ee3a0d&oe=5F4E189C";

  //position: absolute; left: 50%; transform: translate3d(-50%, -281.827px, 0px); transform-style: preserve-3d; backface-visibility: hidden; height: 1000px; width: auto; filter: none;

  return (
    <div style={{ textAlign: "center" }}>
      <Parallax
        bgImage={image2}
        strength={1050}
        bgImageAlt="as"
        blur={{ min: -8, max: 4 }}
      >
        <div style={{ height: 1050 }}>
          <div style={insideStyles}>
            <Header as="h1">meble Wysokiej jakości</Header>
            <Container text textAlign="center" style={{ marginBottom: "15px" }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                ligula lacus. Proin lobortis, lorem eget sodales aliquam, odio
                nunc placerat risus, ut fringilla turpis sapien ac nulla. Aenean
                placerat, augue sed consectetur eleifend, orci nunc vehicula
                odio, eu facilisis odio augue eu dolor. Fusce purus lorem,
                luctus vitae nunc et, feugiat aliquet lorem. Morbi maximus nisi
                ac libero scelerisque vulputate. Sed dictum cursus sollicitudin.
              </p>
            </Container>

            <Button color="brown" className="ss">
              Przeglądaj ofertę
            </Button>
            <Button color="facebook" className="fb">
              Skontaktuj się z nami
            </Button>
          </div>
        </div>
      </Parallax>

      <h2>O NAS</h2>
      <Parallax bgImage={image3} strength={1050} blur={{ min: -8, max: 4 }}>
        <div style={{ height: 1050 }}>
          <div style={insideStyles}>
            <Header as="h1">O NAS</Header>
            <Container
              text
              textAlign="justified"
              style={{ marginBottom: "15px" }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                ligula lacus. Proin lobortis, lorem eget sodales aliquam, odio
                nunc placerat risus, ut fringilla turpis sapien ac nulla. Aenean
                placerat, augue sed consectetur eleifend, orci nunc vehicula
                odio, eu facilisis odio augue eu dolor. Fusce purus lorem,
                luctus vitae nunc et, feugiat aliquet lorem. Morbi maximus nisi
                ac libero scelerisque vulputate. Sed dictum cursus sollicitudin.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Quisque a erat dignissim,
                interdum velit a, dignissim lorem.
              </p>
            </Container>

            <Button color="brown" className="ss">
              GALERIA
            </Button>
          </div>
        </div>
      </Parallax>

      <h2>KONTAKT</h2>
      <Parallax bgImage={image1} strength={1050} blur={{ min: -8, max: 4 }}>
        <div style={{ height: 1050 }}>
          <div style={contactinsideStyles} className="gsd">
            <Header as="h1">SKONTAKTUJ SIĘ Z NAMI</Header>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Container text textAlign="left" style={{ padding: "50px" }}>
                    <List relaxed>
                      <List.Item>
                        <List.Icon name="marker" />
                        <List.Content>Paterek, ul. Spokojna 9</List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="mail" />
                        <List.Content>
                          <a href="mailto:harbak@wp.pl">harbak@wp.pl</a>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="phone" />
                        <List.Content>
                          <List.Content>608 856 521</List.Content>
                        </List.Content>
                      </List.Item>
                    </List>
                    <List.Item>
                      <List.Content>
                      <Button color="facebook">
                        <Icon name="facebook" /> Facebook
                      </Button>
                      </List.Content>

                    </List.Item>
                    <List.Item>
                    <List.Content>
                    <Button color="instagram" style={{marginTop:'5px'}}>
                        <Icon name="instagram" /> Instagram
                      </Button>
                    </List.Content>
 
                    </List.Item>
                  </Container>
                </Grid.Column>
                <Grid.Column>
                  <Form>
                    <Form.Field>
                      <input placeholder="E-mail" />
                    </Form.Field>
                    <Form.Field>
                      <input placeholder="Imię" />
                    </Form.Field>
                    <Form.Field>
                      <TextArea placeholder="Wiadomość" />
                    </Form.Field>

                    <Button fluid color="brown" className="ss">
                      Wyślij wiadomość
                    </Button>
                  </Form>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
      </Parallax>

      <div>STOPKA</div>
    </div>
  );
};

export default HomePage;
